'use client';

import { PizzaFromTheCart } from '../contexts/CartContext';
import { useCart } from '@/hooks/useCart';
import { formatCurrency } from '@/utils/format-currency';
import { RemovePizzaButton } from './RemovePizzaButton';
import { PizzaImage } from './PizzaImage';
import { PizzaControls } from './PizzaControls';

interface SelectedPizzaProps {
  pizza: PizzaFromTheCart;
}

export function SelectedPizza({ pizza }: SelectedPizzaProps) {
  const { changePizzaQuantity, changePizzaSize } = useCart();
  const formattedPrice = formatCurrency(pizza.price);

  function handleIncrease() {
    changePizzaQuantity(pizza.slug, 'increase');
  }

  function handleDecrease() {
    changePizzaQuantity(pizza.slug, 'decrease');
  }

  function handleSizeChange(size: string) {
    changePizzaSize(pizza.slug, size);
  }

  return (
    <div className="w-full pb-6 border-b border-label/20 flex items-center justify-between gap-5">
      <div className="w-36 h-24 relative">
        <PizzaImage fill url={pizza.image.url} title={pizza.title} className="w-48 h-full" />
      </div>

      <div className="w-full flex flex-col gap-3">
        <div className="w-full flex flex-wrap justify-between gap-2.5">
          <h2 className="text-lg leading-none text-title">{pizza.title}</h2>

          <div className="flex items-center gap-2">
            <h2 className="font-semibold leading-none">R$ {formattedPrice}</h2>
            <RemovePizzaButton slug={pizza.slug} title={pizza.title} />
          </div>
        </div>

        <PizzaControls
          quantity={pizza.quantity}
          size={pizza.size}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onSizeChange={handleSizeChange}
        />
      </div>
    </div>
  );
}
