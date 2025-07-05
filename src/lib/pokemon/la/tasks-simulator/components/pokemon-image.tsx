import { ComponentProps } from 'react';

import nextConfig from '../../../../../../next.config';

import { Pokemon } from '@/lib/pokemon/la/fixtures';
import { PokedexPokemonState } from '@/lib/pokemon/la/tasks-simulator';


export interface PokemonImageProps extends ComponentProps<'img'> {
  pokemon: PokedexPokemonState;
  size: number | string;
}

function src(id: Pokemon): string {
  return `${nextConfig.basePath}/pokemon/la/images/pokemon/${id}.png`;
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
