import { forwardRef, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  cols?: string;
  additionalStyle?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, cols, additionalStyle, ...props }, ref) => {
    return (
      <div className={`${cols} flex flex-col gap-1`}>
        <input
          {...props}
          ref={ref}
          className={`${additionalStyle} h-[42px] bg-button-dark text-text p-3 rounded border border-solid border-button-dark outline-none focus:border-orange placeholder:text-label transition-colors`}
        />
        {error && <span className="hidden sm:block text-red">{error}</span>}
      </div>
    );
  }
);
