import { ButtonProps } from '@/lib/components';
import { twMerge } from 'tailwind-merge';

export interface RequirementsIndicatorButtonProps extends ButtonProps {
  requirement: number;
  achieved: boolean;
  updateProgress: (requirement: number) => void;
}

export function RequirementsIndicatorButton({
  requirement,
  achieved,
  updateProgress,
  className,
  ...props
}: RequirementsIndicatorButtonProps) {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center size-7 bg-secondary text-on-secondary cursor-pointer rounded-full',
        achieved ? 'hover:brightness-125' : 'brightness-75 hover:brightness-100',
        className
      )}
      onClick={() => updateProgress(requirement)}
      {...props}>
      {requirement}
    </button>
  );
}
