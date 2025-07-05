import { twMerge } from 'tailwind-merge';

import { ButtonProps } from '@/lib/components';

export interface RequirementsIndicatorButtonProps extends ButtonProps {
  requirement: number;
  achieved: boolean;
  updateProgress?: (requirement: number) => void;
  disabled?: boolean;
}

export function RequirementsIndicatorButton({
  requirement,
  achieved,
  updateProgress,
  disabled = false,
  className,
  ...props
}: RequirementsIndicatorButtonProps) {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center size-7 bg-secondary text-on-secondary rounded-full',
        disabled 
          ? 'cursor-default' 
          : 'cursor-pointer',
        disabled 
          ? (achieved ? '' : 'brightness-75')
          : (achieved ? 'hover:brightness-125' : 'brightness-75 hover:brightness-100'),
        className
      )}
      onClick={disabled ? undefined : () => updateProgress?.(requirement)}
      disabled={disabled}
      {...props}>
      {requirement}
    </button>
  );
}
