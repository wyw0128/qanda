import { forwardRef, InputHTMLAttributes } from 'react';

export const Input = forwardRef(
  (
    props: InputHTMLAttributes<HTMLInputElement>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => (
    <input
      {...props}
      ref={ref}
      className='w-full h-10 rounded px-2 text-secondary bg-ternary' // background color not inherit from parent, specify bg-ternary; text color based on input background color, specify text-secondary
    />
  )
);
