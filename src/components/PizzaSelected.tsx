import Image from 'next/image';

import { MdOutlineRemoveCircleOutline } from 'react-icons/md';
import { QuantityInput } from './QuantityInput';
import { SelectSize } from './SelectSize';

import pizzaImg from '../../public/pizza-calabresa.png';

export function PizzaSelected() {
  return (
    <div className="w-full pb-6 border-b border-label/20 flex items-start justify-between">
      <div className="flex items-center gap-5">
        <Image src={pizzaImg} height={72} width={72} alt="Imagem de uma pizza" />

        <div className="flex flex-col gap-2">
          <h2 className="text-title text-lg font-alt">Calabresa</h2>

          <div className="flex items-center gap-2">
            <QuantityInput />
            <SelectSize />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        <h2 className="font-alt font-bold">R$ 19,90</h2>

        <button>
          <MdOutlineRemoveCircleOutline
            size={18}
            className="text-red hover:text-red/70 transition-colors"
          />
        </button>
      </div>
    </div>
  );
}
