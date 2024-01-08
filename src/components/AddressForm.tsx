'use client';

import { useFormContext } from 'react-hook-form';
import { Input } from './Input';

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <div className="w-full space-y-3">
      <Input
        type="text"
        placeholder="CEP"
        maxLength={9}
        additionalStyle="max-w-full sm:max-w-[210px] col-span-full"
        error={errors.zipCode?.message}
        {...register('zipCode')}
      />

      <div className="grid grid-cols-2 gap-3">
        <Input
          type="text"
          placeholder="Cidade"
          error={errors.city?.message}
          {...register('city')}
        />

        <Input
          type="text"
          placeholder="Bairro"
          error={errors.neighborhood?.message}
          {...register('neighborhood')}
        />
      </div>

      <div className="grid grid-cols-12 gap-3">
        <Input
          type="text"
          placeholder="Rua"
          cols="col-span-7"
          error={errors.street?.message}
          {...register('street')}
        />

        <Input
          type="number"
          placeholder="Número"
          cols="col-span-5"
          error={errors.number?.message}
          {...register('number')}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Complemento"
          className="h-[42px] col-span-full bg-button-dark text-text p-3 rounded border border-solid border-button-dark outline-none focus:border-orange placeholder:text-label transition-colors"
        />

        <Input type="text" placeholder="Nome" {...register('name')} error={errors.name?.message} />

        <Input
          type="text"
          placeholder="Telefone"
          maxLength={15}
          {...register('phone')}
          error={errors.phone?.message}
        />
      </div>
    </div>
  );
}
