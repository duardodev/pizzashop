import { Header } from '@/components/Header';
import { Divider } from '@/components/Divider';

import DeliveryIllustration from '../../public/delivery-illustration-1.svg';
import PizzaMakerIllustration from '../../public/pizza-maker-illustration.svg';

import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="max-w-[1120px] my-20 mx-auto">
          <div className="flex items-start justify-between">
            <div className="max-w-[600px] flex flex-col items-start gap-7">
              <div>
                <h1 className="text-title mb-4 text-[42px] leading-tight font-extrabold">
                  Saboreie a melhor pizza da região sem sair do conforto da sua casa!
                </h1>
                <p className="text-subtitle text-xl leading-tight">
                  Com o nosso serviço de entrega você recebe sua pizza onde estiver, a qualquer hora
                  e ainda quentinha!
                </p>
              </div>

              <button className="bg-red-dark text-white text-sm font-bold w-56 h-12 p-3 rounded-md flex items-center justify-center hover:bg-red transition-colors">
                VER CARDÁPIO
              </button>
            </div>

            <Image src={DeliveryIllustration} alt="Ilustração de entrega" />
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
