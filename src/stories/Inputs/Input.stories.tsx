import type { Meta, StoryObj } from '@storybook/react';
import { Input as _Input } from '../../components/Inputs';

const meta: Meta<typeof _Input> = {
  component: _Input,
};
export default meta;

export const Input: StoryObj<typeof _Input> = {
  render: (args) => {
    return (
      <div className='max-w-80'>
        <label htmlFor={args.name}>Email</label>
        <_Input {...args} />
      </div>
    );
  },
  args: {
    id: 'email',
    type: 'email',
    name: 'email',
  },
};
