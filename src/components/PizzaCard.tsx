'use client';

import Image from 'next/image';

import { Pizza } from '@/types/pizza';
import { CgSize } from 'react-icons/cg';
import { MdOutlineRemove, MdOutlineAdd } from 'react-icons/md';
import { useState } from 'react';
import { QuantityInput } from './QuantityInput';

interface PizzaCardProps {
  pizza: Pizza;
}

export function PizzaCard({ pizza }: PizzaCardProps) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity(quantity => quantity + 1);
  }

  function handleDecrease() {
    setQuantity(quantity => quantity - 1);
  }

  return (
    <div className="w-[310px] bg-card p-5 border-b-4 border-red border-solid rounded-t-2xl rounded-b-lg flex flex-col items-center gap-6">
      <Image src={pizza.image.url} width={210} height={210} alt="" className="-mt-14" />

      <div className="w-full flex flex-col gap-4">
        <div className="h-[78px] flex flex-col items-center gap-2">
          <h1 className="text-title text-[22px] font-bold leading-tight">{pizza.title}</h1>

          <p className="text-label text-center font-alt leading-tight">{pizza.description}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-text text-[22px] font-extrabold leading-tight">
            <span className="text-base font-alt font-normal">R$ {''}</span>
            {pizza.mediumPrice}
          </p>

          <QuantityInput
            quantity={quantity}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
          />
        </div>

        <button className="bg-red-dark text-white text-sm font-bold px-2 py-2.5 rounded-md">
          ADICIONAR AO CARRINHO
        </button>
      </div>
    </div>
  );
}
