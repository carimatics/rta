import { Pokedex, Pokemon } from '@/lib/pokemon/la/fixtures';
import { Dictionary } from '@/lib/pokemon/la/dictionaries';
import { atom, createStore, useAtomValue, useSetAtom } from 'jotai';
import { PokedexJotai } from '@/lib/pokemon/la/tasks-simulator/pokedex-jotai';
import { useEffect, useMemo, useState } from 'react';

export function useTasksSimulator({
  pokedex,
  dictionary,
  store = createStore(),
}: {
  pokedex: Pokedex;
  dictionary: Dictionary;
  store?: ReturnType<typeof createStore>;
}) {
  const dictionaryAtom = useMemo(() => atom(dictionary), [dictionary]);
  const [pokedexJotai, setPokedexJotai] = useState(new PokedexJotai(pokedex, dictionaryAtom));

  const [currentPokemonId, setCurrentPokemon] = useState<Pokemon>(Pokemon.Rowlet);
  const getPokemon = useAtomValue(pokedexJotai.pokemonAtom, { store });
  const pointsBySegment = useAtomValue(pokedexJotai.pointsBySegmentAtom, { store });
  const points = useAtomValue(pokedexJotai.pointsAtom, { store });
  const reset = useSetAtom(pokedexJotai.resetAtom, { store });

  // current pokemon tasks
  const currentPokemon = getPokemon(currentPokemonId)!;
  const currentPokemonName = useAtomValue(currentPokemon.nameAtom, { store });
  const currentPokemonCompleted = useAtomValue(currentPokemon.completedAtom, { store });
  const currentPokemonCaught = useAtomValue(currentPokemon.caughtAtom, { store });
  const currentPokemonPoints = useAtomValue(currentPokemon.pointsAtom, { store });
  const currentPokemonTasks = currentPokemon.tasks.map((task) => ({
    id: task.id,
    option: task.option,
    reward: task.reward,
    requirements: task.requirements,
    min: task.min,
    max: task.max,
    first: task.first,
    last: task.last,
    name: store.get(task.nameAtom),
    achievedCount: store.get(task.achievedCountAtom),
    points: store.get(task.pointsAtom),
    progresses: store.get(task.progressesAtom),
    progress: store.get(task.progressAtom),
  }));
  const currentPokemonDoTask = useSetAtom(currentPokemon.doTaskAtom, { store });
  const currentPokemonResetTask = useSetAtom(currentPokemon.resetTaskAtom, { store });
  const currentPokemonResetTasks = useSetAtom(currentPokemon.resetTasksAtom, { store });

  useEffect(() => {
    setPokedexJotai(new PokedexJotai(pokedex, dictionaryAtom));
  }, [pokedex, dictionaryAtom]);

  return {
    setCurrentPokemon,
    currentPokemon: {
      id: currentPokemonId,
      name: currentPokemonName,
      completed: currentPokemonCompleted,
      caught: currentPokemonCaught,
      points: currentPokemonPoints,
      tasks: currentPokemonTasks,
      doTask: currentPokemonDoTask,
      resetTask: currentPokemonResetTask,
      resetTasks: currentPokemonResetTasks,
    },
    pointsBySegment,
    points,
    reset,
  };
}
