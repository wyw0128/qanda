import { forwardRef, InputHTMLAttributes } from 'react';

export const Input = forwardRef(
  (
    props: InputHTMLAttributes<HTMLInputElement>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => (
    <input
      {...props}
      ref={ref}
      className='w-full h-10 rounded px-2 text-secondary bg-secondary' // background color not inherit from parent, need specify; text color based on input background color, need specify
    />
  )
);
