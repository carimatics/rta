import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'py-1 px-2 w-fit hover:brightness-125 transition-all shadow-shadow shadow-xs hover:shadow-sm text-center border-outline cursor-pointer',
  variants: {
    color: {
      primary: 'bg-primary text-on-primary',
      secondary: 'bg-secondary text-on-secondary',
      tertiary: 'bg-tertiary text-on-tertiary',
      error: 'bg-error text-on-error',
    },
    size: {
      xs: 'text-xs rounded-xs',
      sm: 'text-sm rounded-sm',
      md: 'text-md rounded-md',
      lg: 'text-lg rounded-lg',
      xl: 'text-xl rounded-xl',
    },
    font: {
      default: '',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
    font: 'default',
  },
});

type ButtonVariants = VariantProps<typeof button>;

export interface ButtonProps extends ComponentProps<'button'>, ButtonVariants {
  color?: ButtonVariants['color'];
}

export function Button({ className, children, color, size, font, ...props }: ButtonProps) {
  return (
    <button className={twMerge(button({ color, size, font }), className)} {...props}>
      {children}
    </button>
  );
}
