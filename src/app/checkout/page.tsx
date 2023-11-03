import { CompleteOrderForm } from '@/components/CompleteOrderForm';
import { SelectedPizzas } from '@/components/SelectedPizzas';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checkout'
};

export default function Checkout() {
  return (
    <section className="max-w-[1120px] mx-auto mt-[60px] pb-10">
      <form className="flex justify-between gap-10">
        <CompleteOrderForm />

        <SelectedPizzas />
      </form>
    </section>
  );
}
