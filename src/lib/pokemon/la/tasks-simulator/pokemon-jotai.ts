import { Pokedex, Pokemon, Segment } from '@/lib/pokemon/la/fixtures';
import { atom, PrimitiveAtom } from 'jotai';
import { Dictionary } from '@/lib/pokemon/la/dictionaries';
import { TaskJotai } from '@/lib/pokemon/la/tasks-simulator/task-jotai';
import { closedRangeSegments } from '@/lib/pokemon/la/utils/la-range';
import { PointsBySegments } from '@/lib/pokemon/la/tasks-simulator/points-by-segments';

export class PokemonJotai {
  readonly id: Pokemon;
  readonly isArceus: boolean;

  readonly tasks: TaskJotai[];
  readonly catchTask: TaskJotai;
  readonly normalTasks: TaskJotai[];
  readonly completeTask: TaskJotai;

  readonly nameAtom = atom<string>((get) => get(this.dictionaryAtom).pokemon(this.id));
  readonly caughtAtom = atom<boolean>((get) => get(this.catchTask.progressAtom) > 0);
  readonly pointsAtom = atom<number>((get) => get(this.caughtAtom) ? this.tasks.reduce((acc, task) => acc + get(task.pointsAtom), 0) : 0);
  readonly segmentCompletedAtom = atom<Segment | undefined>((get) => closedRangeSegments().find((segment) => {
    if (this.isArceus && get(this.caughtAtom)) {
      return true;
    }
    const pointsNormalTasksUntilSegment = get(this.pointsNormalTasksUntilSegmentAtom);
    const points = pointsNormalTasksUntilSegment(segment);
    return points >= 100;
  }));
  readonly completedAtom = atom<boolean>((get) => get(this.segmentCompletedAtom) !== undefined);
  readonly pointsBySegmentAtom = atom<PointsBySegments>((get) => {
    let previousSegment: Segment = Segment.Village1;
    let previousPoints: number;

    const pointsUntilSegment = get(this.pointsUntilSegmentAtom);
    previousPoints = pointsUntilSegment(previousSegment);
    const points = {
      ...(previousPoints > 0
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
    }
    return points;
  });

  readonly doTaskAtom = atom(null, (get, set, { taskNo, progress, segment }: { taskNo: number ; progress: number; segment: Segment }) => {
    const normalTasks = this.normalTasks;
    if (taskNo < 0 || taskNo >= normalTasks.length) {
      throw new Error(`Invalid task number: ${taskNo}`);
    }

    // update task
    const task = normalTasks[taskNo];
    set(task.doAtom, { progress, segment });

    // update complete
    const completeTask = this.completeTask;
    const segmentCompleted = get(this.segmentCompletedAtom);
    if (segmentCompleted) {
      set(completeTask.doAtom, { progress: 1, segment: segmentCompleted });
    } else {
      set(completeTask.doAtom, { progress: 0, segment: Segment.Highlands3 });
    }
  });

  readonly resetTaskAtom = atom(null, (get, set, taskNo: number) => {
    const normalTasks = this.normalTasks;
    if (taskNo < 0 || taskNo >= normalTasks.length) {
      throw new Error(`Invalid task number: ${taskNo}`);
    }
    const task = normalTasks[taskNo];
    set(task.resetAtom);
  });

  readonly resetTasksAtom = atom(null, (get, set) => {
    for (const task of this.normalTasks) {
      set(task.resetAtom);
    }
  });

  private readonly pointsUntilSegmentAtom = atom((get) => (segment: Segment) => {
    const pointsNormalTasksUntilSegment = get(this.pointsNormalTasksUntilSegmentAtom);
    const pointsCompleteTaskUntilSegment = get(this.pointsCompleteTaskUntilSegmentAtom);
    return pointsNormalTasksUntilSegment(segment) + pointsCompleteTaskUntilSegment(segment);
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

  constructor(
    private readonly dictionaryAtom: PrimitiveAtom<Dictionary>,
    pokedex: Pokedex,
    readonly pokemon: Pokemon,
  ) {
    this.id = pokemon;
    this.isArceus = pokemon === Pokemon.Arceus;
    this.tasks = pokedex[this.id].tasks.map((task) => new TaskJotai(this.dictionaryAtom, task));
    this.catchTask = this.tasks[0];
    this.normalTasks = this.tasks.slice(0, this.tasks.length - 1);
    this.completeTask = this.tasks[this.tasks.length - 1];
  }
}
