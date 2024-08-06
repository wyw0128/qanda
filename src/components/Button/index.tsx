import { cn } from '../../lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  type: 'submit' | 'reset' | 'button' | undefined;
  children?: React.ReactNode;
}

const getVariantStyleClass = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'primary':
      return 'bg-tertiary text-tertiary rounded h-10';
    case 'secondary':
      return 'bg-secondary text-secondary rounded h-10';
    default:
      return '';
  }
};

export const Button = ({ variant, children, type }: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        'w-full flex justify-center items-center',
        getVariantStyleClass(variant)
      )}
    >
      {children}
    </button>
  );
};
