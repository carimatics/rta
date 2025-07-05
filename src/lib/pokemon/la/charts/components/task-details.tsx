import React from 'react';

import { RequirementsIndicator } from '@/lib/pokemon/la/tasks-simulator/components/requirements-indicator';
import { PokedexPokemonState } from '@/lib/pokemon/la/tasks-simulator/pokemon-state';

interface TaskDetailsProps {
  pokemon: PokedexPokemonState;
}

export const TaskDetails: React.FC<TaskDetailsProps> = ({ pokemon }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-full table-fixed" style={{ width: '800px' }}>
        <thead>
          <tr className="border-b border-outline/20">
            <th className="w-20 px-2 py-2 text-center text-sm font-semibold text-on-surface">Reward</th>
            <th className="w-64 px-2 py-2 text-center text-sm font-semibold text-on-surface">Task</th>
            <th className="w-60 px-2 py-2 text-center text-sm font-semibold text-on-surface">Requirements</th>
            <th className="w-20 px-2 py-2 text-center text-sm font-semibold text-on-surface">Points</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.tasks.map((task, taskNo) => (
            <tr key={taskNo} className="border-b border-outline/10 hover:bg-surface-container-highest/50">
              <td className="px-2 py-2 text-center font-bold text-sm text-on-surface">{task.reward}</td>
              <td className="px-2 py-2 font-bold text-sm text-on-surface">{task.name}</td>
              <td className="px-2 py-2">
                <RequirementsIndicator
                  task={task}
                  disabled={true}
                />
              </td>
              <td className="px-2 py-2 text-center font-bold text-sm text-primary">{task.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};