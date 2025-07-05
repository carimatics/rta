import React, { useMemo, useState } from 'react';

import { TaskDetails } from './task-details';

import { Dictionary } from '@/lib/pokemon/la/dictionaries';
import { Pokemon, Segment } from '@/lib/pokemon/la/fixtures';
import { PokemonImage } from '@/lib/pokemon/la/tasks-simulator/components/pokemon-image';
import { PokemonListWithFilter } from '@/lib/pokemon/la/tasks-simulator/components/pokemon-list-with-filter';
import { PrimaryContainer } from '@/lib/pokemon/la/tasks-simulator/components/primary-container';
import { SegmentPointsDisplay } from '@/lib/pokemon/la/tasks-simulator/components/segment-points-display';
import { PokedexState } from '@/lib/pokemon/la/tasks-simulator/pokemon-state';
import { closedRangeSegments } from '@/lib/pokemon/la/utils/la-range';

interface ReadonlyTasksTabProps {
  pokedexState: PokedexState;
  dictionary: Dictionary;
  initialPokemonId?: Pokemon;
}


export const ReadonlyTasksTab: React.FC<ReadonlyTasksTabProps> = ({
  pokedexState,
  dictionary,
  initialPokemonId,
}) => {
  const [currentPokemonId, setCurrentPokemonId] = useState<Pokemon>(initialPokemonId || Pokemon.Rowlet);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentPokemon = useMemo(() => 
    pokedexState.pages.find(p => p.id === currentPokemonId),
    [currentPokemonId, pokedexState.pages]
  );

  const segments = useMemo(() =>
    closedRangeSegments(Segment.Village1, Segment.Highlands1)
      .map((segment) => ({ id: segment, name: dictionary.segment(segment) })),
    [dictionary]
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
          
          {/* Footer */}
          <div className="p-4 border-t border-outline/20 bg-surface-container-low">
            <div className="text-xs text-on-surface-variant text-center">
              Read-only view • Click Pokemon to view details
            </div>
          </div>
        </div>
      </div>
    </>
  );

  if (!currentPokemon) {
    return <div>Pokemon not found</div>;
  }

  return (
    <>
      {renderPokemonSidebar()}
      
      {/* Floating Action Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed bottom-6 right-6 z-30 w-16 h-16 bg-primary hover:bg-primary/90 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
        title="Select Pokemon"
      >
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-on-primary">
          <div className="w-full h-full flex items-center justify-center bg-surface">
            <PokemonImage
              pokemon={currentPokemon}
              size={200}
              alt={currentPokemon.name}
              className="object-contain object-center"
            />
          </div>
        </div>
      </button>

      <div className="flex gap-6 h-full">
        <div className="flex-1 flex flex-col gap-6">
          {/* Pokemon Info Header */}
          <PrimaryContainer>
            <div className="p-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                    <PokemonImage
                      pokemon={currentPokemon}
                      size={200}
                      alt={currentPokemon.name}
                      className="object-contain object-center"
                    />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-on-surface">
                      No. {currentPokemon.id} - {currentPokemon.name}
                    </div>
                    <div className="text-sm text-on-surface-variant">
                      Points: <span className="font-semibold text-primary">{currentPokemon.points}</span> • 
                      Status: <span className={`font-semibold ${currentPokemon.completed ? 'text-tertiary' : 'text-on-surface-variant'}`}>
                        {currentPokemon.completed ? 'Completed' : 'In Progress'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PrimaryContainer>

          {/* Task Details (Read-only) */}
          <PrimaryContainer className="flex-1">
            <div className="p-4 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-on-surface">Task Details (Read-only)</h3>
                <div className="text-xs text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-full">
                  View Only
                </div>
              </div>
              <div className="flex-1 overflow-auto">
                <TaskDetails pokemon={currentPokemon} />
              </div>
            </div>
          </PrimaryContainer>
        </div>
        
        {/* Segment Points Display - Right Side */}
        <div className="w-64 flex-shrink-0">
          <PrimaryContainer className="h-full">
            <div className="p-4">
              <SegmentPointsDisplay
                pokemon={currentPokemon}
                segments={segments}
              />
            </div>
          </PrimaryContainer>
        </div>
      </div>
    </>
  );
};