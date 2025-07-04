import { ComponentProps } from 'react';
import { PokedexPokemonTaskState } from '@/lib/pokemon/la/tasks-simulator';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/lib/components';

export interface ProgressInputProps extends ComponentProps<'div'> {
  task: PokedexPokemonTaskState;
  updateProgress: (value: number) => void;
}

export function ProgressInput({ className, updateProgress, task, ...props }: ProgressInputProps) {
  return (
    <div className={twMerge('flex items-center justify-center gap-1', className)} {...props}>
      <Button
        color="error"
        size="sm"
        className="flex size-6 items-center justify-center p-0"
        onClick={() => updateProgress(0)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffff">
          <path
            d="M480-192q-120 0-204-84t-84-204q0-120 84-204t204-84q65 0 120.5 27t95.5 72v-99h72v240H528v-72h131q-29-44-76-70t-103-26q-90 0-153 63t-63 153q0 90 63 153t153 63q84 0 144-55.5T693-456h74q-9 112-91 188t-196 76Z" />
        </svg>
      </Button>
      <div
        className="bg-secondary/20 focus-within:outline-blue flex items-center justify-center rounded-lg shadow-sm focus-within:outline-1">
        <input
          type="number"
          className="focus:outline-blue w-10 rounded-l-lg px-2 py-1 focus:ring-0 focus:outline-0"
          min={task.min}
          max={task.max}
          value={task.progress}
          onChange={(event) => updateProgress(parseInt(event.target.value))} />
        <div
          className="h-full border-l-outline-variant flex items-center justify-center gap-1 rounded-r-lg border-l-2 px-1">
          <Button
            type="button"
            color="secondary"
            className="flex items-center justify-center size-6"
            onClick={() => updateProgress(task.progress - 1)}>
            -
          </Button>
          <Button
            type="button"
            color="secondary"
            className="flex items-center justify-center size-6"
            onClick={() => updateProgress(task.progress + 1)}>
            +
          </Button>
        </div>
      </div>
    </div>
  );
}
