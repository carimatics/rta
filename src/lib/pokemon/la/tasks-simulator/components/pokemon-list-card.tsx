import { ComponentProps } from 'react';
import { PokedexPokemonState } from '@/lib/pokemon/la/tasks-simulator';
import { twMerge } from 'tailwind-merge';
import { PokemonImage } from '@/lib/pokemon/la/tasks-simulator/components/pokemon-image';

export interface PokemonListCardProps extends Omit<ComponentProps<'div'>, 'onClick'> {
  pokemon: PokedexPokemonState;
  onClick?: (pokemon: PokedexPokemonState) => void;
}

export function PokemonListCard({ className, pokemon, onClick, ...props }: PokemonListCardProps) {
  return (
    <div
      className={twMerge('flex bg-primary hover:brightness-125 border border-outline gap-2 overflow-clip rounded-xl transition-all, ease-out', className)}
      onClick={() => onClick?.(pokemon)}
      {...props}
    >
      <PokemonImage
        size={80}
        pokemon={pokemon}
      />
      <div className="flex flex-col w-full pr-4 text-on-primary">
        <span className="mt-1 font-bold">No. {pokemon.id}</span>
        <span className="font-bold">{pokemon.name}</span>
        <span className="text-end">{pokemon.points}</span>
      </div>
    </div>
  );
}
