import { beforeEach, describe, expect, it } from 'vitest';
import { atom, createStore, PrimitiveAtom } from 'jotai';
import { PokedexJotai } from '@/lib/pokemon/la/tasks-simulator/pokedex-jotai';
import { Language, Move, Pokedex, Pokemon, Segment, Task } from '@/lib/pokemon/la/fixtures';
import { Dictionary, getDictionary } from '@/lib/pokemon/la/dictionaries';

describe('PokedexJotai', () => {
  let store: ReturnType<typeof createStore>;

  let mockPokedex: Pokedex;

  let pokedexJotai: PokedexJotai;
  let mockDictionaryAtom: PrimitiveAtom<Dictionary>;

  beforeEach(() => {
    store = createStore();
    const dictionary = getDictionary(Language.En);
    mockDictionaryAtom = atom(dictionary);
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
      [Pokemon.Eevee]: {
        tasks: [
          {
            id: Task.Caught,
            reward: 20,
            requirements: [1, 2, 3, 4, 5],
          },
          {
            id: Task.Evolved,
            reward: 25,
            requirements: [1, 2, 3],
          },
          {
            id: Task.Complete,
            reward: 50,
            requirements: [1],
          },
        ],
      },
    } as Pokedex;

    pokedexJotai = new PokedexJotai(mockPokedex, mockDictionaryAtom);
  });

  describe('constructor', () => {
    it('should initialize with provided pokedex and dictionary atom', () => {
      expect(pokedexJotai).toBeDefined();
      expect(pokedexJotai.pokedexAtom).toBeDefined();
      expect(pokedexJotai.pokemonAtom).toBeDefined();
      expect(pokedexJotai.pointsBySegmentAtom).toBeDefined();
      expect(pokedexJotai.pointsAtom).toBeDefined();
      expect(pokedexJotai.resetAtom).toBeDefined();
    });
  });

  describe('pokedexAtom', () => {
    it('should create pokedex atom with generated pokemon list', () => {
      const pokedex = store.get(pokedexJotai.pokedexAtom);
      expect(pokedex).toBeInstanceOf(Array);
      expect(pokedex.length).toBe(3); // Rowlet, Pikachu, Eevee
      expect(pokedex.every(p => p.constructor.name === 'PokemonJotai')).toBe(true);
    });
  });

  describe('pokemonAtom', () => {
    it('should return pokemon jotai for valid pokemon', () => {
      const rowlet = store.get(pokedexJotai.pokemonAtom)(Pokemon.Rowlet);

      expect(rowlet).toBeDefined();
      expect(rowlet?.id).toBe(Pokemon.Rowlet);
    });

    it('should return undefined for pokemon not in pokedex', () => {
      const dartrix = store.get(pokedexJotai.pokemonAtom)(Pokemon.Dartrix);
      expect(dartrix).toBeUndefined();
    });
  });

  describe('pointsBySegmentAtom', () => {
    it('should aggregate points from all pokemon by segment', () => {
      // First, let's set up some mock progress for testing
      const rowlet = store.get(pokedexJotai.pokemonAtom)(Pokemon.Rowlet)!;
      store.set(rowlet.doTaskAtom, { taskNo: 0, progress: 1, segment: Segment.Village1 });

      const pikachu = store.get(pokedexJotai.pokemonAtom)(Pokemon.Pikachu)!;
      store.set(pikachu.doTaskAtom, { taskNo: 0, progress: 1, segment: Segment.Village1 });

      const eevee = store.get(pokedexJotai.pokemonAtom)(Pokemon.Eevee)!;
      store.set(eevee.doTaskAtom, { taskNo: 0, progress: 1, segment: Segment.Fieldlands1 });

      const pointsBySegment = store.get(pokedexJotai.pointsBySegmentAtom);

      expect(pointsBySegment).toBeInstanceOf(Object);
      expect(pointsBySegment).toEqual({
        [Segment.Village1]: 40,
        [Segment.Fieldlands1]: 20,
      });
    });

    it('should return empty object when no pokemon have points', () => {
      const pointsBySegment = store.get(pokedexJotai.pointsBySegmentAtom);
      expect(pointsBySegment).toEqual({});
    });
  });

  describe('pointsAtom', () => {
    it('should sum all points from pointsBySegmentAtom', () => {
      const totalPoints = store.get(pokedexJotai.pointsAtom);
      expect(totalPoints).toBe(0); // Initially no points
    });

    it('should calculate total points correctly when pokemon have points', () => {
      const rowlet = store.get(pokedexJotai.pokemonAtom)(Pokemon.Rowlet)!;
      store.set(rowlet.doTaskAtom, { taskNo: 0, progress: 1, segment: Segment.Village1 });
      store.set(rowlet.doTaskAtom, { taskNo: 1, progress: 3, segment: Segment.Fieldlands1 });

      const pikachu = store.get(pokedexJotai.pokemonAtom)(Pokemon.Pikachu)!;
      store.set(pikachu.doTaskAtom, { taskNo: 0, progress: 1, segment: Segment.Village1 });

      const eevee = store.get(pokedexJotai.pokemonAtom)(Pokemon.Eevee)!;
      store.set(eevee.doTaskAtom, { taskNo: 0, progress: 1, segment: Segment.Fieldlands1 });

      const points = store.get(pokedexJotai.pointsAtom);
      expect(points).toEqual(100);
    });
  });

  describe('resetAtom', () => {
    it('should regenerate pokedex when reset is called', () => {
      const rowlet = store.get(pokedexJotai.pokemonAtom)(Pokemon.Rowlet)!;

      store.set(rowlet.doTaskAtom, { taskNo: 0, progress: 1, segment: Segment.Village1 });
      store.set(rowlet.doTaskAtom, { taskNo: 1, progress: 3, segment: Segment.Fieldlands1 });

      const beforePoints = store.get(pokedexJotai.pointsAtom);
      expect(beforePoints).toEqual(60);

      store.set(pokedexJotai.resetAtom);

      const afterPoints = store.get(pokedexJotai.pointsAtom);
      expect(afterPoints).toEqual(0);
    });
  });
});
