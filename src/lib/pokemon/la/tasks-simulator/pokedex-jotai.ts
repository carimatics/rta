import { atom, PrimitiveAtom } from 'jotai';
import { PointsBySegments } from '@/lib/pokemon/la/tasks-simulator/points-by-segments';
import { Pokedex, Pokemon, Segment } from '@/lib/pokemon/la/fixtures';
import { Dictionary } from '@/lib/pokemon/la/dictionaries';
import { PokemonJotai } from '@/lib/pokemon/la/tasks-simulator/pokemon-jotai';

export class PokedexJotai {
  readonly pokedexAtom: PrimitiveAtom<PokemonJotai[]>;
  readonly pokemonAtom = atom((get) => (pokemon: Pokemon) => {
    const pokedex = get(this.pokedexAtom);
    return pokedex.find((p) => p.id === pokemon);
  });

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
  readonly pointsAtom = atom<number>((get) => {
    const pointsBySegment = get(this.pointsBySegmentAtom);
    return Object.values(pointsBySegment).reduce((acc, points) => {
      return acc + points;
    }, 0);
  });
  readonly resetAtom = atom(null, (_, set) => {
    set(this.pokedexAtom, this.generateNewPokedex());
  });

  constructor(
    private readonly pokedex: Pokedex,
    private readonly dictionaryAtom: PrimitiveAtom<Dictionary>,
  ) {
    this.pokedexAtom = atom(this.generateNewPokedex());
  }

  private generateNewPokedex(): PokemonJotai[] {
    const pokemons = Object.keys(this.pokedex).map((id) => parseInt(id) as Pokemon).sort();
    return pokemons.map((id) => new PokemonJotai(this.pokedex, id, this.dictionaryAtom));
  }
}
