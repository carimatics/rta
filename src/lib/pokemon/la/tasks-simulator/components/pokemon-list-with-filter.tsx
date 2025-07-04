import { ComponentProps, useCallback, useMemo, useState } from 'react';
import { PokedexPokemonState } from '@/lib/pokemon/la/tasks-simulator';
import { Button, SearchInput } from '@/lib/components';
import { hiraganaToKatakana } from '@/lib/utils/change-case';
import { PokemonList } from '@/lib/pokemon/la/tasks-simulator/components/pokemon-list';

export interface PokemonListStateProps extends ComponentProps<'div'> {
  pokedex: PokedexPokemonState[];
  onClickPokemon?: (pokemon: PokedexPokemonState) => void;
}

export function PokemonListWithFilter({
  className,
  pokedex,
  onClickPokemon,
  ...props
}: PokemonListStateProps) {
  const [searchInput, setSearchInput] = useState('');
  const searchWord = useMemo(() => hiraganaToKatakana(searchInput), [searchInput]);
  const filteredPokedex = useMemo(() =>
    searchWord === ''
      ? pokedex
      : pokedex.filter((pokemon) => pokemon.name.includes(searchWord) || pokemon.id.toString().includes(searchWord)),
    [pokedex, searchWord]
  );
  const onClickClearInput = useCallback(() => setSearchInput(''), [setSearchInput]);

  return (
    <div className={className} {...props}>
      <div className="mx-4 my-2">
        <div className="flex gap-2">
          <SearchInput
            className="flex-1 min-w-0"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)} />
          <Button color="error" className="flex-shrink-0" onClick={onClickClearInput}>Clear</Button>
        </div>
      </div>
      <div className="my-1">
        <PokemonList pokedex={filteredPokedex} onClickPokemon={onClickPokemon} />
      </div>
    </div>
  );
}
