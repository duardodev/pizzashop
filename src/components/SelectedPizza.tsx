'use client';

import Image from 'next/image';

import { MdOutlineRemoveCircleOutline } from 'react-icons/md';
import { QuantityInput } from './QuantityInput';
import { SelectSize } from './SelectSize';

import { CartItem } from '../contexts/CartContext';
import { useCart } from '@/hooks/useCart';

interface SelectedPizzaProps {
  pizza: CartItem;
}

export function SelectedPizza({ pizza }: SelectedPizzaProps) {
  const { changeCartItemQuantity, removeCartItem, changeCartItemSize } = useCart();
  const pizzaTotal = pizza.price * pizza.quantity;

  const formattedPrice = pizzaTotal.toLocaleString('pt-BR', {
    minimumFractionDigits: 2
  });

  function handleIncrease() {
    changeCartItemQuantity(pizza.slug, 'increase');
  }

  function handleDecrease() {
    changeCartItemQuantity(pizza.slug, 'decrease');
  }

  function handleRemove() {
    removeCartItem(pizza.slug);
  }

  function handleSizeChange(selectedSize: string) {
    changeCartItemSize(pizza.slug, selectedSize);
  }

  return (
    <div className="w-full pb-6 border-b border-label/20 flex items-start justify-between">
      <div className="flex items-center gap-5">
        <Image src={pizza.image.url} height={72} width={72} alt="Imagem de uma pizza" />

        <div className="flex flex-col gap-2">
          <h2 className="text-title">{pizza.title}</h2>

          <div className="flex items-center gap-2">
            <QuantityInput
              quantity={pizza.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />

            <SelectSize size={pizza.size} onSizeChange={handleSizeChange} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        <h2 className="font-semibold">R$ {formattedPrice}</h2>

        <button type="button">
          <MdOutlineRemoveCircleOutline
            size={18}
            onClick={handleRemove}
            className="text-red hover:text-red/70 transition-colors"
          />
        </button>
      </div>
    </div>
  );
}
