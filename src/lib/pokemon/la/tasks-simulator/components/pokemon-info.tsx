import { ComponentProps, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { PokedexPokemonState } from '@/lib/pokemon/la/tasks-simulator';
import { PokemonImage } from '@/lib/pokemon/la/tasks-simulator/components/pokemon-image';

export interface PokemonInfoProps extends ComponentProps<'div'> {
  pokemon: PokedexPokemonState;
}

export function PokemonInfo({ className, pokemon, ...props }: PokemonInfoProps) {
  const id = useMemo(() => pokemon.id, [pokemon.id]);
  const name = useMemo(() => pokemon.name, [pokemon.name]);
  const points = useMemo(() => pokemon.points, [pokemon.points]);
  return (
    <div
      className={twMerge(`flex flex-1 gap-2`, className)}
      {...props}
    >
      <PokemonImage pokemon={pokemon} size={80} />
      <div className="flex flex-col font-bold">
        <div>No. {id}</div>
        <div>{name}</div>
        <div>{points}</div>
      </div>
    </div>
  );
}
