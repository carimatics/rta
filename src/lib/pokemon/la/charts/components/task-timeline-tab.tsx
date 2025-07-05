import React, { useMemo } from 'react';

import { Dictionary } from '@/lib/pokemon/la/dictionaries';
import { Pokemon, Segment } from '@/lib/pokemon/la/fixtures';
import { PokemonImage } from '@/lib/pokemon/la/tasks-simulator/components/pokemon-image';
import { PrimaryContainer } from '@/lib/pokemon/la/tasks-simulator/components/primary-container';
import { PokedexState } from '@/lib/pokemon/la/tasks-simulator/pokemon-state';
import { closedRangeSegments } from '@/lib/pokemon/la/utils/la-range';

interface TaskTimelineTabProps {
  pokedexState: PokedexState;
  dictionary: Dictionary;
}

interface TimelineEntry {
  segment: {
    id: Segment;
    name: string;
  };
  pokemon: {
    id: Pokemon;
    name: string;
    points: number;
    completed: boolean;
    tasks: {
      name: string;
      reward: number;
      points: number;
      progress: number;
      planned: number;
    }[];
  }[];
  points: number;
}

export const TaskTimelineTab: React.FC<TaskTimelineTabProps> = ({
  pokedexState,
  dictionary,
}) => {
  const segments = useMemo(() =>
      closedRangeSegments(Segment.Village1, Segment.Highlands1)
        .map((segment) => ({ id: segment, name: dictionary.segment(segment) })),
    [dictionary]
  );

  const timelineData = useMemo<TimelineEntry[]>(() => {
    return segments.map((segment) => ({
      segment,
      pokemon: pokedexState.pages
        .filter((pokemon) => pokemon.pointsBySegments[segment.id] ? pokemon.pointsBySegments[segment.id] > 0 : false)
        .map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          points: pokemon.pointsBySegments[segment.id],
          completed: pokemon.segmentCompleted ? segment.id >= pokemon.segmentCompleted : false,
          tasks: pokemon.tasks.filter((task) => task.pointsBySegments[segment.id] ? task.pointsBySegments[segment.id] > 0 : false)
            .map((task) => ({
              name: task.name,
              reward: task.reward,
              points: task.pointsBySegments[segment.id],
              progress: task.progresses[segment.id] ?? 0,
              planned: Math.max(...Object.values(task.progresses)),
            })),
        })),
      points: pokedexState.pages.reduce((sum, pokemon) => sum + (pokemon.pointsBySegments[segment.id] ?? 0), 0)
    }));
  }, [pokedexState, segments]);

  const getPokemon = (pokemonId: number) => {
    return pokedexState.pages.find(p => p.id === pokemonId);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-on-surface mb-2">Task Timeline</h2>
        <p className="text-on-surface-variant">
          Task achievements organized by segment
        </p>
      </div>

      {timelineData.map((entry) => {
        const totalTasks = entry.pokemon.reduce((sum, pokemon) => sum + pokemon.tasks.length, 0);
        const completedTasks = entry.pokemon.reduce((sum, pokemon) => 
          sum + pokemon.tasks.filter(task => task.progress >= task.planned).length, 0
        );
        
        return (
          <PrimaryContainer key={entry.segment.id}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-on-surface">{entry.segment.name}</h3>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-on-surface-variant">
                    {completedTasks} / {totalTasks} tasks completed
                  </div>
                  <div className="text-lg font-bold text-primary">
                    {entry.points} pts
                  </div>
                </div>
              </div>

              {entry.pokemon.length > 0 ? (
                <div className="space-y-4">
                  {entry.pokemon.map((pokemon) => {
                    const pokemonData = getPokemon(pokemon.id);
                    const completedTasksCount = pokemon.tasks.filter(task => task.progress >= task.planned).length;
                    
                    return (
                      <div key={pokemon.id} className="bg-surface-container-high rounded-lg p-4">
                        {/* Pokemon Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            {pokemonData && (
                              <div className="w-12 h-12 rounded-full overflow-hidden border border-outline/20 flex-shrink-0">
                                <PokemonImage
                                  pokemon={pokemonData}
                                  size={80}
                                  alt={pokemon.name}
                                  className="object-contain object-center"
                                />
                              </div>
                            )}
                            <div>
                              <div className="text-lg font-bold text-on-surface">
                                {pokemon.name}
                              </div>
                              <div className="text-sm text-on-surface-variant">
                                No. {pokemon.id} • {completedTasksCount} / {pokemon.tasks.length} tasks
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="text-lg font-bold text-primary">
                              {pokemon.points} pts
                            </div>
                            {pokemon.completed && (
                              <span className="text-xs bg-tertiary/10 text-tertiary px-2 py-1 rounded-full">
                                ✓ Complete
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Tasks List */}
                        {pokemon.tasks.length > 0 && (
                          <div className="overflow-x-auto">
                            <table className="w-full">
                              <thead>
                                <tr className="border-b border-outline/20">
                                  <th className="text-left py-2 px-3 text-sm font-semibold text-on-surface">Task</th>
                                  <th className="text-center py-2 px-3 text-sm font-semibold text-on-surface">Reward</th>
                                  <th className="text-center py-2 px-3 text-sm font-semibold text-on-surface">Progress</th>
                                  <th className="text-center py-2 px-3 text-sm font-semibold text-on-surface">Points</th>
                                  <th className="text-center py-2 px-3 text-sm font-semibold text-on-surface">Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                {pokemon.tasks.map((task, taskIndex) => (
                                  <tr key={taskIndex} className="border-b border-outline/10 hover:bg-surface-container-highest/30">
                                    <td className="py-2 px-3 text-sm text-on-surface">{task.name}</td>
                                    <td className="text-center py-2 px-3 text-sm font-medium text-on-surface">
                                      {task.reward}
                                    </td>
                                    <td className="text-center py-2 px-3 text-sm text-on-surface">
                                      <span className="bg-surface-container px-2 py-1 rounded text-xs">
                                        {task.progress} / {task.planned}
                                      </span>
                                    </td>
                                    <td className="text-center py-2 px-3 text-sm font-bold text-primary">
                                      {task.points}
                                    </td>
                                    <td className="text-center py-2 px-3">
                                      {task.progress >= task.planned ? (
                                        <span className="text-xs bg-tertiary/10 text-tertiary px-2 py-1 rounded-full">
                                          ✓ Complete
                                        </span>
                                      ) : (
                                        <span className="text-xs bg-surface-container text-on-surface-variant px-2 py-1 rounded-full">
                                          In Progress
                                        </span>
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8 text-on-surface-variant">
                  No Pokemon with tasks in this segment.
                </div>
              )}
            </div>
          </PrimaryContainer>
        );
      })}
    </div>
  );
};
