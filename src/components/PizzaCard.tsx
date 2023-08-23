import Image from 'next/image';

import { QuantityInput } from './QuantityInput';
import { SelectSize } from './SelectSize';
import { Pizza } from '@/types/pizza';

interface PizzaCardProps {
  pizza: Pizza;
}

export function PizzaCard({ pizza }: PizzaCardProps) {
  const formattedPrice = pizza.mediumPrice.toLocaleString('pt-BR', {
    minimumFractionDigits: 2
  });

  return (
    <div className="w-[310px] bg-card p-5 border-b-4 border-red border-solid rounded-t-2xl rounded-b-lg flex flex-col items-center gap-6">
      <Image src={pizza.image.url} width={200} height={200} alt="" className="-mt-14" />

      <div className="w-full flex flex-col gap-4">
        <div className="h-[78px] flex flex-col items-center gap-2">
          <h1 className="text-title text-xl font-bold leading-tight">{pizza.title}</h1>

          <p className="text-label text-center font-alt leading-tight">{pizza.description}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-text text-xl font-extrabold leading-tight">
            <span className="text-base font-alt font-normal">R$ {''}</span>
            {formattedPrice}
          </p>

          <div className="flex items-center gap-2">
            <QuantityInput />
            <SelectSize />
          </div>
        </div>

        <button className="bg-red-dark text-white text-sm font-bold uppercase px-2 py-2.5 rounded-md hover:bg-red transition-colors">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
