import { Header } from '@/components/Header';
import { Divider } from '@/components/Divider';

import Image from 'next/image';
import Deliveryillustration from '../../public/delivery-illustration-1.svg';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="max-w-[1120px] my-16 mx-auto">
          <div className="flex items-start justify-between">
            <div className="max-w-[600px] flex flex-col items-start gap-7">
              <div>
                <h1 className="text-title mb-4 text-5xl leading-tight font-extrabold">
                  Saboreie a melhor pizza da região sem sair do conforto da sua casa!
                </h1>
                <p className="text-subtitle text-xl leading-tight">
                  Com o nosso site você recebe sua pizza onde estiver, a qualquer hora e ainda
                  quentinha!
                </p>
              </div>

              <button className="bg-red-dark text-white text-sm font-bold w-56 h-12 p-3 rounded-md flex items-center justify-center hover:bg-red transition-colors">
                VER CARDÁPIO
              </button>
            </div>

            <Image
              src={Deliveryillustration}
              alt="Ilustração de entrega"
              width={360}
              height={360}
            />
          </div>
        </section>

        <Divider gradientTo="left" />
      </main>
    </>
  );
}
