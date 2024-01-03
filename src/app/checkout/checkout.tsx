'use client';

import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { CompleteOrderForm } from '@/components/CompleteOrderForm';
import { SelectedPizzas } from '@/components/SelectedPizzas';

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'O cep precisa ter 8 dígitos'),
  city: zod.string().min(1, 'Informe a cidade'),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número do edifício'),
  name: zod.string().min(1, 'Informe seu nome'),
  telephone: zod.string().min(1, 'Informe o telefone para contato'),
  paymentMethod: zod.enum(['money', 'debit', 'credit'], {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' };
    }
  })
});

export type OrderFormData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderFormData;

export default function Checkout() {
  const { cleanCart } = useCart();
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema)
  });

  const { handleSubmit } = confirmOrderForm;

  function handleConfirmOrder() {
    try {
      setIsLoading(true);

      setTimeout(() => {
        setModalIsVisible(!modalIsVisible);
        cleanCart();
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <section className="h-[90px] max-w-[1120px] mx-auto px-6">
        <form
          onSubmit={handleSubmit(handleConfirmOrder)}
          className="py-[60px] flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-10"
        >
          <CompleteOrderForm />
          <SelectedPizzas modalIsVisible={modalIsVisible} isLoading={isLoading} />
        </form>
      </section>
    </FormProvider>
  );
}
