import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SearchInput } from '@/lib/components';

const meta = {
  title: 'Lib/Components/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    color: 'tertiary',
  },
};

export const Xl: Story = {
  args: {
    size: 'xl',
  }
};

export const Lg: Story = {
  args: {
    size: 'lg',
  }
};

export const Md: Story = {
  args: {
    size: 'md',
  }
};

export const Sm: Story = {
  args: {
    size: 'sm',
  }
};

export const Xs: Story = {
  args: {
    size: 'xs',
  }
};
