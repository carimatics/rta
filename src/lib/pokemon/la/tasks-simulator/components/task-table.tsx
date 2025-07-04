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
    <table {...props} className="w-full">
      <thead>
        <tr>
          <th className="w-20">Reward</th>
          <th>Task</th>
          <th className="w-36">Progress</th>
          <th className="w-60">Requirements</th>
          <th className="w-20">Points</th>
        </tr>
      </thead>
      <tbody>
        {pokemon.tasks.map((task, taskNo) => (
          <tr key={taskNo}>
            <td className="pb-2 text-center font-bold">{task.reward}</td>
            <td className="pb-2 pl-4 font-bold">{task.name}</td>
            <td className="flex justify-center p-2 pt-0">
              {isLast(taskNo) ? (
                <ProgressInput
                  task={task}
                  updateProgress={(progress) => updateProgress(taskNo, progress)} />
              ) : (
                <div className="flex w-full justify-center gap-2 font-bold">
                  {pokemon.completed ? '完成' : '未完成'}
                </div>
              )}
            </td>
            <td className="pb-2">
              {isLast(taskNo) && (
                <RequirementsIndicator
                  task={task}
                  updateProgress={(progress) => updateProgress(taskNo, progress)} />
              )}
            </td>
            <td className="w-16 pb-2 text-center font-bold">{task.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
