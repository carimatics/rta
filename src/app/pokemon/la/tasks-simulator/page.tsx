'use client';

import { createStore, Provider } from 'jotai';
import { useCallback, useMemo, useState } from 'react';
import { useTasksSimulator } from '@/lib/pokemon/la/tasks-simulator/hooks';
import { pokedex as pokedexFixture } from '@/lib/pokemon/la/fixtures/pokedex';
import { getDictionary } from '@/lib/pokemon/la/dictionaries';
import { Language, Pokemon, Segment } from '@/lib/pokemon/la/fixtures';
import { closedRangeSegments } from '@/lib/pokemon/la/utils/la-range';
import { PokemonListWithFilter } from '@/lib/pokemon/la/tasks-simulator/components/pokemon-list-with-filter';
import { PrimaryContainer } from '@/lib/pokemon/la/tasks-simulator/components/primary-container';
import { SegmentSelect } from '@/lib/pokemon/la/tasks-simulator/components/segment-select';
import { TargetPointsInput } from '@/lib/pokemon/la/tasks-simulator/components/target-points-input';
import { PokemonInfo } from '@/lib/pokemon/la/tasks-simulator/components/pokemon-info';
import { Button } from '@/lib/components';
import { TaskTable } from '@/lib/pokemon/la/tasks-simulator/components/task-table';

const store = createStore();

function TaskSimulatorContent() {
  const [language, setLanguage] = useState<Language>(Language.Ja);
  const dictionary = useMemo(() => getDictionary(language), [language])
  const {
    pokedexState,
    doTask,
    getPokemon,
    resetPokemon,
  } = useTasksSimulator(pokedexFixture, dictionary);

  const [currentPokemonId, setCurrentPokemonId] = useState<Pokemon>(Pokemon.Rowlet);
  const currentPokemon = useMemo(() => getPokemon(currentPokemonId), [currentPokemonId]);

  const [currentSegment, setCurrentSegment] = useState<Segment>(Segment.Village1);
  const segments = useMemo(() =>
      closedRangeSegments(Segment.Village1, Segment.Highlands1)
        .map((segment) => ({ id: segment, name: dictionary.segment(segment) })),
    [dictionary]
  );
  const timelineSegments = useMemo(() =>
    Object.entries(pokedexState.pointsBySegments)
      .map(([segment, points]) => [parseInt(segment), points])
      .sort(([a], [b]) => a - b)
      .map(([segment, points]) => ({
        id: segment as Segment,
        name: dictionary.segment(segment as Segment),
        increased: points,
      }))
      .reduce((acc, { id, name, increased }) => {
        const previous = acc.length === 0 ? 0 : acc[acc.length - 1].total;
        acc.push({
          id,
          name,
          increased,
          total: previous + increased,
        });
        return acc;
      }, [] as { id: Segment; name: string, increased: number, total: number }[]),
    [pokedexState.pointsBySegments, dictionary]
  );

  const [targetPoints, setTargetPoints] = useState(8500);
  const updateProgress = useCallback((taskNo: number, progress: number) => {
    doTask({ pokemon: currentPokemonId, segment: currentSegment, taskNo, progress });
  }, [currentPokemonId, currentPokemon]);

  return (
    <div data-theme="pokemon-la" className="flex flex-col h-screen overflow-hidden bg-surface-container">
      <div className="flex">
        <aside className="flex w-80 flex-col">
          <PokemonListWithFilter
            pokedex={pokedexState.pages}
            onClickPokemon={(pokemon) => setCurrentPokemonId(pokemon.id)} />
        </aside>
        <main className="mx-2 flex flex-1 flex-col">
          <section className="mx-2 mb-4 flex items-center gap-4">
            <PrimaryContainer className="mx-2 mb-4 flex items-center gap-4">
              <SegmentSelect
                segments={segments}
                currentSegment={currentSegment}
                updateSegment={(segment) => setCurrentSegment(segment)} />
            </PrimaryContainer>
            <PrimaryContainer className="max-h-16">
              <TargetPointsInput
                targetPoints={targetPoints}
                updateTargetPoints={(points) => setTargetPoints(points)} />
            </PrimaryContainer>
          </section>
          <section className="mx-2 mb-4">
            <PrimaryContainer className="flex flex-col">
              <div className="m-2 flex w-full">
                <PokemonInfo pokemon={currentPokemon!} />
                <Button
                  color="error"
                  className="mr-8 size-10 flex items-center justify-center"
                  onClick={() => resetPokemon({ pokemon: currentPokemon!.id })}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#ffff">
                    <path
                      d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z" />
                  </svg>
                </Button>
              </div>
              <div className="m-2 flex-1 overflow-x-auto">
                <TaskTable
                  pokemon={currentPokemon!}
                  updateProgress={updateProgress} />
              </div>
            </PrimaryContainer>
          </section>
        </main>
        <aside className="flex w-60 flex-col">
          <div className="mt-12 overflow-y-auto">
            <ul className="w-60 p-1">
              {timelineSegments.map((segment) => (
                <li key={segment.id} className="pb-2">
                  <div className="flex items-center gap-2 font-bold">
                    <div className="bg-surface-container text-on-surface w-32 rounded-md p-1 text-center">
                      {segment.name}
                    </div>
                    <div>
                      {segment.total}
                      (+{segment.increased})
                    </div>
                  </div>
                </li>
              ))}
              <li>
                <div className="flex gap-4">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                         fill="#75FB4C">
                      <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                    </svg>
                  </div>
                  <div className="font-bold">{pokedexState.points}</div>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function TaskSimulatorPage() {
  return (
    <Provider store={store}>
      <TaskSimulatorContent />
    </Provider>
  );
}
