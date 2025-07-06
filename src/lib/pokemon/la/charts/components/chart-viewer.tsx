import React, { useMemo, useState } from 'react';

import { ChartTabType, ChartViewerProps } from '../types';

import { ChartHeader } from './chart-header';
import { ExportOnlyTab } from './export-only-tab';
import { ReadonlyOverviewTab } from './readonly-overview-tab';
import { ReadonlyTasksTab } from './readonly-tasks-tab';
import { ReferenceVideoTab } from './reference-video-tab';
import { TaskTimelineTab } from './task-timeline-tab';

import { getDictionary } from '@/lib/pokemon/la/dictionaries';
import { Language, Pokemon } from '@/lib/pokemon/la/fixtures';
import { PokedexPokemonState } from '@/lib/pokemon/la/tasks-simulator/pokemon-state';


export function ChartViewer({
  chartData,
  language: initialLanguage = Language.Ja,
  readonly = true,
}: ChartViewerProps) {
  const [activeTab, setActiveTab] = useState<ChartTabType>('overview');
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [selectedPokemonId, setSelectedPokemonId] = useState<Pokemon | null>(chartData.pokedexState.pages[0]?.id ?? null);
  
  const dictionary = useMemo(() => getDictionary(language), [language]);

  const handlePokemonClick = (pokemon: PokedexPokemonState) => {
    setSelectedPokemonId(pokemon.id);
    setActiveTab('tasks');
  };

  const tabs = [
    { id: 'overview' as ChartTabType, name: 'Overview', icon: '📊' },
    { id: 'tasks' as ChartTabType, name: 'Tasks', icon: '✅' },
    { id: 'task-timeline' as ChartTabType, name: 'Task Timeline', icon: '📅' },
    { id: 'reference-video' as ChartTabType, name: 'Reference Video', icon: '🎥' },
    { id: 'export' as ChartTabType, name: 'Export', icon: '💾' },
  ];

  const chartTitle = chartData.metadata?.title || 'Pokemon LA Chart';
  const chartSubtitle = 'Pokemon Legends: Arceus';

  return (
    <div data-theme="pokemon-la" className="min-h-screen bg-surface-container">
      {/* Header */}
      <ChartHeader
        title={chartTitle}
        subtitle={chartSubtitle}
        metadata={{
          author: chartData.metadata?.author,
          timestamp: chartData.timestamp,
        }}
        language={language}
        onLanguageChange={setLanguage}
        readonly={readonly}
      />

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
          {activeTab === 'overview' && (
            <ReadonlyOverviewTab
              targetPoints={chartData.targetPoints}
              pokedexState={chartData.pokedexState}
              language={language}
              onPokemonClick={handlePokemonClick}
            />
          )}
          {activeTab === 'tasks' && (
            <ReadonlyTasksTab
              pokedexState={chartData.pokedexState}
              dictionary={dictionary}
              initialPokemonId={selectedPokemonId || undefined}
            />
          )}
          {activeTab === 'task-timeline' && (
            <TaskTimelineTab
              pokedexState={chartData.pokedexState}
              dictionary={dictionary}
              onPokemonClick={handlePokemonClick}
            />
          )}
          {activeTab === 'reference-video' && (
            <ReferenceVideoTab />
          )}
          {activeTab === 'export' && (
            <ExportOnlyTab
              targetPoints={chartData.targetPoints}
              pokedexState={chartData.pokedexState}
              metadata={chartData.metadata}
            />
          )}
        </div>
      </main>
    </div>
  );
};
