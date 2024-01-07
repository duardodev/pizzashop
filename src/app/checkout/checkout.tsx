'use client';

import { FormProvider } from 'react-hook-form';
import { CompleteOrderForm } from '@/components/CompleteOrderForm';
import { SelectedPizzas } from '@/components/SelectedPizzas';
import { useCheckout } from './useCheckout';

export default function Checkout() {
  const { confirmOrderForm, handleConfirmOrder, handleSubmit, isLoading, modalIsVisible } =
    useCheckout();
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
