import Image from 'next/image';
import Link from 'next/link';

import { BsCreditCard } from 'react-icons/bs';
import { TbArrowBigDownLineFilled } from 'react-icons/tb';
import { MdDeliveryDining } from 'react-icons/md';

import DeliveryIllustration from '../../public/delivery-illustration-1.svg';

export function Intro() {
  return (
    <section className="max-w-[1120px] py-[116px] mx-auto scroll-py-24">
      <div className="flex justify-between items-start">
        <div className="max-w-[600px] flex flex-col gap-7">
          <div className="space-y-3">
            <h1 className="text-title text-[40px] leading-snug font-extrabold">
              Saboreie a <span className="text-red">melhor pizza</span> da região sem sair do{' '}
              <span className="text-red">conforto</span> da sua casa!
            </h1>
            <p className="text-text text-xl font-alt leading-snug">
              Com o nosso serviço de entrega você recebe sua pizza onde estiver, a qualquer hora e
              ainda quentinha!
            </p>
          </div>

          <Link
            href="#menu"
            className="w-56 h-[50px] bg-red-dark text-white text-sm font-bold p-3 rounded-md flex items-center justify-center gap-3 hover:bg-red transition-colors"
          >
            <TbArrowBigDownLineFilled size={20} />
            VER CARDÁPIO
          </Link>

          <div className="mt-4 flex gap-14">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 bg-red-light p-2 rounded-lg flex items-center justify-center">
                <BsCreditCard size={18} className="text-red" />
              </div>

              <p className="text-text text-lg font-alt">Compra fácil e segura</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-9 w-9 bg-red-light p-2 rounded-lg flex items-center justify-center">
                <MdDeliveryDining size={24} className="text-red" />
              </div>

              <p className="text-text text-lg font-alt">Entrega rápida e eficiente</p>
            </div>
          </div>
        </div>

        <Image src={DeliveryIllustration} height={420} alt="Ilustração de entrega" />
      </div>
    </section>
  );
}
