import { atom, PrimitiveAtom } from 'jotai';
import { Move, MoveType, Pokedex, PokedexTask, Pokemon, Segment, Task } from '@/lib/pokemon/la/fixtures';
import { Dictionary } from '@/lib/pokemon/la/dictionaries';
import { closedRangeSegments, rangeSegments } from '@/lib/pokemon/la/utils/la-range';
import { clamp } from '@/lib/utils/range';
import { PointsBySegments } from '@/lib/pokemon/la/tasks-simulator/points-by-segments';

export type TaskProgresses = Record<Segment, number>;

const FILE_PRIVATE_DO_ATOM_ACCESSOR = Symbol('doTaskAccessor');

export class TaskJotai {
  readonly id: Task;
  readonly option?: Move | MoveType;
  readonly reward: number;
  readonly requirements: number[];
  readonly min: number;
  readonly max: number;
  readonly first: number;
  readonly last: number;

  readonly nameAtom = atom<string>((get) => get(this.dictionaryAtom).task(this.id, this.option));
  readonly achievedCountAtom = atom<number>((get) => {
    const progress = get(this.progressAtom);
    return this.requirements.findLastIndex((req) => req <= progress) + 1;
  });
  readonly pointsAtom = atom<number>((get) => get(this.achievedCountAtom) * this.reward);
  private readonly _progressesAtom = atom<TaskProgresses>({} as TaskProgresses);
  readonly progressesAtom = atom<TaskProgresses>((get) => get(this._progressesAtom));
  readonly progressAtom = atom<number>((get) => {
    const progresses = get(this._progressesAtom);
    return Object.keys(progresses)
      .map((key) => parseInt(key) as Segment)
      .reduce((max, segment) => (progresses[segment] > max ? progresses[segment] : max), 0);
  });
  readonly resetAtom = atom(null, (_, set) => {
    set(this._progressesAtom, {} as TaskProgresses);
  });
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

export class PokemonJotai {
  readonly id: Pokemon;
  readonly isArceus: boolean;
  readonly tasks: TaskJotai[];
  readonly catchTask: TaskJotai;
  readonly normalTasks: TaskJotai[];
  readonly completeTask: TaskJotai;

  readonly nameAtom = atom<string>((get) => get(this.dictionaryAtom).pokemon(this.id));
  readonly caughtAtom = atom<boolean>((get) => get(this.catchTask.progressAtom) > 0);
  readonly resetTaskAtom = atom(null, (_, set, taskNo: number) => {
    const normalTasks = this.normalTasks;
    if (taskNo < 0 || taskNo >= normalTasks.length) {
      throw new Error(`Invalid task number: ${taskNo}`);
    }
    const task = normalTasks[taskNo];
    set(task.resetAtom);
  });
  readonly resetTasksAtom = atom(null, (_, set) => {
    for (const task of this.normalTasks) {
      set(task.resetAtom);
    }
  });
  readonly pointsAtom = atom<number>((get) => get(this.caughtAtom) ? this.tasks.reduce((acc, task) => acc + get(task.pointsAtom), 0) : 0);
  readonly completedAtom = atom<boolean>((get) => get(this.segmentCompletedAtom) !== undefined);
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
  private readonly pointsCompleteTaskUntilSegmentAtom = atom((get) => (segment: Segment) => {
    const sc = get(this.segmentCompletedAtom);
    if (sc === undefined) {
      return 0;
    }
    return segment >= sc ? this.completeTask.reward : 0;
  });
  private readonly caughtUntilSegmentAtom = atom((get) => (segment: Segment) => {
    const catchTask = this.catchTask;
    return closedRangeSegments(Segment.Village1, segment).some((seg) => Object.hasOwn(get(catchTask.progressesAtom), seg));
  });
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
  private readonly pointsUntilSegmentAtom = atom((get) => (segment: Segment) => {
    const pointsNormalTasksUntilSegment = get(this.pointsNormalTasksUntilSegmentAtom);
    const pointsCompleteTaskUntilSegment = get(this.pointsCompleteTaskUntilSegmentAtom);
    return pointsNormalTasksUntilSegment(segment) + pointsCompleteTaskUntilSegment(segment);
  });
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
