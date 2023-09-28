'use client';

import Image from 'next/image';

import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { QuantityInput } from './QuantityInput';
import { SelectSize } from './SelectSize';
import { Pizza } from '@/types/pizza';

interface PizzaCardProps {
  pizza: Pizza;
}

const sizes = ['Grande', 'Média', 'Pequena'];

export function PizzaCard({ pizza }: PizzaCardProps) {
  const { addPizzaToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(sizes[1]);
  const [price, setPrice] = useState(pizza.mediumPrice);

  const formattedPrice = price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2
  });

  function handleIncrease() {
    setQuantity(quantity => quantity + 1);
  }

  function handleDecrease() {
    setQuantity(quantity => quantity - 1);
  }

  function handleSizeChange(selectedSize: string) {
    let pizzaPrice = 0;

    if (selectedSize === sizes[0]) {
      pizzaPrice = pizza.maximumPrice;
    } else if (selectedSize === sizes[1]) {
      pizzaPrice = pizza.mediumPrice;
    } else if (selectedSize === sizes[2]) {
      pizzaPrice = pizza.minimumPrice;
    }

    setSize(selectedSize);
    setPrice(pizzaPrice);
  }

  function handleAddToCart() {
    const pizzaToAdd = {
      ...pizza,
      quantity,
      price,
      size
    };

    addPizzaToCart(pizzaToAdd);
  }

  return (
    <div className="w-[310px] bg-card p-5 border-b-4 border-red border-solid rounded-t-2xl rounded-b-lg flex flex-col items-center gap-6">
      <Image src={pizza.image.url} width={185} height={185} alt="" className="-mt-14" />

      <div className="w-full flex flex-col gap-4">
        <div className="h-[78px] flex flex-col items-center gap-2">
          <h1 className="text-title text-xl font-extrabold leading-tight">{pizza.title}</h1>

          <p className="text-label text-center leading-tight">{pizza.description}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-text text-xl font-extrabold leading-tight">
            <span className="text-sm font-normal">R$ {''}</span>
            {formattedPrice}
          </p>

          <div className="flex items-center gap-2">
            <QuantityInput
              quantity={quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />

            <SelectSize onSizeChange={handleSizeChange} size={size} />
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-red-dark text-white text-sm font-bold uppercase px-2 py-2.5 rounded-md hover:bg-red transition-colors"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
