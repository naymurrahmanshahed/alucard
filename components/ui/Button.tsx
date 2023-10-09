import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'inline-block text-center px-6 py-3 rounded-xl border eoq font-medium active:scale-105 disabled:border-gray disabled:bg-gray disabled:text-dark/50 disabled:cursor-not-allowed whitespace-nowrap',
  {
    variants: {
      variant: {
        dark: 'border-dark bg-dark text-white hover:border-dark/90 hover:bg-dark/90 ',
        outline:
          'border-dark bg-transparent text-dark  hover:bg-dark/90 hover:text-white',
        ghost:
          'border-transparent bg-transparent text-dark hover:border-gray hover:bg-gray ',
        rose: 'border-red bg-red text-white hover:border-red/90 hover:bg-red/90 ',
        valentine:
          'border-pink bg-pink text-white hover:border-pink/90 hover:bg-pink/90 ',
        halloween:
          'border-orange bg-orange text-white hover:border-orange/90 hover:bg-orange/90 ',
        success:
          'border-green bg-green text-white hover:border-green/90 hover:bg-green/90 ',
        ocean:
          'border-blue bg-blue text-white hover:border-blue/90 hover:bg-blue/90 ',
        violet:
          'border-violet bg-violet text-white hover:border-violet/90 hover:bg-violet/90 ',
      },
      size: {
        auto: 'w-auto',
        full: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'dark',
      size: 'auto',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  disabled,
  onClick,
  variant,
  size,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(buttonVariants({ variant, size }))}
    >
      {children}
    </button>
  );
};

export default Button;
