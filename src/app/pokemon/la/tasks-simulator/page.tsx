'use client';

import { createStore, Provider } from 'jotai';
import { useCallback, useMemo, useState } from 'react';
import React from 'react';
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
import { PokemonImage } from '@/lib/pokemon/la/tasks-simulator/components/pokemon-image';

const store = createStore();

type TabType = 'overview' | 'tasks';

function TaskSimulatorContent() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [language, setLanguage] = useState<Language>(Language.Ja);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const progressPercentage = Math.min((pokedexState.points / targetPoints) * 100, 100);

  const tabs = [
    { id: 'overview' as TabType, name: 'Overview', icon: '📊' },
    { id: 'tasks' as TabType, name: 'Tasks', icon: '✅' },
  ];

  // Handle keyboard shortcut for sidebar
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'p' || event.key === 'P') {
      setIsSidebarOpen(prev => !prev);
    }
    if (event.key === 'Escape') {
      setIsSidebarOpen(false);
    }
  }, []);

  // Add keyboard event listeners
  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const renderOverviewTab = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Progress Card */}
      <PrimaryContainer className="lg:col-span-1">
        <div className="p-6">
          <h3 className="text-lg font-bold text-on-surface mb-4">Progress Overview</h3>
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-32 h-32">
              <svg className="transform -rotate-90 w-32 h-32">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-surface-container-high"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  strokeDashoffset={`${2 * Math.PI * 56 * (1 - progressPercentage / 100)}`}
                  className={progressPercentage >= 100 ? "text-tertiary" : "text-primary"}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-on-surface">
                  {Math.round(progressPercentage)}%
                </span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-on-surface">
                {pokedexState.points.toLocaleString()} pts
              </div>
              <div className="text-sm text-on-surface-variant">
                of {targetPoints.toLocaleString()} target
              </div>
              <div className="text-sm text-on-surface-variant mt-1">
                {targetPoints - pokedexState.points > 0 
                  ? `${(targetPoints - pokedexState.points).toLocaleString()} remaining`
                  : 'Target achieved! 🎉'
                }
              </div>
            </div>
          </div>
        </div>
      </PrimaryContainer>

      {/* Progress Timeline */}
      <PrimaryContainer className="lg:col-span-2">
        <div className="p-4 h-full flex flex-col">
          <h3 className="text-lg font-bold text-on-surface mb-4">Progress Timeline</h3>
          <div className="flex-1 overflow-y-auto">
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
                    <div className={`rounded-lg p-3 ${
                      pokedexState.points >= targetPoints
                        ? 'bg-tertiary/10 border border-tertiary/20'
                        : 'bg-error/10 border border-error/20'
                    }`}>
                      <div className={`font-bold ${
                        pokedexState.points >= targetPoints
                          ? 'text-tertiary'
                          : 'text-error'
                      }`}>
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
      </PrimaryContainer>

      {/* Target Points Setting */}
      <div className="lg:col-span-3">
        <PrimaryContainer>
          <div className="p-4">
            <h4 className="font-semibold text-on-surface mb-3">Target Points</h4>
            <TargetPointsInput
              targetPoints={targetPoints}
              updateTargetPoints={(points) => setTargetPoints(points)} />
          </div>
        </PrimaryContainer>
      </div>
    </div>
  );

  const renderPokemonSidebar = () => (
    <>
      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-surface border-r border-outline/20 shadow-xl z-50 transform transition-transform duration-300 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-outline/20">
            <h2 className="text-lg font-bold text-on-surface">Select Pokemon</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 rounded-full hover:bg-surface-container-high transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Pokemon List */}
          <div className="flex-1 overflow-hidden">
            <PokemonListWithFilter
              pokedex={pokedexState.pages}
              onClickPokemon={(pokemon) => {
                setCurrentPokemonId(pokemon.id);
                setIsSidebarOpen(false);
              }} 
            />
          </div>
          
          {/* Footer with shortcut hint */}
          <div className="p-4 border-t border-outline/20 bg-surface-container-low">
            <div className="text-xs text-on-surface-variant text-center">
              Press <span className="font-mono bg-surface-container-high px-1 rounded">P</span> to toggle • <span className="font-mono bg-surface-container-high px-1 rounded">ESC</span> to close
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderTasksTab = () => (
    <PrimaryContainer className="h-full">
      <div className="p-4 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-bold text-on-surface">Task Management</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-on-surface-variant">Segment:</span>
              <div className="min-w-0">
                <SegmentSelect
                  segments={segments}
                  currentSegment={currentSegment}
                  updateSegment={(segment) => setCurrentSegment(segment)} />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <PokemonInfo pokemon={currentPokemon!} />
            <Button
              color="error"
              className="size-10 flex items-center justify-center rounded-full"
              onClick={() => resetPokemon({ pokemon: currentPokemon!.id })}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16px"
                viewBox="0 -960 960 960"
                width="16px"
                fill="currentColor">
                <path
                  d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z" />
              </svg>
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-x-auto">
          <TaskTable
            pokemon={currentPokemon!}
            updateProgress={updateProgress} />
        </div>
      </div>
    </PrimaryContainer>
  );


  return (
    <div data-theme="pokemon-la" className="min-h-screen bg-surface-container">
      {/* Pokemon Sidebar */}
      {renderPokemonSidebar()}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed bottom-6 right-6 z-30 w-16 h-16 bg-primary hover:bg-primary/90 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
        title="Select Pokemon (P)"
      >
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-on-primary">
          <div className="w-full h-full flex items-center justify-center bg-surface">
            <PokemonImage
              pokemon={currentPokemon!}
              size={200}
              alt={currentPokemon!.name}
              className="object-contain object-center"
            />
          </div>
        </div>
      </button>

      {/* Header */}
      <header className="bg-surface border-b border-outline/20 shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 rounded-lg hover:bg-surface-container-high transition-colors"
                title="Select Pokemon (P)"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-xl font-bold text-on-surface">Tasks Simulator</h1>
              <span className="hidden sm:inline-block text-sm text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-full">
                Pokemon Legends: Arceus
              </span>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={language} 
                onChange={(e) => setLanguage(parseInt(e.target.value) as Language)}
                className="text-sm bg-surface-container-high text-on-surface border border-outline/30 rounded px-3 py-1"
              >
                <option value={Language.Ja}>日本語</option>
                <option value={Language.En}>English</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="bg-surface border-b border-outline/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-on-surface-variant hover:text-on-surface hover:border-outline'
                }`}
              >
                <span className="text-base">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Tab Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="min-h-[calc(100vh-12rem)]">
          {activeTab === 'overview' && renderOverviewTab()}
          {activeTab === 'tasks' && renderTasksTab()}
        </div>
      </main>
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
