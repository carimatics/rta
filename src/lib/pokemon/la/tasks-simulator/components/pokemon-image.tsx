import { ComponentProps } from 'react';

import { PokedexPokemonState } from '@/lib/pokemon/la/tasks-simulator';
import { Pokemon } from '@/lib/pokemon/la/fixtures';

export interface PokemonImageProps extends ComponentProps<'img'> {
  pokemon: PokedexPokemonState;
  size: number | string;
}

function src(id: Pokemon): string {
  return `/pokemon/la/images/pokemon/${id}.png`;
}

export function PokemonImage({ size, className, pokemon }: PokemonImageProps) {
  return (
    <img
      className={className}
      width={size}
      height={size}
      alt={pokemon.name}
      src={src(pokemon.id)}
    />
  );
}
