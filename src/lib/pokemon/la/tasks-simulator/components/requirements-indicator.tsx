import { ComponentProps, useCallback } from 'react';
import { twMerge } from 'tailwind-merge';

import { PokedexPokemonTaskState } from '@/lib/pokemon/la/tasks-simulator';
import { RequirementsIndicatorButton } from '@/lib/pokemon/la/tasks-simulator/components/requirements-indicator-button';

export interface RequirementsIndicatorProps extends ComponentProps<'ul'> {
  task: PokedexPokemonTaskState;
  updateProgress?: (progress: number) => void;
  disabled?: boolean;
}

export function RequirementsIndicator({ className, task, updateProgress, disabled = false, ...props }: RequirementsIndicatorProps) {
  const achieved = useCallback(
    (requirement: number) => task.progress >= requirement,
    [task.progress]
  );

  return (
    <ul className={twMerge('flex items-center justify-center', className)} {...props}>
      {task.requirements.map((requirement) => (
        <li
          key={requirement}
          className="flex items-center justify-center font-bold">
          {requirement === task.first ? (
            <RequirementsIndicatorButton
              requirement={requirement}
              achieved={achieved(requirement)}
              updateProgress={updateProgress}
              disabled={disabled}
            />
          ) : (
            <>
              <div className={`bg-secondary h-1 w-2 ${achieved(requirement) ? 'brightness-75' : ''}`}></div>
              <RequirementsIndicatorButton
                requirement={requirement}
                achieved={achieved(requirement)}
                updateProgress={updateProgress}
                disabled={disabled}
              />
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
