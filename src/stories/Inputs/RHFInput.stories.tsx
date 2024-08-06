import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { RHFInput as _RHFInput } from '../../components/Inputs/RHFInput';

const schema = yup.object({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
});

type FormFields = {
  email: string;
};

const meta: Meta<typeof _RHFInput> = {
  component: _RHFInput,
};
export default meta;

export const RHFInput: StoryObj<typeof _RHFInput> = {
  render: (args) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormFields>({
      resolver: yupResolver(schema),
      mode: 'onChange',
    });

    const onSubmit = (data: FormFields) => {
      console.log(data);
    };
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col justify-start max-w-80 gap-5'
      >
        <_RHFInput
          {...args}
          register={register}
          errorMessage={errors.email?.message}
          name='email'
        />
      </form>
    );
  },
  args: {
    type: 'text',
    label: 'Email',
    required: false,
  },
};
