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
  const [language] = useState<Language>(Language.Ja);
  const dictionary = useMemo(() => getDictionary(language), [language])
  const {
    pokedexState,
    doTask,
    getPokemon,
    resetPokemon,
  } = useTasksSimulator(pokedexFixture, dictionary);

  const [currentPokemonId, setCurrentPokemonId] = useState<Pokemon>(Pokemon.Rowlet);
  const currentPokemon = useMemo(() => getPokemon(currentPokemonId), [currentPokemonId, getPokemon]);

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
  }, [currentPokemonId, currentSegment, doTask]);

  return (
    <div data-theme="pokemon-la" className="min-h-screen bg-surface-container">
      {/* Header */}
      <header className="bg-surface border-b border-outline/20 shadow-sm">
        <div className="max-w-none mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-on-surface">Tasks Simulator</h1>
              <span className="text-sm text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-full">
                Pokemon Legends: Arceus
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-on-surface-variant">
                Total Points: <span className="font-bold text-tertiary">{pokedexState.points}</span>
              </div>
              <div className="text-sm text-on-surface-variant">
                Target: <span className="font-bold text-primary">{targetPoints}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-none mx-auto px-8 py-6">
        <div className="grid grid-cols-12 gap-6 h-[calc(100vh-8rem)]">
          {/* Pokemon List Sidebar */}
          <aside className="col-span-3 bg-surface rounded-2xl shadow-lg overflow-hidden">
            <div className="h-full">
              <PokemonListWithFilter
                pokedex={pokedexState.pages}
                onClickPokemon={(pokemon) => setCurrentPokemonId(pokemon.id)} />
            </div>
          </aside>

          {/* Main Content */}
          <main className="col-span-7 flex flex-col gap-6">
            {/* Control Panel */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PrimaryContainer className="flex items-center justify-center min-h-[4rem]">
                <SegmentSelect
                  segments={segments}
                  currentSegment={currentSegment}
                  updateSegment={(segment) => setCurrentSegment(segment)} />
              </PrimaryContainer>
              <PrimaryContainer className="flex items-center justify-center min-h-[4rem]">
                <TargetPointsInput
                  targetPoints={targetPoints}
                  updateTargetPoints={(points) => setTargetPoints(points)} />
              </PrimaryContainer>
            </section>

            {/* Pokemon Details & Tasks */}
            <section className="flex-1 min-h-0">
              <PrimaryContainer className="h-full flex flex-col">
                <div className="flex items-center justify-between p-2 border-b border-outline/20">
                  <div className="flex-1">
                    <PokemonInfo pokemon={currentPokemon!} />
                  </div>
                  <Button
                    color="error"
                    className="ml-4 size-12 flex items-center justify-center rounded-full hover:scale-105 transition-transform"
                    onClick={() => resetPokemon({ pokemon: currentPokemon!.id })}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="currentColor">
                      <path
                        d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z" />
                    </svg>
                  </Button>
                </div>
                <div className="flex-1 overflow-x-auto overflow-y-hidden p-2">
                  <TaskTable
                    pokemon={currentPokemon!}
                    updateProgress={updateProgress} />
                </div>
              </PrimaryContainer>
            </section>
          </main>

          {/* Timeline Sidebar */}
          <aside className="col-span-2 bg-surface rounded-2xl shadow-lg overflow-hidden">
            <div className="h-full flex flex-col">
              <div className="p-4 border-b border-outline/20">
                <h2 className="text-lg font-bold text-on-surface">Progress Timeline</h2>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <div className="relative">
                  {timelineSegments.map((segment, index) => (
                    <div key={segment.id} className="relative pb-6">
                      {index < timelineSegments.length && (
                        <div className="absolute left-4 top-8 w-0.5 h-full bg-outline/30"></div>
                      )}
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                          <div className="w-3 h-3 bg-on-primary rounded-full"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="bg-surface-container-high rounded-lg p-3">
                            <div className="font-semibold text-on-surface text-sm mb-1">
                              {segment.name}
                            </div>
                            <div className="flex items-center justify-between text-xs text-on-surface-variant">
                              <span>Total: {segment.total}</span>
                              <span className="text-primary">+{segment.increased}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Final Total */}
                  <div className="relative">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-tertiary rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px"
                             fill="currentColor">
                          <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="bg-tertiary/10 border border-tertiary/20 rounded-lg p-3">
                          <div className="font-bold text-on-surface">
                            Final Total: {pokedexState.points}
                          </div>
                          <div className="text-xs text-on-surface-variant mt-1">
                            Target: {targetPoints}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
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
