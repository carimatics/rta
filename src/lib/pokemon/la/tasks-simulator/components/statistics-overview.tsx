import React from 'react';

import { PokedexState } from '@/lib/pokemon/la/tasks-simulator/pokemon-state';

interface StatisticsOverviewProps {
  pokedexState: PokedexState;
  className?: string;
}

export const StatisticsOverview: React.FC<StatisticsOverviewProps> = ({
  pokedexState,
  className = ''
}) => {
  const totalPokemon = pokedexState.pages.length;
  const completedPokemon = pokedexState.pages.filter(pokemon => pokemon.completed).length;
  const pokemonWithPoints = pokedexState.pages.filter(pokemon => pokemon.points > 0).length;
  const completionPercentage = totalPokemon > 0 ? (completedPokemon / totalPokemon) * 100 : 0;
  const progressPercentage = totalPokemon > 0 ? (pokemonWithPoints / totalPokemon) * 100 : 0;

  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-lg font-bold text-on-surface">Statistics Overview</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Completion Stats */}
        <div className="bg-surface-container-high rounded-lg p-4">
          <h4 className="text-sm font-semibold text-on-surface-variant mb-3">Completion Status</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-on-surface">Completed Pokemon</span>
              <div className="text-right">
                <span className="text-lg font-bold text-tertiary">{completedPokemon}</span>
                <span className="text-sm text-on-surface-variant">/{totalPokemon}</span>
              </div>
            </div>
            <div className="w-full bg-surface-container rounded-full h-2">
              <div 
                className="bg-tertiary h-2 rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            <div className="text-xs text-on-surface-variant text-center">
              {completionPercentage.toFixed(1)}% Complete
            </div>
          </div>
        </div>

        {/* Progress Stats */}
        <div className="bg-surface-container-high rounded-lg p-4">
          <h4 className="text-sm font-semibold text-on-surface-variant mb-3">Progress Status</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-on-surface">Pokemon with Points</span>
              <div className="text-right">
                <span className="text-lg font-bold text-primary">{pokemonWithPoints}</span>
                <span className="text-sm text-on-surface-variant">/{totalPokemon}</span>
              </div>
            </div>
            <div className="w-full bg-surface-container rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="text-xs text-on-surface-variant text-center">
              {progressPercentage.toFixed(1)}% In Progress
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-on-surface">{pokedexState.points.toLocaleString()}</div>
          <div className="text-xs text-on-surface-variant">Total Points</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-on-surface">
            {pokemonWithPoints > 0 ? Math.round(pokedexState.points / pokemonWithPoints) : 0}
          </div>
          <div className="text-xs text-on-surface-variant">Avg Points/Pokemon</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-on-surface">{totalPokemon - pokemonWithPoints}</div>
          <div className="text-xs text-on-surface-variant">Untouched</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-on-surface">{pokemonWithPoints - completedPokemon}</div>
          <div className="text-xs text-on-surface-variant">In Progress</div>
        </div>
      </div>
    </div>
  );
};