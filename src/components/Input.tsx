import { forwardRef, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  cols?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({ error, cols, ...props }, ref) => {
  return (
    <div className={`${cols} flex flex-col gap-1`}>
      <input {...props} ref={ref} />
      {error && <span className="hidden sm:block text-red">{error}</span>}
    </div>
  );
});
