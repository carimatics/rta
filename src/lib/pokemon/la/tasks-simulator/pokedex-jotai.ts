import { atom, PrimitiveAtom } from 'jotai';
import { PointsBySegments } from '@/lib/pokemon/la/tasks-simulator/points-by-segments';
import { Pokedex, Pokemon, Segment } from '@/lib/pokemon/la/fixtures';
import { Dictionary } from '@/lib/pokemon/la/dictionaries';
import { PokemonJotai } from '@/lib/pokemon/la/tasks-simulator/pokemon-jotai';

/**
 * Pokedex state manager using Jotai for reactive state management.
 * Manages a collection of Pokemon and their associated tasks, points, and progress.
 * 
 * @example
 * ```typescript
 * const dictionary = getDictionary(Language.En);
 * const dictionaryAtom = atom(dictionary);
 * const pokedexJotai = new PokedexJotai(pokedex, dictionaryAtom);
 * 
 * // Get a specific pokemon
 * const pokemonGetter = store.get(pokedexJotai.pokemonAtom);
 * const rowlet = pokemonGetter(Pokemon.Rowlet);
 * 
 * // Get total points
 * const totalPoints = store.get(pokedexJotai.pointsAtom);
 * ```
 */
export class PokedexJotai {
  /**
   * Atom containing the array of all Pokemon instances in the pokedex.
   * Each Pokemon is wrapped in a PokemonJotai for state management.
   */
  readonly pokedexAtom: PrimitiveAtom<PokemonJotai[]>;
  
  /**
   * Atom that returns a function to find a specific Pokemon by ID.
   * Returns undefined if the Pokemon is not found in the pokedex.
   * 
   * @returns Function that takes a Pokemon ID and returns the corresponding PokemonJotai instance or undefined
   */
  readonly pokemonAtom = atom((get) => (pokemon: Pokemon) => {
    const pokedex = get(this.pokedexAtom);
    return pokedex.find((p) => p.id === pokemon);
  });

  /**
   * Atom that aggregates points from all Pokemon by segment.
   * Combines points from all Pokemon for each game segment.
   * 
   * @returns Object mapping each segment to the total points earned in that segment
   */
  readonly pointsBySegmentAtom = atom<PointsBySegments>((get) => {
    const pokedex = get(this.pokedexAtom);
    const points = {} as PointsBySegments;
    for (const pokemon of pokedex) {
      const pt = get(pokemon.pointsBySegmentAtom);
      for (const segment of Object.keys(pt)) {
        const seg = parseInt(segment) as Segment;
        points[seg] ??= 0;
        points[seg] += pt[seg];
      }
    }
    return points;
  });
  
  /**
   * Atom that calculates the total points across all Pokemon and segments.
   * 
   * @returns Total number of points earned across the entire pokedex
   */
  readonly pointsAtom = atom<number>((get) => {
    const pointsBySegment = get(this.pointsBySegmentAtom);
    return Object.values(pointsBySegment).reduce((acc, points) => {
      return acc + points;
    }, 0);
  });
  
  /**
   * Write-only atom to reset the entire pokedex to its initial state.
   * Regenerates all Pokemon instances with fresh state.
   */
  readonly resetAtom = atom(null, (_, set) => {
    set(this.pokedexAtom, this.generateNewPokedex());
  });

  /**
   * Creates a new PokedexJotai instance.
   * 
   * @param pokedex - The pokedex data containing Pokemon and their tasks
   * @param dictionaryAtom - Atom containing the dictionary for localized names
   */
  constructor(
    private readonly pokedex: Pokedex,
    private readonly dictionaryAtom: PrimitiveAtom<Dictionary>,
  ) {
    this.pokedexAtom = atom(this.generateNewPokedex());
  }

  /**
   * Generates a fresh array of PokemonJotai instances from the pokedex data.
   * Creates instances for all Pokemon in the pokedex, sorted by ID.
   * 
   * @returns Array of PokemonJotai instances
   * @private
   */
  private generateNewPokedex(): PokemonJotai[] {
    const pokemons = Object.keys(this.pokedex).map((id) => parseInt(id) as Pokemon).sort();
    return pokemons.map((id) => new PokemonJotai(this.pokedex, id, this.dictionaryAtom));
  }
}
