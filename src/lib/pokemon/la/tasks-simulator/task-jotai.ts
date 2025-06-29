import { atom, PrimitiveAtom } from 'jotai';
import { Move, MoveType, PokedexTask, Segment, Task } from '@/lib/pokemon/la/fixtures';
import { PointsBySegments } from '@/lib/pokemon/la/tasks-simulator/points-by-segments';
import { Dictionary } from '@/lib/pokemon/la/dictionaries';
import { closedRangeSegments, rangeSegments } from '@/lib/pokemon/la/utils/la-range';
import { clamp } from '@/lib/utils/range';

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
  readonly progressesAtom = atom<Record<Segment, number>>((get) => get(this._progressesAtom));
  readonly progressAtom = atom<number>((get) => {
    const progresses = get(this._progressesAtom);
    return Object.keys(progresses)
      .map((key) => parseInt(key) as Segment)
      .reduce((max, segment) => (progresses[segment] > max ? progresses[segment] : max), 0);
  });
  readonly achievedCountAtom = atom<number>((get) => {
    const progress = get(this.progressAtom);
    return this.requirements.findLastIndex((req) => req <= progress) + 1;
  });
  readonly pointsAtom = atom<number>((get) => get(this.achievedCountAtom) * this.reward);
  readonly resetAtom = atom(null, (get, set) => {
    set(this._progressesAtom, {} as PointsBySegments);
  });
  readonly pointsUntilSegmentAtom = atom((get) => {
    return (segment: Segment) => {
      const progress = closedRangeSegments(Segment.Village1, segment)
        .reduce((max, seg) => {
          const progress = get(this._progressesAtom)[seg] ?? 0;
          return progress > max ? progress : max;
        }, 0);
      const achievedCount = this.requirements.findLastIndex((req) => req <= progress) + 1;
      return this.reward * achievedCount;
    };
  });
  readonly doAtom = atom(null, (get, set, { progress, segment }: { progress: number; segment: Segment }) => {
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
  });

  private readonly _progressesAtom = atom<PointsBySegments>({} as PointsBySegments);
  constructor(
    private readonly dictionaryAtom: PrimitiveAtom<Dictionary>,
    readonly task: PokedexTask,
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
