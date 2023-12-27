'use client';

import { PaymentMethodInput } from './PaymentMethodInput';
import { useFormContext } from 'react-hook-form';
import { BsCash, BsCreditCard } from 'react-icons/bs';
import { PiBankDuotone } from 'react-icons/pi';

export const paymentMethods = {
  money: {
    method: 'Dinheiro',
    icon: <BsCash size={17} className="text-green" />
  },
  credit: {
    method: 'Cartão de crédito',
    icon: <BsCreditCard size={17} className="text-green" />
  },
  debit: {
    method: 'Cartão de débito',
    icon: <PiBankDuotone size={19} className="text-green" />
  }
};

export function PaymentMethodOptions() {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string;

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex flex-col md:flex-row gap-3">
        {Object.entries(paymentMethods).map(([key, { method, icon }]) => (
          <PaymentMethodInput
            key={method}
            id={key}
            value={key}
            method={method}
            icon={icon}
            {...register('paymentMethod')}
          />
        ))}
      </div>

      {paymentMethodError && <span className="hidden sm:block text-red">{paymentMethodError}</span>}
    </div>
  );
}
