import { Metadata } from 'next';
import { CompleteOrderForm } from '@/components/CompleteOrderForm';
import { SelectedPizzas } from '@/components/SelectedPizzas';

export const metadata: Metadata = {
  title: 'Checkout'
};

export default function Checkout() {
  return (
    <section className="h-[90px] max-w-[1120px] mx-auto px-6">
      <form className="py-[60px] flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-10">
        <CompleteOrderForm />

        <SelectedPizzas />
      </form>
    </section>
  );
}
