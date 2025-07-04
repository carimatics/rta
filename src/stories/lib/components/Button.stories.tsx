import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { Button } from '@/lib/components';

const meta = {
  title: 'Lib/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: 'Secondary',
  },
};

export const Tertiary: Story = {
  args: {
    color: 'tertiary',
    children: 'Tertiary',
  },
};

export const Xl: Story = {
  args: {
    size: 'xl',
    children: 'Extra Large',
  }
};

export const Lg: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  }
};

export const Md: Story = {
  args: {
    size: 'md',
    children: 'Medium',
  }
};

export const Sm: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  }
};

export const Xs: Story = {
  args: {
    size: 'xs',
    children: 'Extra Small',
  }
};
