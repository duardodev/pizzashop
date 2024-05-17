'use client';

import { PaymentMethodInput } from './PaymentMethodInput';
import { useFormContext } from 'react-hook-form';
import { BsCash, BsCreditCard } from 'react-icons/bs';
import { MdPix } from 'react-icons/md';

export const paymentMethods = {
  pix: {
    method: 'Pix',
    icon: <MdPix size={18} className="text-green" />,
  },
  money: {
    method: 'Dinheiro',
    icon: <BsCash size={17} className="text-green" />,
  },
  credit: {
    method: 'Cartão de crédito',
    icon: <BsCreditCard size={17} className="text-green" />,
  },
};

export function PaymentMethodOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string;

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex flex-col gap-3">
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
