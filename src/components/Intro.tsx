import Image from 'next/image';
import Link from 'next/link';

import { BsCreditCard, BsCreditCardFill } from 'react-icons/bs';
import { TbArrowBigDownLineFilled } from 'react-icons/tb';
import { MdDeliveryDining } from 'react-icons/md';

import DeliveryIllustration from '../../public/delivery-illustration-1.svg';

export function Intro() {
  return (
    <section className="max-w-[1120px] py-[116px] mx-auto scroll-py-24">
      <div className="flex justify-between items-center">
        <div className="max-w-[540px] flex flex-col gap-7">
          <div className="space-y-3">
            <h1 className="text-title text-4xl leading-snug font-extrabold">
              Saboreie a <span className="text-red">melhor pizza</span> da região sem sair do{' '}
              <span className="text-red">conforto</span> <br /> da sua casa!
            </h1>
            <p className="text-text text-lg font-alt leading-snug">
              Com o nosso serviço de entrega você recebe sua pizza onde estiver, a qualquer hora e
              ainda quentinha!
            </p>
          </div>

          <Link
            href="#menu"
            className="w-56 h-12 bg-red-dark text-white text-sm font-bold uppercase p-3 rounded-md flex items-center justify-center gap-3 hover:bg-red transition-colors"
          >
            <TbArrowBigDownLineFilled size={20} />
            Ver cardápio
          </Link>

          <div className="mt-4 flex gap-12">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-green rounded-full flex items-center justify-center">
                <BsCreditCardFill size={16} className="text-white" />
              </div>

              <p className="text-text font-alt">Compra fácil e segura</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-orange rounded-full flex items-center justify-center">
                <MdDeliveryDining size={20} className="text-white" />
              </div>

              <p className="text-text font-alt">Entrega rápida e eficiente</p>
            </div>
          </div>
        </div>

        <Image src={DeliveryIllustration} height={410} width={410} alt="Ilustração de entrega" />
      </div>
    </section>
  );
}
