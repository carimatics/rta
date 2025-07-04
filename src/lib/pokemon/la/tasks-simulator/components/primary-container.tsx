import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export interface PrimaryContainerProps extends ComponentProps<'div'> {}

export function PrimaryContainer({ className, children, ...props }: PrimaryContainerProps) {
  return (
    <div
      className={twMerge('bg-surface rounded-xl p-4 shadow-lg text-on-surface', className)}
      {...props}
    >
      {children}
    </div>
  );
}
