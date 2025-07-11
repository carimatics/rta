'use client';

import { createStore, Provider } from 'jotai';
import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';
import React from 'react';

import { Button } from '@/lib/components';
import { getDictionary } from '@/lib/pokemon/la/dictionaries';
import { Language, Pokemon, Segment } from '@/lib/pokemon/la/fixtures';
import { pokedex as pokedexFixture } from '@/lib/pokemon/la/fixtures/pokedex';
import { ImportExportTab } from '@/lib/pokemon/la/tasks-simulator/components/import-export-tab';
import { PointsTrendChart } from '@/lib/pokemon/la/tasks-simulator/components/points-trend-chart';
import { PokemonImage } from '@/lib/pokemon/la/tasks-simulator/components/pokemon-image';
import { PokemonListWithFilter } from '@/lib/pokemon/la/tasks-simulator/components/pokemon-list-with-filter';
import { PrimaryContainer } from '@/lib/pokemon/la/tasks-simulator/components/primary-container';
import { SegmentPointsDisplay } from '@/lib/pokemon/la/tasks-simulator/components/segment-points-display';
import { SegmentSelect } from '@/lib/pokemon/la/tasks-simulator/components/segment-select';
import { StatisticsOverview } from '@/lib/pokemon/la/tasks-simulator/components/statistics-overview';
import { TargetPointsInput } from '@/lib/pokemon/la/tasks-simulator/components/target-points-input';
import { TaskTable } from '@/lib/pokemon/la/tasks-simulator/components/task-table';
import { useTasksSimulator } from '@/lib/pokemon/la/tasks-simulator/hooks';
import { closedRangeSegments } from '@/lib/pokemon/la/utils/la-range';

const store = createStore();

type TabType = 'overview' | 'tasks' | 'import-export';

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
    importPokedexState,
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
    { id: 'import-export' as TabType, name: 'Import/Export', icon: '💾' },
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

  const pokemonWithPoints = useMemo(() => 
    pokedexState.pages.filter(pokemon => pokemon.points > 0)
      .sort((a, b) => a.id - b.id),
    [pokedexState.pages]
  );

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Target Points and Progress Overview - Combined */}
      <PrimaryContainer>
        <div className="p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            {/* Target Points Setting */}
            <div className="flex items-center gap-4">
              <h4 className="font-semibold text-on-surface whitespace-nowrap">Target Points</h4>
              <div className="w-40">
                <TargetPointsInput
                  targetPoints={targetPoints}
                  updateTargetPoints={(points) => setTargetPoints(points)} />
              </div>
            </div>

            {/* Progress Overview */}
            <div className="flex-1 flex flex-col lg:flex-row items-center gap-6">
              <div className="relative w-32 h-32 flex-shrink-0">
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
              <div className="text-center lg:text-left">
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
        </div>
      </PrimaryContainer>

      {/* Statistics and Trends - Middle Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Statistics Overview */}
        <PrimaryContainer>
          <div className="p-4">
            <StatisticsOverview pokedexState={pokedexState} />
          </div>
        </PrimaryContainer>

        {/* Points Trend Chart */}
        <PrimaryContainer>
          <div className="p-4">
            <PointsTrendChart pokedexState={pokedexState} language={language} />
          </div>
        </PrimaryContainer>
      </div>

      {/* Pokemon with Points - Bottom Row */}
      <PrimaryContainer>
        <div className="p-4">
          <h3 className="text-lg font-bold text-on-surface mb-4">Pokemon with Points ({pokemonWithPoints.length})</h3>
          {pokemonWithPoints.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
              {pokemonWithPoints.map((pokemon) => (
                <div 
                  key={pokemon.id} 
                  className="bg-surface-container-high rounded-lg p-3 flex flex-col items-center gap-2 hover:bg-surface-container-highest transition-colors cursor-pointer"
                  onClick={() => {
                    setCurrentPokemonId(pokemon.id);
                    setActiveTab('tasks');
                  }}
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-outline/20">
                    <PokemonImage
                      pokemon={pokemon}
                      size={100}
                      alt={pokemon.name}
                      className="object-contain object-center"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-on-surface-variant">No. {pokemon.id}</div>
                    <div className="text-sm font-semibold text-on-surface truncate max-w-20" title={pokemon.name}>
                      {pokemon.name}
                    </div>
                    <div className="text-sm font-bold text-primary">
                      {pokemon.points} pts
                    </div>
                    {pokemon.completed && (
                      <div className="text-xs text-tertiary">✓ Complete</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-on-surface-variant">
              No Pokemon with points yet. Start completing tasks to see your progress!
            </div>
          )}
        </div>
      </PrimaryContainer>

      {/* Progress Timeline - Bottom Row */}
      <PrimaryContainer>
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
    </div>
  );

  const renderPokemonSidebar = () => (
    <>
      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 bg-opacity-50 z-40 transition-opacity"
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
    <div className="flex flex-col lg:flex-row gap-6 h-full">
      <div className="flex-1 flex flex-col gap-6">
        {/* Pokemon Info Header */}
        <PrimaryContainer>
          <div className="p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                  <PokemonImage
                    pokemon={currentPokemon!}
                    size={200}
                    alt={currentPokemon!.name}
                    className="object-contain object-center"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-lg sm:text-xl font-bold text-on-surface truncate">
                    No. {currentPokemon!.id} - {currentPokemon!.name}
                  </div>
                  <div className="text-sm text-on-surface-variant flex flex-wrap gap-x-4">
                    <span>Points: <span className="font-semibold text-primary">{currentPokemon!.points}</span></span>
                    <span>Status: <span className={`font-semibold ${currentPokemon!.completed ? 'text-tertiary' : 'text-on-surface-variant'}`}>
                      {currentPokemon!.completed ? 'Completed' : 'In Progress'}
                    </span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PrimaryContainer>

        {/* Segment Points Display - Mobile */}
        <div className="lg:hidden">
          <PrimaryContainer>
            <div className="p-4">
              <SegmentPointsDisplay
                pokemon={currentPokemon!}
                segments={segments}
              />
            </div>
          </PrimaryContainer>
        </div>

        {/* Task Management */}
        <PrimaryContainer className="flex-1">
          <div className="p-4 h-full flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
              <h3 className="text-lg font-bold text-on-surface">Task Management</h3>
              <Button
                color="error"
                className="size-10 flex items-center justify-center rounded-full hover:scale-105 transition-transform self-start sm:self-auto"
                onClick={() => resetPokemon({ pokemon: currentPokemon!.id })}
                title="Reset Pokemon Progress">
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
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 px-2">
              <span className="text-sm text-on-surface-variant flex-shrink-0">Segment:</span>
              <div className="min-w-0 w-full sm:w-auto">
                <SegmentSelect
                  segments={segments}
                  currentSegment={currentSegment}
                  updateSegment={(segment) => setCurrentSegment(segment)} />
              </div>
            </div>
            <div className="flex-1 overflow-x-auto -mx-4 px-4">
              <div className="min-w-[800px]">
                <TaskTable
                  pokemon={currentPokemon!}
                  updateProgress={updateProgress} />
              </div>
            </div>
          </div>
        </PrimaryContainer>
      </div>
      
      {/* Segment Points Display - Desktop */}
      <div className="hidden lg:block w-64 flex-shrink-0">
        <PrimaryContainer className="h-full">
          <div className="p-4">
            <SegmentPointsDisplay
              pokemon={currentPokemon!}
              segments={segments}
            />
          </div>
        </PrimaryContainer>
      </div>
    </div>
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
              <div className="flex items-center gap-3">
                <Link 
                  href="/pokemon/la"
                  className="text-xl font-bold text-on-surface hover:text-primary transition-colors"
                >
                  Tasks Simulator
                </Link>
                <span className="text-on-surface-variant">|</span>
                <Link
                  href="/pokemon/la"
                  className="hidden sm:inline-block text-sm text-on-surface-variant hover:text-on-surface bg-surface-container-high hover:bg-surface-container-highest px-3 py-1 rounded-full transition-colors"
                >
                  Pokemon Legends: Arceus
                </Link>
              </div>
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
          {activeTab === 'import-export' && (
            <ImportExportTab
              targetPoints={targetPoints}
              setTargetPoints={setTargetPoints}
              pokedexState={pokedexState}
              importPokedexState={importPokedexState}
            />
          )}
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
