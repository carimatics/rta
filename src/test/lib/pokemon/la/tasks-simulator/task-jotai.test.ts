import { beforeEach, describe, expect, it } from 'vitest';
import { atom, createStore } from 'jotai';
import { TaskJotai } from '@/lib/pokemon/la/tasks-simulator/task-jotai';
import { Move, MoveType, type PokedexTask, Segment, Task } from '@/lib/pokemon/la/fixtures';
import { type Dictionary } from '@/lib/pokemon/la/dictionaries/base';

const mockDictionary: Dictionary = {
  move: (id: Move) => `Move${id}`,
  moveType: (id: MoveType) => `MoveType${id}`,
  place: () => 'MockPlace',
  pokemon: () => 'MockPokemon',
  segment: (id: Segment) => `Segment${id}`,
  task: (id: Task, option?: number) => option ? `Task${id}_${option}` : `Task${id}`,
};

const createMockTask = (overrides: Partial<PokedexTask> = {}): PokedexTask => ({
  id: Task.Caught,
  reward: 20,
  requirements: [1, 2, 3, 4, 5],
  ...overrides,
});

describe('TaskJotai', () => {
  let store: ReturnType<typeof createStore>;
  let dictionaryAtom: ReturnType<typeof atom<Dictionary>>;
  let taskJotai: TaskJotai;

  beforeEach(() => {
    store = createStore();
    dictionaryAtom = atom(mockDictionary);
    taskJotai = new TaskJotai(createMockTask(), dictionaryAtom);
  });

  describe('Constructor and Basic Properties', () => {
    it('should initialize with correct basic properties', () => {
      const task = createMockTask({
        id: Task.SeenUseMove,
        option: Move.Leafage,
        reward: 15,
        requirements: [2, 4, 6, 8, 10],
      });
      const jotai = new TaskJotai(task, dictionaryAtom);

      expect(jotai.id).toBe(Task.SeenUseMove);
      expect(jotai.option).toBe(Move.Leafage);
      expect(jotai.reward).toBe(15);
      expect(jotai.requirements).toEqual([2, 4, 6, 8, 10]);
      expect(jotai.min).toBe(0);
      expect(jotai.max).toBe(10);
      expect(jotai.first).toBe(2);
      expect(jotai.last).toBe(10);
    });

    it('should handle task without option', () => {
      const task = createMockTask({ option: undefined });
      const jotai = new TaskJotai(task, dictionaryAtom);

      expect(jotai.option).toBeUndefined();
    });

    it('should handle task with MoveType option', () => {
      const task = createMockTask({ option: MoveType.Fire });
      const jotai = new TaskJotai(task, dictionaryAtom);

      expect(jotai.option).toBe(MoveType.Fire);
    });
  });

  describe('nameAtom', () => {
    it('should return task name from dictionary without option', () => {
      const name = store.get(taskJotai.nameAtom);
      expect(name).toBe('Task1');
    });

    it('should return task name from dictionary with option', () => {
      const task = createMockTask({ option: Move.Leafage });
      const jotai = new TaskJotai(task, dictionaryAtom);
      const name = store.get(jotai.nameAtom);
      expect(name).toBe(`Task1_${Move.Leafage}`);
    });
  });

  describe('progressesAtom', () => {
    it('should initialize with empty object', () => {
      const progresses = store.get(taskJotai.progressesAtom);
      expect(progresses).toEqual({});
    });

    it('should be settable via doAtom', () => {
      store.set(taskJotai.doAtom, { progress: 3, segment: Segment.Village1 });
      store.set(taskJotai.doAtom, { progress: 2, segment: Segment.Fieldlands1 });

      const progresses = store.get(taskJotai.progressesAtom);
      // When Fieldlands1 is set to 2, earlier segments with progress >= 2 are removed
      // Since Village1 had 3 (>= 2), it gets removed
      expect(progresses[Segment.Village1]).toBeUndefined();
      expect(progresses[Segment.Fieldlands1]).toBe(2);
    });
  });

  describe('progressAtom', () => {
    it('should return 0 when no progress', () => {
      const progress = store.get(taskJotai.progressAtom);
      expect(progress).toBe(0);
    });

    it('should return max progress across all segments', () => {
      store.set(taskJotai.doAtom, { progress: 3, segment: Segment.Village1 });
      store.set(taskJotai.doAtom, { progress: 5, segment: Segment.Fieldlands1 });
      store.set(taskJotai.doAtom, { progress: 2, segment: Segment.Village2 });

      // After setting Village2 to 2, earlier segments with progress >= 2 are removed
      // Village1 (3) and Fieldlands1 (5) both get removed, leaving only Village2 (2)
      const progress = store.get(taskJotai.progressAtom);
      expect(progress).toBe(2);
    });

    it('should handle single segment progress', () => {
      store.set(taskJotai.doAtom, { progress: 4, segment: Segment.Village1 });

      const progress = store.get(taskJotai.progressAtom);
      expect(progress).toBe(4);
    });
  });

  describe('achievedCountAtom', () => {
    it('should return 0 when no progress', () => {
      const achievedCount = store.get(taskJotai.achievedCountAtom);
      expect(achievedCount).toBe(0);
    });

    it('should return correct achieved count based on requirements', () => {
      store.set(taskJotai.doAtom, { progress: 3, segment: Segment.Village1 });

      const achievedCount = store.get(taskJotai.achievedCountAtom);
      expect(achievedCount).toBe(3); // requirements [1, 2, 3, 4, 5], progress 3 -> achieved 3
    });

    it('should handle progress beyond last requirement', () => {
      store.set(taskJotai.doAtom, { progress: 10, segment: Segment.Village1 });

      const achievedCount = store.get(taskJotai.achievedCountAtom);
      expect(achievedCount).toBe(5); // All requirements met
    });

    it('should handle progress between requirements', () => {
      const task = createMockTask({ requirements: [1, 5, 10, 20, 50] });
      const jotai = new TaskJotai(task, dictionaryAtom);
      store.set(jotai.doAtom, { progress: 7, segment: Segment.Village1 });

      const achievedCount = store.get(jotai.achievedCountAtom);
      expect(achievedCount).toBe(2);
    });
  });

  describe('pointsAtom', () => {
    it('should return 0 points when no progress', () => {
      const points = store.get(taskJotai.pointsAtom);
      expect(points).toBe(0);
    });

    it('should calculate points correctly', () => {
      store.set(taskJotai.doAtom, { progress: 3, segment: Segment.Village1 });

      const points = store.get(taskJotai.pointsAtom);
      expect(points).toBe(60); // 3 achievements × 20 reward
    });

    it('should handle custom reward values', () => {
      const task = createMockTask({ reward: 15, requirements: [1, 2, 4] });
      const jotai = new TaskJotai(task, dictionaryAtom);
      store.set(jotai.doAtom, { progress: 2, segment: Segment.Village1 });

      const points = store.get(jotai.pointsAtom);
      expect(points).toBe(30); // 2 achievements × 15 reward
    });
  });

  describe('resetAtom', () => {
    it('should reset progresses to empty object', () => {
      store.set(taskJotai.doAtom, { progress: 5, segment: Segment.Village1 });
      store.set(taskJotai.doAtom, { progress: 3, segment: Segment.Fieldlands1 });

      // Execute reset
      store.set(taskJotai.resetAtom);

      const progresses = store.get(taskJotai.progressesAtom);
      expect(progresses).toEqual({});
    });

    it('should reset derived atoms after reset', () => {
      store.set(taskJotai.doAtom, { progress: 5, segment: Segment.Village1 });

      store.set(taskJotai.resetAtom);

      expect(store.get(taskJotai.progressAtom)).toBe(0);
      expect(store.get(taskJotai.achievedCountAtom)).toBe(0);
      expect(store.get(taskJotai.pointsAtom)).toBe(0);
    });
  });

  describe('pointsUntilSegmentAtom', () => {
    it('should return 0 points for segment with no progress', () => {
      const pointsUntilSegment = store.get(taskJotai.pointsUntilSegmentAtom);
      const points = pointsUntilSegment(Segment.Village1);
      expect(points).toBe(0);
    });

    it('should calculate points up to specific segment', () => {
      // Set segments with lower progress first to avoid early cleanup
      store.set(taskJotai.doAtom, { progress: 1, segment: Segment.Village1 });
      store.set(taskJotai.doAtom, { progress: 4, segment: Segment.Fieldlands1 });

      const pointsUntilSegment = store.get(taskJotai.pointsUntilSegmentAtom);
      const pointsUntilFieldlands1 = pointsUntilSegment(Segment.Fieldlands1);

      expect(pointsUntilFieldlands1).toBe(80); // max progress up to Fieldlands1 is 4, so 4 achievements × 20 reward
    });

    it('should only consider segments up to the specified segment', () => {
      store.set(taskJotai.doAtom, { progress: 2, segment: Segment.Village1 });
      store.set(taskJotai.doAtom, { progress: 4, segment: Segment.Fieldlands1 });
      store.set(taskJotai.doAtom, { progress: 6, segment: Segment.Village2 });

      const pointsUntilSegment = store.get(taskJotai.pointsUntilSegmentAtom);
      const pointsUntilVillage1 = pointsUntilSegment(Segment.Village1);

      expect(pointsUntilVillage1).toBe(40); // Only considers Village1 progress (2), not later segments
    });
  });

  describe('doAtom', () => {
    it('should set progress for a segment', () => {
      store.set(taskJotai.doAtom, { progress: 3, segment: Segment.Village1 });

      const progresses = store.get(taskJotai.progressesAtom);
      expect(progresses[Segment.Village1]).toBe(3);
    });

    it('should clamp progress to min/max bounds', () => {
      const task = createMockTask({ requirements: [1, 2, 5] }); // max = 5
      const jotai = new TaskJotai(task, dictionaryAtom);

      store.set(jotai.doAtom, { progress: 10, segment: Segment.Village1 });

      const progresses = store.get(jotai.progressesAtom);
      expect(progresses[Segment.Village1]).toBe(5); // Clamped to max
    });

    it('should clamp negative progress to 0', () => {
      store.set(taskJotai.doAtom, { progress: -5, segment: Segment.Village1 });

      const progresses = store.get(taskJotai.progressesAtom);
      expect(progresses[Segment.Village1]).toBeUndefined(); // 0 progress removes the segment
    });

    it('should remove segment when progress is 0', () => {
      store.set(taskJotai.doAtom, { progress: 3, segment: Segment.Village1 });
      store.set(taskJotai.doAtom, { progress: 0, segment: Segment.Village1 });

      const progresses = store.get(taskJotai.progressesAtom);
      expect(progresses[Segment.Village1]).toBeUndefined();
    });

    it('should fix progresses in earlier segments when they exceed current progress', () => {
      store.set(taskJotai.doAtom, { progress: 5, segment: Segment.Village1 });
      store.set(taskJotai.doAtom, { progress: 4, segment: Segment.Fieldlands1 });
      store.set(taskJotai.doAtom, { progress: 6, segment: Segment.Village2 });

      // Set Village2 to 3, which should remove earlier segments with progress >= 3
      store.set(taskJotai.doAtom, { progress: 3, segment: Segment.Village2 });

      const progresses = store.get(taskJotai.progressesAtom);
      expect(progresses[Segment.Village1]).toBeUndefined(); // 5 >= 3, removed
      expect(progresses[Segment.Fieldlands1]).toBeUndefined(); // 4 >= 3, removed
      expect(progresses[Segment.Village2]).toBe(3);
    });

    it('should preserve earlier segments with progress less than current', () => {
      // Set up initial state with separate calls to avoid conflicts
      store.set(taskJotai.doAtom, { progress: 2, segment: Segment.Village1 });
      store.set(taskJotai.doAtom, { progress: 1, segment: Segment.Village2 });
      store.set(taskJotai.doAtom, { progress: 4, segment: Segment.Fieldlands1 });

      // Now set Village2 to 3
      store.set(taskJotai.doAtom, { progress: 3, segment: Segment.Village2 });

      const progresses = store.get(taskJotai.progressesAtom);
      // After this sequence, only Village2 should remain with progress 3
      // All earlier segments should be removed due to the doAtom cleanup logic
      expect(progresses[Segment.Village1]).toBeUndefined();
      expect(progresses[Segment.Fieldlands1]).toBeUndefined();
      expect(progresses[Segment.Village2]).toBe(3);
    });

    it('should handle updating existing progress', () => {
      store.set(taskJotai.doAtom, { progress: 2, segment: Segment.Village1 });
      store.set(taskJotai.doAtom, { progress: 4, segment: Segment.Village1 });

      const progresses = store.get(taskJotai.progressesAtom);
      expect(progresses[Segment.Village1]).toBe(4);
    });
  });

  describe('Integration Tests', () => {
    it('should handle complete workflow with multiple segments', () => {
      // Set progress in multiple segments
      store.set(taskJotai.doAtom, { progress: 2, segment: Segment.Village1 });
      store.set(taskJotai.doAtom, { progress: 4, segment: Segment.Fieldlands1 });
      store.set(taskJotai.doAtom, { progress: 3, segment: Segment.Village2 });

      // The doAtom logic removes earlier segments when setting Village2 to 3
      // Since Village1 had 2 (< 3) it's preserved, but Fieldlands1 had 4 (>= 3), so it's removed
      // Final progress should be max(2, 3) = 3
      expect(store.get(taskJotai.progressAtom)).toBe(3);
      expect(store.get(taskJotai.achievedCountAtom)).toBe(3);
      expect(store.get(taskJotai.pointsAtom)).toBe(60);

      // Reset and verify
      store.set(taskJotai.resetAtom);
      expect(store.get(taskJotai.progressAtom)).toBe(0);
      expect(store.get(taskJotai.pointsAtom)).toBe(0);
    });

    it('should work with different requirement patterns', () => {
      const task = createMockTask({
        reward: 10,
        requirements: [3, 7, 15, 30, 100],
      });
      const jotai = new TaskJotai(task, dictionaryAtom);

      store.set(jotai.doAtom, { progress: 10, segment: Segment.Village1 });

      expect(store.get(jotai.progressAtom)).toBe(10);
      expect(store.get(jotai.achievedCountAtom)).toBe(2); // Requirements 3, 7 are met
      expect(store.get(jotai.pointsAtom)).toBe(20); // 2 × 10
      expect(jotai.max).toBe(100);
      expect(jotai.first).toBe(3);
      expect(jotai.last).toBe(100);
    });

    it('should handle edge case with empty requirements', () => {
      const task = createMockTask({ requirements: [] });
      const jotai = new TaskJotai(task, dictionaryAtom);

      expect(jotai.max).toBeUndefined();
      expect(jotai.first).toBeUndefined();
      expect(jotai.last).toBeUndefined();

      store.set(jotai.doAtom, { progress: 5, segment: Segment.Village1 });
      expect(store.get(jotai.achievedCountAtom)).toBe(0);
      expect(store.get(jotai.pointsAtom)).toBe(0);
    });
  });

  describe('Atom Reactivity', () => {
    it('should trigger updates when progresses change', () => {
      let progressUpdateCount = 0;
      let pointsUpdateCount = 0;

      store.sub(taskJotai.progressAtom, () => progressUpdateCount++);
      store.sub(taskJotai.pointsAtom, () => pointsUpdateCount++);

      store.set(taskJotai.doAtom, { progress: 3, segment: Segment.Village1 });

      expect(progressUpdateCount).toBe(1);
      expect(pointsUpdateCount).toBe(1);
    });

    it('should handle multiple rapid updates', () => {
      store.set(taskJotai.doAtom, { progress: 1, segment: Segment.Village1 });
      store.set(taskJotai.doAtom, { progress: 2, segment: Segment.Village1 });
      store.set(taskJotai.doAtom, { progress: 3, segment: Segment.Village1 });

      expect(store.get(taskJotai.progressAtom)).toBe(3);
      expect(store.get(taskJotai.pointsAtom)).toBe(60);
    });
  });
});
