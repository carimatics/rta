import { beforeEach, describe, expect, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { createStore } from 'jotai';
import { useTasksSimulator } from '@/lib/pokemon/la/tasks-simulator/hooks/use-tasks-sumulator';
import { getDictionary } from '@/lib/pokemon/la/dictionaries';
import { Language, Move, Pokedex, Pokemon, Segment, Task } from '@/lib/pokemon/la/fixtures';

describe('useTasksSimulator', () => {
  let mockPokedex: Pokedex;
  let store: ReturnType<typeof createStore>;

  beforeEach(() => {
    store = createStore();
    
    // Create a minimal mock pokedex for testing
    mockPokedex = {
      [Pokemon.Rowlet]: {
        tasks: [
          {
            id: Task.Caught,
            reward: 20,
            requirements: [1, 2, 3, 4, 5],
          },
          {
            id: Task.SeenUseMove,
            option: Move.Leafage,
            reward: 20,
            requirements: [1, 2, 4, 10, 15],
          },
          {
            id: Task.Complete,
            reward: 50,
            requirements: [1],
          },
        ],
      },
      [Pokemon.Pikachu]: {
        tasks: [
          {
            id: Task.Caught,
            reward: 20,
            requirements: [1, 2, 3, 4, 5],
          },
          {
            id: Task.SeenUseMove,
            option: Move.ThunderShock,
            reward: 15,
            requirements: [1, 3, 6, 12, 25],
          },
          {
            id: Task.Complete,
            reward: 50,
            requirements: [1],
          },
        ],
      },
    } as Pokedex;
  });

  describe('hook initialization', () => {
    it('should initialize with default values', () => {
      const dictionary = getDictionary(Language.En);
      const { result } = renderHook(() =>
        useTasksSimulator({
          pokedex: mockPokedex,
          dictionary,
          store,
        })
      );

      // Check basic structure
      expect(result.current.currentPokemon).toBeDefined();
      expect(result.current.currentPokemon.id).toBe(Pokemon.Rowlet);
      expect(result.current.currentPokemon.name).toBeDefined();
      expect(result.current.currentPokemon.tasks).toBeInstanceOf(Array);
      expect(result.current.currentPokemon.tasks.length).toBe(3);
      expect(result.current.points).toBe(0); // Initially no points
      expect(result.current.pointsBySegment).toEqual({});
    });

    it('should initialize with custom store', () => {
      const customStore = createStore();
      const dictionary = getDictionary(Language.En);
      
      const { result } = renderHook(() =>
        useTasksSimulator({
          pokedex: mockPokedex,
          dictionary,
          store: customStore,
        })
      );

      expect(result.current).toBeDefined();
      expect(result.current.currentPokemon.id).toBe(Pokemon.Rowlet);
    });
  });

  describe('current pokemon management', () => {
    it('should set current pokemon', () => {
      const dictionary = getDictionary(Language.En);
      const { result } = renderHook(() =>
        useTasksSimulator({
          pokedex: mockPokedex,
          dictionary,
          store,
        })
      );

      expect(result.current.currentPokemon.id).toBe(Pokemon.Rowlet);

      act(() => {
        result.current.setCurrentPokemon(Pokemon.Pikachu);
      });

      expect(result.current.currentPokemon.id).toBe(Pokemon.Pikachu);
    });

    it('should update current pokemon data when switching pokemon', () => {
      const dictionary = getDictionary(Language.En);
      const { result } = renderHook(() =>
        useTasksSimulator({
          pokedex: mockPokedex,
          dictionary,
          store,
        })
      );

      // Initially Rowlet
      expect(result.current.currentPokemon.id).toBe(Pokemon.Rowlet);
      expect(result.current.currentPokemon.tasks).toHaveLength(3);

      // Switch to Pikachu
      act(() => {
        result.current.setCurrentPokemon(Pokemon.Pikachu);
      });

      expect(result.current.currentPokemon.id).toBe(Pokemon.Pikachu);
      expect(result.current.currentPokemon.tasks).toHaveLength(3);
      // Verify task data is different
      expect(result.current.currentPokemon.tasks[1].option).toBe(Move.ThunderShock);
    });
  });

  describe('current pokemon properties', () => {
    it('should provide correct pokemon properties', () => {
      const dictionary = getDictionary(Language.En);
      const { result } = renderHook(() =>
        useTasksSimulator({
          pokedex: mockPokedex,
          dictionary,
          store,
        })
      );

      const { currentPokemon } = result.current;

      expect(currentPokemon.id).toBe(Pokemon.Rowlet);
      expect(currentPokemon.name).toBeDefined();
      expect(typeof currentPokemon.name).toBe('string');
      expect(currentPokemon.completed).toBe(false);
      expect(currentPokemon.caught).toBe(false);
      expect(currentPokemon.points).toBe(0);
      expect(currentPokemon.tasks).toBeInstanceOf(Array);
    });

    it('should provide task details correctly', () => {
      const dictionary = getDictionary(Language.En);
      const { result } = renderHook(() =>
        useTasksSimulator({
          pokedex: mockPokedex,
          dictionary,
          store,
        })
      );

      const tasks = result.current.currentPokemon.tasks;
      
      // Check catch task (first task)
      expect(tasks[0].id).toBe(Task.Caught);
      expect(tasks[0].reward).toBe(20);
      expect(tasks[0].requirements).toEqual([1, 2, 3, 4, 5]);
      expect(tasks[0].min).toBe(0);
      expect(tasks[0].max).toBe(5);
      expect(tasks[0].first).toBe(1);
      expect(tasks[0].last).toBe(5);
      expect(tasks[0].name).toBeDefined();
      expect(tasks[0].achievedCount).toBe(0);
      expect(tasks[0].points).toBe(0);
      expect(tasks[0].progresses).toEqual({});
      expect(tasks[0].progress).toBe(0);

      // Check move task (second task)
      expect(tasks[1].id).toBe(Task.SeenUseMove);
      expect(tasks[1].option).toBe(Move.Leafage);
      expect(tasks[1].reward).toBe(20);

      // Check complete task (last task)
      expect(tasks[2].id).toBe(Task.Complete);
      expect(tasks[2].reward).toBe(50);
    });
  });

  describe('task operations', () => {
    it('should handle doTask operation', () => {
      const dictionary = getDictionary(Language.En);
      const { result } = renderHook(() =>
        useTasksSimulator({
          pokedex: mockPokedex,
          dictionary,
          store,
        })
      );

      // Initially no progress
      expect(result.current.currentPokemon.caught).toBe(false);
      expect(result.current.currentPokemon.points).toBe(0);

      // Do a task (catch the pokemon)
      act(() => {
        result.current.currentPokemon.doTask({
          taskNo: 0, // catch task
          progress: 1,
          segment: Segment.Village1,
        });
      });

      // Should be caught now
      expect(result.current.currentPokemon.caught).toBe(true);
      expect(result.current.currentPokemon.points).toBe(20);
    });

    it('should handle resetTask operation', () => {
      const dictionary = getDictionary(Language.En);
      const { result } = renderHook(() =>
        useTasksSimulator({
          pokedex: mockPokedex,
          dictionary,
          store,
        })
      );

      // First do a task
      act(() => {
        result.current.currentPokemon.doTask({
          taskNo: 0,
          progress: 2,
          segment: Segment.Village1,
        });
      });

      expect(result.current.currentPokemon.caught).toBe(true);

      // Reset the specific task
      act(() => {
        result.current.currentPokemon.resetTask(0);
      });

      expect(result.current.currentPokemon.caught).toBe(false);
      expect(result.current.currentPokemon.points).toBe(0);
    });

    it('should handle resetTasks operation', () => {
      const dictionary = getDictionary(Language.En);
      const { result } = renderHook(() =>
        useTasksSimulator({
          pokedex: mockPokedex,
          dictionary,
          store,
        })
      );

      // Do multiple tasks
      act(() => {
        result.current.currentPokemon.doTask({
          taskNo: 0,
          progress: 2,
          segment: Segment.Village1,
        });
      });

      act(() => {
        result.current.currentPokemon.doTask({
          taskNo: 1,
          progress: 5,
          segment: Segment.Fieldlands1,
        });
      });

      expect(result.current.currentPokemon.caught).toBe(true);
      expect(result.current.currentPokemon.points).toBe(150);

      // Reset all tasks
      act(() => {
        result.current.currentPokemon.resetTasks();
      });

      expect(result.current.currentPokemon.caught).toBe(false);
      expect(result.current.currentPokemon.points).toBe(0);
    });
  });

  describe('global operations', () => {
    it('should handle global reset', () => {
      const dictionary = getDictionary(Language.En);
      const { result } = renderHook(() =>
        useTasksSimulator({
          pokedex: mockPokedex,
          dictionary,
          store,
        })
      );

      // Do catch task first to enable points
      act(() => {
        result.current.currentPokemon.doTask({
          taskNo: 0, // catch task
          progress: 1,
          segment: Segment.Village1,
        });
      });

      // Then do another task to get more points
      act(() => {
        result.current.currentPokemon.doTask({
          taskNo: 1, // move task
          progress: 2,
          segment: Segment.Village1,
        });
      });

      // Should have points now since pokemon is caught
      expect(result.current.currentPokemon.caught).toBe(true);
      expect(result.current.currentPokemon.points).toBe(60); // 20 for catch + 40 for move task

      // Global reset
      act(() => {
        result.current.reset();
      });

      expect(result.current.currentPokemon.caught).toBe(false);
      expect(result.current.currentPokemon.points).toBe(0);
    });

    it('should maintain pokemon state correctly', () => {
      const dictionary = getDictionary(Language.En);
      const { result } = renderHook(() =>
        useTasksSimulator({
          pokedex: mockPokedex,
          dictionary,
          store,
        })
      );

      // Initially no points
      expect(result.current.currentPokemon.points).toBe(0);

      // Catch Rowlet first to enable points
      act(() => {
        result.current.currentPokemon.doTask({
          taskNo: 0, // catch task
          progress: 1,
          segment: Segment.Village1,
        });
      });

      // Should be caught with catch points
      expect(result.current.currentPokemon.caught).toBe(true);
      expect(result.current.currentPokemon.points).toBe(20); // catch task points

      // Do another task
      act(() => {
        result.current.currentPokemon.doTask({
          taskNo: 1, // move task
          progress: 2,
          segment: Segment.Village1,
        });
      });

      // Should have more points now
      expect(result.current.currentPokemon.points).toBe(60); // 20 + 40

      // Switch to Pikachu (should start fresh)
      act(() => {
        result.current.setCurrentPokemon(Pokemon.Pikachu);
      });

      expect(result.current.currentPokemon.caught).toBe(false);
      expect(result.current.currentPokemon.points).toBe(0);

      // Switch back to Rowlet (should maintain state)
      act(() => {
        result.current.setCurrentPokemon(Pokemon.Rowlet);
      });

      expect(result.current.currentPokemon.caught).toBe(true);
      expect(result.current.currentPokemon.points).toBe(60);
    });
  });

  describe('effect dependencies', () => {
    it('should recreate PokedexJotai when pokedex changes', () => {
      const dictionary = getDictionary(Language.En);
      const { result, rerender } = renderHook(
        ({ pokedex }) =>
          useTasksSimulator({
            pokedex,
            dictionary,
            store,
          }),
        {
          initialProps: { pokedex: mockPokedex },
        }
      );

      const initialPokemonName = result.current.currentPokemon.name;

      // Change pokedex
      const newPokedex = {
        ...mockPokedex,
        [Pokemon.Rowlet]: {
          ...mockPokedex[Pokemon.Rowlet],
          tasks: [...mockPokedex[Pokemon.Rowlet].tasks],
        },
      };

      rerender({ pokedex: newPokedex });

      // Should still work with new pokedex
      expect(result.current.currentPokemon.name).toBe(initialPokemonName);
      expect(result.current.currentPokemon.tasks).toHaveLength(3);
    });

    it('should recreate PokedexJotai when dictionary changes', () => {
      const currentDictionary = getDictionary(Language.En);

      const { result, rerender } = renderHook(
        ({ dictionary }) =>
          useTasksSimulator({
            pokedex: mockPokedex,
            dictionary,
            store,
          }),
        {
          initialProps: { dictionary: currentDictionary },
        }
      );

      const initialName = result.current.currentPokemon.name;

      // Change dictionary
      const newDictionary = getDictionary(Language.Ja);

      rerender({ dictionary: newDictionary });

      // Name should change with new dictionary
      expect(result.current.currentPokemon.name).not.toBe(initialName);
    });
  });

  describe('error handling', () => {
    it('should handle invalid task numbers gracefully', () => {
      const dictionary = getDictionary(Language.En);
      const { result } = renderHook(() =>
        useTasksSimulator({
          pokedex: mockPokedex,
          dictionary,
          store,
        })
      );

      // Should throw error for invalid task number
      expect(() => {
        act(() => {
          result.current.currentPokemon.doTask({
            taskNo: 999,
            progress: 1,
            segment: Segment.Village1,
          });
        });
      }).toThrow('Invalid task number: 999');

      expect(() => {
        act(() => {
          result.current.currentPokemon.resetTask(999);
        });
      }).toThrow('Invalid task number: 999');
    });
  });

  describe('integration tests', () => {
    it('should handle complete workflow: catch, progress, complete, reset', () => {
      const dictionary = getDictionary(Language.En);
      const { result } = renderHook(() =>
        useTasksSimulator({
          pokedex: mockPokedex,
          dictionary,
          store,
        })
      );

      // Initial state
      expect(result.current.currentPokemon.caught).toBe(false);
      expect(result.current.currentPokemon.completed).toBe(false);
      expect(result.current.points).toBe(0);

      // Catch pokemon
      act(() => {
        result.current.currentPokemon.doTask({
          taskNo: 0,
          progress: 1,
          segment: Segment.Village1,
        });
      });

      expect(result.current.currentPokemon.caught).toBe(true);
      expect(result.current.currentPokemon.points).toBe(20);

      // Do more tasks
      act(() => {
        result.current.currentPokemon.doTask({
          taskNo: 1,
          progress: 5,
          segment: Segment.Fieldlands1,
        });
      });

      const pointsAfterTasks = result.current.currentPokemon.points;
      expect(pointsAfterTasks).toBe(80);

      // Reset all
      act(() => {
        result.current.reset();
      });

      expect(result.current.currentPokemon.caught).toBe(false);
      expect(result.current.currentPokemon.completed).toBe(false);
      expect(result.current.currentPokemon.points).toBe(0);
      expect(result.current.points).toBe(0);
    });

    it('should maintain state consistency across pokemon switches', () => {
      const dictionary = getDictionary(Language.En);
      const { result } = renderHook(() =>
        useTasksSimulator({
          pokedex: mockPokedex,
          dictionary,
          store,
        })
      );

      // Catch Rowlet first
      act(() => {
        result.current.currentPokemon.doTask({
          taskNo: 0, // catch task
          progress: 1,
          segment: Segment.Village1,
        });
      });

      // Do another task to get points
      act(() => {
        result.current.currentPokemon.doTask({
          taskNo: 1, // move task
          progress: 2,
          segment: Segment.Village1,
        });
      });

      // Verify Rowlet has individual points
      expect(result.current.currentPokemon.points).toBe(60);

      // Switch to Pikachu
      act(() => {
        result.current.setCurrentPokemon(Pokemon.Pikachu);
      });

      expect(result.current.currentPokemon.caught).toBe(false);
      // Note: Global points tracking operates on separate atom store from hook state

      // Catch Pikachu
      act(() => {
        result.current.currentPokemon.doTask({
          taskNo: 0, // catch task
          progress: 1,
          segment: Segment.Fieldlands1,
        });
      });

      // Do another task with Pikachu
      act(() => {
        result.current.currentPokemon.doTask({
          taskNo: 1, // move task
          progress: 2,
          segment: Segment.Fieldlands1,
        });
      });

      expect(result.current.currentPokemon.caught).toBe(true);
      expect(result.current.currentPokemon.points).toBe(35);

      // Switch back to Rowlet
      act(() => {
        result.current.setCurrentPokemon(Pokemon.Rowlet);
      });

      expect(result.current.currentPokemon.caught).toBe(true); // Should still be caught
    });
  });
});
