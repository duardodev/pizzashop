import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  method: string;
  icon: ReactNode;
};

export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodInputProps>(
  ({ id, method, icon, ...props }, ref) => {
    return (
      <div>
        <input type="radio" name="paymentMethod" id={id} ref={ref} {...props} className="hidden appearance-none peer" />
        <label
          htmlFor={id}
          className="w-full h-12 bg-button-dark text-text text-sm uppercase p-4 rounded border border-solid border-button-dark outline-none flex items-center justify-center gap-3 peer-checked:border-green peer-checked:bg-green/5 hover:bg-button-dark/70 cursor-pointer transition-colors"
        >
          {icon}
          {method}
        </label>
      </div>
    );
  }
);
