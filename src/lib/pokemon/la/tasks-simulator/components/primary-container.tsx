import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function PrimaryContainer({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge('bg-surface rounded-xl p-4 shadow-lg text-on-surface', className)}
      {...props}
    >
      {children}
    </div>
  );
}
