'use client';

import { useCart } from '@/hooks/useCart';
import { SelectedPizza } from './SelectedPizza';

export function SelectedPizzasList() {
  const { pizzasFromTheCart } = useCart();

  return (
    <div className="max-h-[380px] overflow-y-auto space-y-8">
      {pizzasFromTheCart.map(pizzaFromTheCart => {
        return <SelectedPizza key={pizzaFromTheCart.slug} pizza={pizzaFromTheCart} />;
      })}
    </div>
  );
}
