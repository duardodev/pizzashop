'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { QuantityInput } from './QuantityInput';
import { SelectSize } from './SelectSize';
import { useCart } from '@/hooks/useCart';
import { formatCurrency } from '@/utils/format-currency';
import { Pizza } from '@/types/pizza';
import { sizes } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';

interface PizzaCardProps {
  pizza: Pizza;
}

export function PizzaCard({ pizza }: PizzaCardProps) {
  const { addPizza } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(sizes[1]);
  const [price, setPrice] = useState(pizza.mediumPrice);

  const formattedPrice = useMemo(() => formatCurrency(price), [price]);

  function handleIncrease() {
    setQuantity(quantity => quantity + 1);
  }

  function handleDecrease() {
    setQuantity(quantity => quantity - 1);
  }

  function handleSizeChange(selectedSize: string) {
    let pizzaPrice = 0;

    switch (selectedSize) {
      case sizes[0]:
        pizzaPrice = pizza.maximumPrice;
        break;
      case sizes[1]:
        pizzaPrice = pizza.mediumPrice;
        break;
      case sizes[2]:
        pizzaPrice = pizza.minimumPrice;
        break;
      default:
        pizzaPrice = pizza.mediumPrice;
    }

    setSize(selectedSize);
    setPrice(pizzaPrice);
  }

  function handleAddToCart() {
    toast.success('Pizza adicionada ao carrinho!', {
      duration: 1400,
      style: {
        background: '#FFFFFF',
        fontSize: '16px',
        fontFamily: 'unset',
      },
    });

    const pizzaToAdd = {
      ...pizza,
      quantity,
      price,
      size,
    };

    addPizza(pizzaToAdd);
  }

  return (
    <div className="w-[250px] min-[310px]:w-[280px] flex flex-col items-center gap-3">
      <div className="h-64 w-full relative bg-orange-light/70 p-6 rounded-lg flex justify-center">
        <Image
          src={pizza.image.url}
          priority
          quality={100}
          width={192}
          height={208}
          sizes="35vw"
          alt={`Imagem de uma pizza de ${pizza.title}`}
          className="w-48 h-full"
        />

        <button
          onClick={handleAddToCart}
          className="bg-red-dark text-white text-sm font-bold uppercase p-1 rounded-full hover:bg-red transition-colors absolute -top-2 -right-2"
        >
          <Plus size={22} />
        </button>
      </div>

      <div className="w-full flex flex-col gap-3">
        <h1 className="text-title text-center text-xl font-extrabold leading-tight">{pizza.title}</h1>
        <p className="w-64 text-label text-center leading-tight">{pizza.description}</p>

        <div className={cn('flex justify-between items-center', pizza.title === 'Muçarela' && 'mt-5')}>
          <p className="text-text text-xl font-extrabold leading-tight">
            <span className="text-sm font-normal">R$ {''}</span>
            {formattedPrice}
          </p>

          <div className="mt-1 flex items-center gap-2">
            <QuantityInput quantity={quantity} onIncrease={handleIncrease} onDecrease={handleDecrease} />
            <SelectSize onSizeChange={handleSizeChange} size={size} />
          </div>
        </div>
      </div>
    </div>
  );
}
