import { Header } from '@/components/Header';
import { Divider } from '@/components/Divider';

import { MdDeliveryDining, MdOutlineArrowDownward } from 'react-icons/md';
import { BsCreditCard } from 'react-icons/bs';

import DeliveryIllustration from '../../public/delivery-illustration-1.svg';
import PizzaMakerIllustration from '../../public/pizza-maker-illustration.svg';

import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="max-w-[1120px] my-[116px] mx-auto">
          <div className="flex justify-between">
            <div className="max-w-[600px] flex flex-col items-start gap-8">
              <div>
                <h1 className="text-title mb-4 text-[42px] leading-tight font-extrabold">
                  Saboreie a <span className="text-red">melhor pizza</span> da região sem sair do{' '}
                  <span className="text-red">conforto</span> da sua casa!
                </h1>
                <p className="text-subtitle text-xl leading-tight">
                  Com o nosso serviço de entrega você recebe sua pizza onde estiver, a qualquer hora
                  e ainda quentinha!
                </p>
              </div>

              <button className="bg-red-dark text-white text-sm font-bold w-60 h-[50px] p-3 rounded-md flex items-center justify-center gap-3 hover:bg-red transition-colors">
                <MdOutlineArrowDownward size={24} />
                PEDIR AGORA
              </button>

              <div className="mt-1 flex gap-5">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 bg-red-light p-2 rounded-xl flex items-center justify-center">
                    <BsCreditCard size={20} className="text-red" />
                  </div>
                  <p className="text-subtitle text-lg">Compra fácil e segura</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 bg-red-light p-2 rounded-xl flex items-center justify-center">
                    <MdDeliveryDining size={24} className="text-red" />
                  </div>
                  <p className="text-subtitle text-lg">Entrega rápida e eficiente</p>
                </div>
              </div>
            </div>

            <Image src={DeliveryIllustration} height={420} alt="Ilustração de entrega" />
          </div>
        </section>

        <Divider gradientTo="left" />

        <section className="max-w-[1120px] my-16 mx-auto">
          <div className="flex items-start justify-between">
            <Image src={PizzaMakerIllustration} alt="Ilustração de pizzaiolo" />

            <div className="max-w-[580px] flex flex-col items-start gap-8">
              <h1 className="text-title text-[42px] leading-tight font-extrabold">Sobre nós</h1>

              <div className="flex flex-col gap-4">
                <p className="text-subtitle text-xl leading-tight">
                  Bem-vindo ao{' '}
                  <span className="font-bold">
                    <span className="text-red">Hot</span>Pizza
                  </span>
                  ! Aqui oferecemos as melhores pizzas de Salvador - BA e região, entregues
                  diretamente na sua porta.
                </p>

                <p className="text-subtitle text-xl leading-tight">
                  Usamos ingredientes de qualidade e frescos para garantir que cada fatia seja
                  deliciosa. Nossa missão é proporcionar uma experiência de pizza fácil e
                  conveniente para você desfrutar no conforto da sua casa.
                </p>

                <p className="text-subtitle text-xl leading-tight">
                  Juntamente com uma variedade de sabores e opções de tamanho, assim temos a pizza
                  perfeita para todas as ocasiões!
                </p>
              </div>
            </div>
          </div>
        </section>

        <Divider gradientTo="right" />
      </main>
    </>
  );
}
