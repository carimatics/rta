import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export interface TargetPointsInputProps extends ComponentProps<'input'> {
  targetPoints: number;
  updateTargetPoints: (points: number) => void;
}

export function TargetPointsInput({
  targetPoints,
  updateTargetPoints,
  className,
  ...props
}: TargetPointsInputProps) {
  return (
    <div className="relative">
      <input
        type="number"
        placeholder="Enter target points"
        value={targetPoints}
        onChange={(e) => updateTargetPoints(parseInt(e.target.value))}
        min="0"
        className={twMerge(
          'w-full rounded-lg border-2 border-outline/20 bg-surface-container px-4 py-2 text-on-surface transition-all duration-200 placeholder:text-on-surface-variant focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
          className
        )}
        {...props}
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-on-surface-variant pointer-events-none">
        pts
      </div>
    </div>
  );
}
