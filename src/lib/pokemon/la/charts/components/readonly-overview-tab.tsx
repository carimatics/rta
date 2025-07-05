import React from 'react';

import { Language } from '@/lib/pokemon/la/fixtures';
import { PointsTrendChart } from '@/lib/pokemon/la/tasks-simulator/components/points-trend-chart';
import { PokemonImage } from '@/lib/pokemon/la/tasks-simulator/components/pokemon-image';
import { PrimaryContainer } from '@/lib/pokemon/la/tasks-simulator/components/primary-container';
import { StatisticsOverview } from '@/lib/pokemon/la/tasks-simulator/components/statistics-overview';
import { PokedexState, PokedexPokemonState } from '@/lib/pokemon/la/tasks-simulator/pokemon-state';

interface ReadonlyOverviewTabProps {
  targetPoints: number;
  pokedexState: PokedexState;
  language: Language;
  onPokemonClick?: (pokemon: PokedexPokemonState) => void;
}

export const ReadonlyOverviewTab: React.FC<ReadonlyOverviewTabProps> = ({
  targetPoints,
  pokedexState,
  language,
  onPokemonClick,
}) => {
  const progressPercentage = Math.min((pokedexState.points / targetPoints) * 100, 100);
  const pokemonWithPoints = pokedexState.pages.filter(pokemon => pokemon.points > 0)
    .sort((a, b) => a.id - b.id);

  return (
    <div className="space-y-6">
      {/* Target Points and Progress Overview - Combined */}
      <PrimaryContainer>
        <div className="p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            {/* Target Points Display (Read-only) */}
            <div className="flex items-center gap-4">
              <h4 className="font-semibold text-on-surface whitespace-nowrap">Target Points</h4>
              <div className="bg-surface-container px-4 py-2 rounded-lg border border-outline/20">
                <span className="text-lg font-bold text-primary">{targetPoints.toLocaleString()}</span>
                <span className="text-sm text-on-surface-variant ml-1">pts</span>
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
                <button
                  key={pokemon.id}
                  onClick={() => onPokemonClick?.(pokemon)}
                  className="bg-surface-container-high rounded-lg p-3 flex flex-col items-center gap-2 hover:bg-surface-container-highest transition-colors duration-200 cursor-pointer border border-transparent hover:border-outline/30"
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
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-on-surface-variant">
              No Pokemon with points in this chart.
            </div>
          )}
        </div>
      </PrimaryContainer>
    </div>
  );
};