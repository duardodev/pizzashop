'use client';

import { PizzaControls } from './PizzaControls';
import { AddPizzaButton } from './AddPizzaButton';
import { PizzaImage } from './PizzaImage';
import { usePizzaCard } from '@/hooks/usePizzaCard';
import { Pizza } from '@/types/pizza';
import { cn } from '@/lib/utils';

interface PizzaCardProps {
  pizza: Pizza;
}

export function PizzaCard({ pizza }: PizzaCardProps) {
  const { quantity, formattedPrice, size, price, handleDecrease, handleIncrease, handleSizeChange } = usePizzaCard({
    pizza,
  });

  return (
    <div className="w-[250px] min-[310px]:w-[280px] flex flex-col items-center gap-3">
      <div className="h-64 w-full relative bg-orange-light/70 p-6 rounded-lg flex justify-center">
        <PizzaImage
          priority
          url={pizza.image.url}
          title={pizza.title}
          width={192}
          height={208}
          className="w-48 h-full"
        />

        <AddPizzaButton pizza={pizza} quantity={quantity} price={price} size={size} />
      </div>

      <div className="w-full flex flex-col gap-3">
        <h1 className="text-title text-center text-xl font-extrabold leading-tight">{pizza.title}</h1>
        <p className="w-64 text-label text-center leading-tight">{pizza.description}</p>

        <div className={cn('flex justify-between items-center', pizza.title === 'Muçarela' && 'mt-5')}>
          <p className="text-text text-xl font-extrabold leading-tight">
            <span className="text-sm font-normal">R$ {''}</span>
            {formattedPrice}
          </p>

          <PizzaControls
            quantity={quantity}
            size={size}
            withSizePicker={true}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onSizeChange={handleSizeChange}
          />
        </div>
      </div>
    </div>
  );
}
