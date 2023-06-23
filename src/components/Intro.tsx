import Image from 'next/image';
import { BsCreditCard } from 'react-icons/bs';
import { MdOutlineArrowDownward, MdDeliveryDining } from 'react-icons/md';

import DeliveryIllustration from '../../public/delivery-illustration-1.svg';

export function Intro() {
  return (
    <section className="max-w-[1120px] my-[116px] mx-auto">
      <div className="flex justify-between">
        <div className="max-w-[600px] flex flex-col items-start gap-7">
          <div>
            <h1 className="text-title mb-4 text-[42px] leading-tight font-extrabold">
              Saboreie a <span className="text-red">melhor pizza</span> da região sem sair do{' '}
              <span className="text-red">conforto</span> da sua casa!
            </h1>
            <p className="text-subtitle text-xl font-alt leading-tight">
              Com o nosso serviço de entrega você recebe sua pizza onde estiver, a qualquer hora e
              ainda quentinha!
            </p>
          </div>

          <button className="bg-red-dark text-white text-sm font-bold w-56 h-[50px] p-3 rounded-md flex items-center justify-center gap-2 hover:bg-red transition-colors">
            <MdOutlineArrowDownward size={24} />
            PEDIR AGORA
          </button>

          <div className="mt-1 flex gap-5">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-red-light p-2 rounded-xl flex items-center justify-center">
                <BsCreditCard size={20} className="text-red" />
              </div>
              <p className="text-subtitle text-lg font-alt">Compra fácil e segura</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-red-light p-2 rounded-xl flex items-center justify-center">
                <MdDeliveryDining size={24} className="text-red" />
              </div>
              <p className="text-subtitle text-lg font-alt">Entrega rápida e eficiente</p>
            </div>
          </div>
        </div>

        <Image src={DeliveryIllustration} height={420} alt="Ilustração de entrega" />
      </div>
    </section>
  );
}
