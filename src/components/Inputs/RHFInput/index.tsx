import { HTMLInputTypeAttribute } from 'react';
import { FieldValues, UseFormRegister, Path } from 'react-hook-form';
import { Input } from '..';

interface RHFInputProps<T extends FieldValues> {
  required?: boolean;
  errorMessage?: string;
  register: UseFormRegister<T>;
  label: string;
  type: HTMLInputTypeAttribute;
  name: Path<T>;
}

export const RHFInput = <T extends FieldValues>({
  required = false,
  errorMessage,
  register,
  type,
  name,
  label,
}: RHFInputProps<T>) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={name} className='text-sm'>
        {label}
      </label>
      <Input type={type} id={name} required={required} {...register(name)} />
      {errorMessage && (
        <span className='text-error-color-primary'>{errorMessage}</span>
      )}
    </div>
  );
};
