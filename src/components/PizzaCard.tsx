import Image from 'next/image';

import { Pizza } from '@/types/pizza';
import { CgSize } from 'react-icons/cg';
import { MdOutlineRemove, MdOutlineAdd } from 'react-icons/md';

interface PizzaCardProps {
  pizza: Pizza;
}

export function PizzaCard({ pizza }: PizzaCardProps) {
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

          <div className="flex items-center gap-2">
            <div className="bg-button-dark p-2 rounded-md flex flex-row justify-between items-center gap-1">
              <button>
                <MdOutlineRemove size={18} className="text-red" />
              </button>
              <span className="text-title font-alt leading-tight">1</span>
              <button>
                <MdOutlineAdd size={18} className="text-red" />
              </button>
            </div>

            <button
              aria-label="Select Size"
              className="bg-orange p-2 rounded-md flex justify-center items-center"
            >
              <CgSize size={20} className="text-white" />
            </button>
          </div>
        </div>

        <button className="bg-red-dark text-white text-sm font-bold px-2 py-2.5 rounded-md">
          ADICIONAR AO CARRINHO
        </button>
      </div>
    </div>
  );
}
