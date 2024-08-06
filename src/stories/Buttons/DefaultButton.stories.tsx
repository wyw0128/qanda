import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/Button';

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

export const DefaultButton: StoryObj<typeof Button> = {
  render: (args) => {
    return <Button {...args}>Click me!</Button>;
  },
  args: {
    type: 'button',
    variant: undefined,
  },
};
