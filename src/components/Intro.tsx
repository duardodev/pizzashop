import Image from 'next/image';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';
import { IoArrowDownSharp } from 'react-icons/io5';

import PizzaIllustration from '../../public/pizza-illustration.jpg';

export function Intro() {
  return (
    <section className="max-w-[1120px] mx-auto px-5 pb-36 pt-48">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
        <div className="max-w-[510px] flex items-center lg:items-start flex-col gap-7">
          <div className="space-y-4">
            <h1 className="text-title text-center lg:text-start text-[32px] min-[530px]:text-4xl font-extrabold leading-tight">
              Saboreie a <span className="text-red">melhor pizza</span> da região sem sair do{' '}
              <span className="text-red">conforto</span> da sua casa!
            </h1>

            <p className="max-w-[328px] min-[440px]:max-w-[480px] mx-auto lg:max-w-full text-text text-center lg:text-start text-lg leading-snug">
              Com o nosso serviço de entrega você recebe sua pizza onde estiver, a qualquer hora e
              ainda quentinha!
            </p>
          </div>

          <div className="pb-3 flex flex-col min-[530px]:flex-row gap-y-5 gap-x-6">
            <Link
              href="#menu"
              className="w-52 h-12 bg-red text-white text-sm font-bold uppercase p-3 rounded-md flex items-center justify-center gap-3 hover:bg-red-dark transition-colors"
            >
              Ver cardápio
              <IoArrowDownSharp size={20} />
            </Link>

            <Link
              href="/"
              className="w-52 h-12 bg-transparent border border-orange text-orange hover:text-white text-sm font-bold uppercase p-3 rounded-md flex items-center justify-center gap-3 hover:bg-orange transition-colors duration-300"
            >
              Entrar em contato
              <BsWhatsapp size={18} />
            </Link>
          </div>
        </div>

        <Image
          src={PizzaIllustration}
          height={0}
          width={0}
          priority={true}
          alt="Ilustração de entrega"
          className="w-[440px] h-auto hidden min-[530px]:block rounded-xl"
        />
      </div>
    </section>
  );
}
