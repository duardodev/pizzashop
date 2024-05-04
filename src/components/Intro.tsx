import Image from 'next/image';
import Link from 'next/link';

import { BsCreditCard } from 'react-icons/bs';
import { TbArrowBigDownLineFilled } from 'react-icons/tb';
import { MdDeliveryDining } from 'react-icons/md';

import DeliveryIllustration from '../../public/delivery-illustration-1.svg';

export function Intro() {
  return (
    <section className="max-w-[1120px] mx-auto px-6 pb-32 pt-48">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
        <div className="max-w-[540px] flex items-center lg:items-start flex-col gap-7">
          <div className="space-y-3">
            <h1 className="text-title text-center lg:text-start text-[32px] min-[530px]:text-4xl font-extrabold leading-tight">
              Saboreie a <span className="text-red">melhor pizza</span> da região sem sair do{' '}
              <span className="text-red">conforto</span> <br /> da sua casa!
            </h1>
            <p className="text-text text-center lg:text-start text-lg leading-snug">
              Com o nosso serviço de entrega você recebe sua pizza onde estiver, a qualquer hora e
              ainda quentinha!
            </p>
          </div>

          <Link
            href="#menu"
            className="w-52 h-12 bg-red-dark text-white text-sm font-bold uppercase p-3 rounded-md flex items-center justify-center gap-3 hover:bg-red transition-colors"
          >
            <TbArrowBigDownLineFilled size={20} />
            Ver cardápio
          </Link>

          <div className="w-[220px] sm:w-full mt-4 flex flex-col sm:flex-row sm:justify-between lg:justify-normal gap-8 sm:gap-12">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-red-light rounded-xl flex items-center justify-center">
                <BsCreditCard size={20} className="text-red" />
              </div>

              <p className="text-text">Compra fácil e segura</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-red-light rounded-xl flex items-center justify-center">
                <MdDeliveryDining size={24} className="text-red" />
              </div>

              <p className="text-text">Entrega rápida e eficaz</p>
            </div>
          </div>
        </div>

        <Image
          src={DeliveryIllustration}
          height={390}
          width={390}
          priority
          alt="Ilustração de entrega"
          className="hidden lg:block"
        />
      </div>
    </section>
  );
}
