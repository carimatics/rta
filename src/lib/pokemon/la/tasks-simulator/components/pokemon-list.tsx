import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

import { PokedexPokemonState } from '@/lib/pokemon/la/tasks-simulator';
import { PokemonListCard } from '@/lib/pokemon/la/tasks-simulator/components/pokemon-list-card';

export interface PokemonListProps extends ComponentProps<'ul'> {
  pokedex: PokedexPokemonState[];
  onClickPokemon?: (pokemon: PokedexPokemonState) => void;
}

export function PokemonList({ className, pokedex, onClickPokemon, ...props }: PokemonListProps) {
  return (
    <ul className={twMerge('w-full h-[calc(100vh-112px)] flex flex-col overflow-y-auto p-1', className)} {...props}>
      {pokedex.map((pokemon) => (
        <li className="mx-4 my-2" key={pokemon.id}>
          <PokemonListCard pokemon={pokemon} onClick={onClickPokemon} />
        </li>
      ))}
    </ul>
  );
}
