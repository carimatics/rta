import { atom, PrimitiveAtom } from 'jotai';
import { Move, MoveType, Pokedex, PokedexTask, Pokemon, Segment, Task } from '@/lib/pokemon/la/fixtures';
import { Dictionary } from '@/lib/pokemon/la/dictionaries';
import { closedRangeSegments, rangeSegments } from '@/lib/pokemon/la/utils/la-range';
import { clamp } from '@/lib/utils/range';
import { PointsBySegments } from '@/lib/pokemon/la/tasks-simulator/points-by-segments';

/**
 * Type representing task progress across different game segments.
 * Maps each segment to the progress value for that segment.
 */
export type TaskProgresses = Record<Segment, number>;

/**
 * Symbol used for private access to the task execution atom.
 * Prevents external direct access to the task execution logic.
 */
const FILE_PRIVATE_DO_ATOM_ACCESSOR = Symbol('doTaskAccessor');

/**
 * Task state manager using Jotai for reactive state management.
 * Manages individual task progress, points calculation, and achievements.
 * 
 * @example
 * ```typescript
 * const taskJotai = new TaskJotai(pokedexTask, dictionaryAtom);
 * 
 * // Get task name
 * const name = store.get(taskJotai.nameAtom);
 * 
 * // Update progress
 * store.set(taskJotai[FILE_PRIVATE_DO_ATOM_ACCESSOR], { progress: 5, segment: Segment.Village1 });
 * 
 * // Get current points
 * const points = store.get(taskJotai.pointsAtom);
 * ```
 */
export class TaskJotai {
  /** The task identifier */
  readonly id: Task;

  /** Optional move or move type for the task */
  readonly option?: Move | MoveType;

  /** Points rewarded for each achievement level */
  readonly reward: number;

  /** Array of progress requirements for each achievement level */
  readonly requirements: number[];

  /** Minimum allowed progress value (always 0) */
  readonly min: number;

  /** Maximum allowed progress value (highest requirement) */
  readonly max: number;

  /** First requirement value */
  readonly first: number;

  /** Last requirement value (same as max) */
  readonly last: number;

  /**
   * Atom that returns the localized name of the task.
   * Uses the dictionary to get the appropriate name based on task ID and option.
   */
  readonly nameAtom = atom<string>((get) => get(this.dictionaryAtom).task(this.id, this.option));
  
  /**
   * Atom that calculates the number of achievement levels completed.
   * Based on the current progress and requirements array.
   */
  readonly achievedCountAtom = atom<number>((get) => {
    const progress = get(this.progressAtom);
    return this.requirements.findLastIndex((req) => req <= progress) + 1;
  });
  
  /**
   * Atom that calculates the total points earned from this task.
   * Multiplies the achieved count by the reward value.
   */
  readonly pointsAtom = atom<number>((get) => get(this.achievedCountAtom) * this.reward);
  
  /**
   * Private atom storing the raw progress data across segments.
   * Maps segments to their progress values.
   */
  private readonly _progressesAtom = atom<TaskProgresses>({} as TaskProgresses);
  
  /**
   * Read-only atom exposing the task progress across segments.
   * Provides access to the progress data without allowing direct modification.
   */
  readonly progressesAtom = atom<TaskProgresses>((get) => get(this._progressesAtom));
  
  /**
   * Atom that calculates the maximum progress value across all segments.
   * Returns the highest progress value achieved in any segment.
   */
  readonly progressAtom = atom<number>((get) => {
    const progresses = get(this._progressesAtom);
    return Object.keys(progresses)
      .map((key) => parseInt(key) as Segment)
      .reduce((max, segment) => (progresses[segment] > max ? progresses[segment] : max), 0);
  });

  /**
   * Atom that returns a function to calculate points earned up to a specific segment.
   * Takes into account progress made up to and including the specified segment.
   * 
   * @returns Function that takes a segment and returns the points earned up to that segment
   */
  readonly pointsUntilSegmentAtom = atom((get) =>
    (segment: Segment) => {
      const progress = closedRangeSegments(Segment.Village1, segment)
        .reduce((max, seg) => {
          const progress = get(this._progressesAtom)[seg] ?? 0;
          return progress > max ? progress : max;
        }, 0);
      const achievedCount = this.requirements.findLastIndex((req) => req <= progress) + 1;
      return this.reward * achievedCount;
    }
  );
  
  /**
   * Private atom for updating task progress.
   * Handles progress validation, segment management, and automatic cleanup of redundant progress.
   * Uses a symbol accessor to prevent external direct access.
   */
  readonly [FILE_PRIVATE_DO_ATOM_ACCESSOR] = atom(
    null,
    (get, set, { progress, segment }: { progress: number; segment: Segment }) => {
      const _progress = clamp(progress, this.min, this.max);

      // new progresses
      const newProgresses = { ...get(this._progressesAtom) };
      if (_progress === 0) {
        delete newProgresses[segment];
      } else {
        newProgresses[segment] = _progress;
      }

      // fix progresses before the current segment
      for (const seg of rangeSegments(Segment.Village1, segment)) {
        const before = newProgresses[seg] ?? 0;
        if (before >= _progress) {
          delete newProgresses[seg];
        }
      }

      // update progresses
      set(this._progressesAtom, newProgresses);
    }
  );

  /**
   * Creates a new TaskJotai instance.
   * 
   * @param task - The pokedex task data containing ID, requirements, and rewards
   * @param dictionaryAtom - Atom containing the dictionary for localized names
   */
  constructor(
    readonly task: PokedexTask,
    private readonly dictionaryAtom: PrimitiveAtom<Dictionary>,
  ) {
    this.id = task.id;
    this.option = task.option;
    this.reward = task.reward;
    this.requirements = task.requirements;
    this.min = 0;
    this.max = this.requirements[this.requirements.length - 1];
    this.first = this.requirements[0];
    this.last = this.requirements[this.requirements.length - 1];
  }
}

/**
 * Pokemon state manager using Jotai for reactive state management.
 * Manages individual Pokemon data including tasks, progress, and point calculations.
 * 
 * @example
 * ```typescript
 * const pokemonJotai = new PokemonJotai(pokedex, Pokemon.Rowlet, dictionaryAtom);
 * 
 * // Get pokemon name
 * const name = store.get(pokemonJotai.nameAtom);
 * 
 * // Update task progress
 * store.set(pokemonJotai.doTaskAtom, { taskNo: 0, progress: 5, segment: Segment.Village1 });
 * 
 * // Check if caught
 * const isCaught = store.get(pokemonJotai.caughtAtom);
 * ```
 */
export class PokemonJotai {
  /** The Pokemon identifier */
  readonly id: Pokemon;

  /** Whether this Pokemon is Arceus (has special completion rules) */
  readonly isArceus: boolean;

  /** Array of all tasks for this Pokemon */
  readonly tasks: TaskJotai[];

  /** The catch task (always the first task) */
  readonly catchTask: TaskJotai;

  /** Normal tasks excluding the catch and complete tasks */
  readonly normalTasks: TaskJotai[];

  /** The completion task (always the last task) */
  readonly completeTask: TaskJotai;

  /**
   * Atom that returns the localized name of the Pokemon.
   * Uses the dictionary to get the appropriate name based on Pokemon ID.
   */
  readonly nameAtom = atom<string>((get) => get(this.dictionaryAtom).pokemon(this.id));
  
  /**
   * Atom that determines if the Pokemon has been caught.
   * Returns true if the catch task has any progress.
   */
  readonly caughtAtom = atom<boolean>((get) => get(this.catchTask.progressAtom) > 0);
  
  /**
   * Write-only atom to reset a specific task by index.
   * Validates the task number and resets the corresponding normal task.
   * 
   * @throws Error if taskNo is invalid
   */
  readonly resetTaskAtom = atom(null, (_, set, taskNo: number) => {
    set(this.doTaskAtom, { taskNo, progress: 0, segment: Segment.Highlands3 });
  });
  
  /**
   * Write-only atom to reset all normal tasks.
   * Iterates through all normal tasks and resets their progress.
   */
  readonly resetTasksAtom = atom(null, (_, set) => {
    for (let i = 0; i < this.normalTasks.length; i++) {
      set(this.resetTaskAtom, i);
    }
  });
  
  /**
   * Atom that calculates the total points earned from this Pokemon.
   * Returns 0 if the Pokemon hasn't been caught, otherwise sums all task points.
   */
  readonly pointsAtom = atom<number>((get) => get(this.caughtAtom) ? this.tasks.reduce((acc, task) => acc + get(task.pointsAtom), 0) : 0);
  
  /**
   * Atom that determines if the Pokemon has been completed.
   * Returns true if the Pokemon has reached a completed segment.
   */
  readonly completedAtom = atom<boolean>((get) => get(this.segmentCompletedAtom) !== undefined);
  
  /**
   * Write-only atom to update task progress and handle completion logic.
   * Updates the specified task and automatically manages the completion task.
   * 
   * @throws Error if taskNo is invalid
   */
  readonly doTaskAtom = atom(
    null,
    (get, set, { taskNo, progress, segment }: { taskNo: number; progress: number; segment: Segment }) => {
      const normalTasks = this.normalTasks;
      if (taskNo < 0 || taskNo >= normalTasks.length) {
        throw new Error(`Invalid task number: ${taskNo}`);
      }

      // update task
      const task = normalTasks[taskNo];
      set(task[FILE_PRIVATE_DO_ATOM_ACCESSOR], { progress, segment });

      // update complete
      const completeTask = this.completeTask;
      const segmentCompleted = get(this.segmentCompletedAtom);
      if (segmentCompleted) {
        set(completeTask[FILE_PRIVATE_DO_ATOM_ACCESSOR], { progress: 1, segment: segmentCompleted });
      } else {
        set(completeTask[FILE_PRIVATE_DO_ATOM_ACCESSOR], { progress: 0, segment: Segment.Highlands3 });
      }
    }
  );
  
  /**
   * Private atom that calculates points from the completion task up to a specific segment.
   * Returns the completion task reward if the segment is completed, otherwise 0.
   */
  private readonly pointsCompleteTaskUntilSegmentAtom = atom((get) => (segment: Segment) => {
    const segmentCompleted = get(this.segmentCompletedAtom);
    if (segmentCompleted === undefined) {
      return 0;
    }
    return segment >= segmentCompleted ? this.completeTask.reward : 0;
  });
  
  /**
   * Private atom that determines if the Pokemon was caught up to a specific segment.
   * Checks if there's any catch progress in segments up to and including the specified segment.
   */
  private readonly caughtUntilSegmentAtom = atom((get) => (segment: Segment) => {
    const catchTask = this.catchTask;
    return closedRangeSegments(Segment.Village1, segment).some((seg) => Object.hasOwn(get(catchTask.progressesAtom), seg));
  });
  
  /**
   * Private atom that calculates points from normal tasks up to a specific segment.
   * Returns 0 if the Pokemon wasn't caught by that segment, otherwise sums normal task points.
   */
  private readonly pointsNormalTasksUntilSegmentAtom = atom((get) => (segment: Segment) => {
    const caughtUntilSegment = get(this.caughtUntilSegmentAtom);
    if (!caughtUntilSegment(segment)) {
      return 0;
    }
    return this.normalTasks.reduce((acc, task) => {
      const pointsUntilSegment = get(task.pointsUntilSegmentAtom);
      const points = pointsUntilSegment(segment);
      return acc + points;
    }, 0);
  });
  
  /**
   * Atom that determines the first segment where this Pokemon is considered completed.
   * For Arceus, completion happens immediately upon catching.
   * For other Pokemon, completion requires 100+ points from normal tasks.
   */
  readonly segmentCompletedAtom = atom<Segment | undefined>(
    (get) => closedRangeSegments().find((segment) => {
      if (this.isArceus && get(this.caughtAtom)) {
        return true;
      }
      const pointsNormalTasksUntilSegment = get(this.pointsNormalTasksUntilSegmentAtom);
      const points = pointsNormalTasksUntilSegment(segment);
      return points >= 100;
    })
  );
  
  /**
   * Private atom that calculates total points (normal + completion) up to a specific segment.
   * Combines points from normal tasks and completion task for the specified segment.
   */
  private readonly pointsUntilSegmentAtom = atom((get) => (segment: Segment) => {
    const pointsNormalTasksUntilSegment = get(this.pointsNormalTasksUntilSegmentAtom);
    const pointsCompleteTaskUntilSegment = get(this.pointsCompleteTaskUntilSegmentAtom);
    return pointsNormalTasksUntilSegment(segment) + pointsCompleteTaskUntilSegment(segment);
  });
  
  /**
   * Atom that calculates points earned by this Pokemon in each segment.
   * Returns an object mapping segments to the incremental points earned in that segment.
   * Handles the progression from Village1 through Highlands3.
   */
  readonly pointsBySegmentAtom = atom<PointsBySegments>((get) => {
    let previousSegment: Segment = Segment.Village1;
    let previousPoints: number;

    const pointsUntilSegment = get(this.pointsUntilSegmentAtom);
    previousPoints = pointsUntilSegment(previousSegment);
    const points = {
      ...(
        previousPoints > 0
          ? {
            [previousSegment]: previousPoints,
          }
          : {}
      ),
    } as PointsBySegments;

    for (const segment of closedRangeSegments(Segment.Fieldlands1, Segment.Highlands3)) {
      const total = pointsUntilSegment(segment);
      const increased = total - previousPoints;
      if (increased > 0) {
        points[segment] = increased;
        previousSegment = segment;
      }
      previousPoints = total;
    }
    return points;
  });

  /**
   * Creates a new PokemonJotai instance.
   * 
   * @param pokedex - The pokedex data containing all Pokemon information
   * @param pokemon - The specific Pokemon ID for this instance
   * @param dictionaryAtom - Atom containing the dictionary for localized names
   */
  constructor(
    readonly pokedex: Pokedex,
    readonly pokemon: Pokemon,
    private readonly dictionaryAtom: PrimitiveAtom<Dictionary>,
  ) {
    this.id = pokemon;
    this.isArceus = pokemon === Pokemon.Arceus;
    this.tasks = pokedex[this.id].tasks.map((task) => new TaskJotai(task, this.dictionaryAtom));
    this.catchTask = this.tasks[0];
    this.normalTasks = this.tasks.slice(0, this.tasks.length - 1);
    this.completeTask = this.tasks[this.tasks.length - 1];
  }
}
