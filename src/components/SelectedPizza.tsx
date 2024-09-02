'use client';

import Image from 'next/image';
import { HiOutlineTrash } from 'react-icons/hi';
import { QuantityInput } from './QuantityInput';
import { SelectSize } from './SelectSize';
import { PizzaFromTheCart } from '../contexts/CartContext';
import { useCart } from '@/hooks/useCart';
import { formatCurrency } from '@/utils/format-currency';
import { PizzaImage } from './PizzaImage';

interface SelectedPizzaProps {
  pizza: PizzaFromTheCart;
}

export function SelectedPizza({ pizza }: SelectedPizzaProps) {
  const { changePizzaQuantity, changePizzaSize, removePizza } = useCart();
  const pizzaTotal = pizza.price * pizza.quantity;
  const formattedPrice = formatCurrency(pizzaTotal);

  function handleIncrease() {
    changePizzaQuantity(pizza.slug, 'increase');
  }

  function handleDecrease() {
    changePizzaQuantity(pizza.slug, 'decrease');
  }

  function handleRemove() {
    removePizza(pizza.slug);
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

            <button type="button">
              <HiOutlineTrash size={18} onClick={handleRemove} className="text-red hover:text-red/70 transition-colors" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <QuantityInput quantity={pizza.quantity} onIncrease={handleIncrease} onDecrease={handleDecrease} />
          <SelectSize size={pizza.size} onSizeChange={handleSizeChange} />
        </div>
      </div>
    </div>
  );
}
