import { ComponentProps, useCallback } from 'react';
import { PokedexPokemonState } from '@/lib/pokemon/la/tasks-simulator';
import { ProgressInput } from '@/lib/pokemon/la/tasks-simulator/components/progress-input';
import { RequirementsIndicator } from '@/lib/pokemon/la/tasks-simulator/components/requirements-indicator';

export interface TaskTableProps extends ComponentProps<'table'> {
  pokemon: PokedexPokemonState;
  updateProgress: (taskNo: number, progress: number) => void;
}

export function TaskTable({ pokemon, updateProgress, ...props }: TaskTableProps) {
  const isLast = useCallback((taskNo: number) => taskNo < pokemon.tasks.length - 1, [pokemon.tasks]);

  return (
    <table {...props} className="min-w-full table-fixed" style={{ width: '800px' }}>
      <thead>
        <tr>
          <th className="w-20 px-2 py-1 text-center">Reward</th>
          <th className="w-64 px-2 py-1 text-center">Task</th>
          <th className="w-36 px-2 py-1 text-center">Progress</th>
          <th className="w-60 px-2 py-1 text-center">Requirements</th>
          <th className="w-20 px-2 py-1 text-center">Points</th>
        </tr>
      </thead>
      <tbody>
        {pokemon.tasks.map((task, taskNo) => (
          <tr key={taskNo}>
            <td className="px-2 py-1 text-center font-bold">{task.reward}</td>
            <td className="px-2 py-1 font-bold">{task.name}</td>
            <td className="px-2 py-1">
              {isLast(taskNo) ? (
                <ProgressInput
                  task={task}
                  updateProgress={(progress) => updateProgress(taskNo, progress)} />
              ) : (
                <div className="flex justify-center font-bold">
                  {pokemon.completed ? '完成' : '未完成'}
                </div>
              )}
            </td>
            <td className="px-2 py-1">
              {isLast(taskNo) && (
                <RequirementsIndicator
                  task={task}
                  updateProgress={(progress) => updateProgress(taskNo, progress)} />
              )}
            </td>
            <td className="px-2 py-1 text-center font-bold">{task.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
