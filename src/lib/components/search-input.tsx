import { tv, VariantProps } from 'tailwind-variants';
import { ComponentProps } from 'react';

const searchInput = tv({
  base: 'caret-outline-variant border border-outline placeholder-outline-variant flex-1 bg-white/10 backdrop-blur-sm p-1',
  variants: {
    color: {
      default: '',
      primary: 'bg-primary/10 text-on-primary',
      secondary: 'bg-secondary/10 text-on-secondary',
      tertiary: 'bg-tertiary/10 text-on-tertiary',
      error: 'bg-error/10 text-on-error',
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
    color: 'default',
    size: 'md',
    font: 'default',
  },
});

type SearchInputVariant = VariantProps<typeof searchInput>;

export interface SearchInputProps extends Omit<ComponentProps<'input'>, 'size'>, SearchInputVariant {
  color?: SearchInputVariant['color'];
}

export function SearchInput({
  className,
  color,
  size,
  font,
  ...props
}: SearchInputProps) {
  return (
    <input
      type="search"
      className={`${searchInput({ color, size, font })} ${className}`}
      {...props}
    />
  );
}
