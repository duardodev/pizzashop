'use client';

import { CompleteOrderForm } from '@/components/CompleteOrderForm';
import { SelectedPizzas } from '@/components/SelectedPizzas';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export default function Checkout() {
  const router = useRouter();

  function handleConfirmOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push('/success');
  }

  return (
    <section className="max-w-[1120px] mx-auto mt-[60px] pb-10">
      <form onSubmit={handleConfirmOrder} className="flex justify-between gap-10">
        <CompleteOrderForm />

        <SelectedPizzas />
      </form>
    </section>
  );
}
