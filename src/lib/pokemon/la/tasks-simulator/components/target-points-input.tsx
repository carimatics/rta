import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export interface TargetPointsInputProps extends ComponentProps<'div'> {
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
    <div className={twMerge('flex items-center gap-2', className)} {...props}>
      <div className="font-bold">目標点数</div>
      <input
        type="number"
        placeholder="Target Points"
        value={targetPoints}
        onChange={(e) => updateTargetPoints(parseInt(e.target.value))}
        min="0"
        className="caret-outline-variant border-outline placeholder-outline-variant w-20 flex-1 rounded-md border bg-white/10 p-1 px-2 py-1 shadow-md backdrop-blur-sm"
      />
    </div>
  );
}
