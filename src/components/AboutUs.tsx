import pizzaMakerIllustration from '../../public/pizza-maker-illustration.svg';

import Image from 'next/image';

export function AboutUs() {
  return (
    <section id="aboutus" className="max-w-[1120px] py-24 scroll-mt-16 mx-auto">
      <div className="flex items-start justify-between">
        <Image
          src={pizzaMakerIllustration}
          height={340}
          width={340}
          alt="Ilustração de pizzaiolo"
        />

        <div className="max-w-[560px] flex flex-col items-start gap-6">
          <h1 className="text-title text-[32px] leading-tight font-extrabold">Sobre nós</h1>

          <div className="space-y-5">
            <p className="text-text text-lg leading-tight">
              Bem-vindo ao{' '}
              <span className="font-bold">
                <span className="text-red">Hot</span>Pizza
              </span>
              ! Aqui você encontra as mais deliciosas pizzas de Salvador - BA e região, entregues
              diretamente na sua porta.
            </p>

            <p className="text-text text-lg leading-tight">
              Usamos ingredientes de qualidade e frescos para garantir que cada fatia seja
              deliciosa. Nossa missão é proporcionar uma experiência de pizza fácil e conveniente
              para você desfrutar no conforto da sua casa.
            </p>

            <p className="text-text text-lg leading-tight">
              Venha experimentar nossas pizzas cuidadosamente elaboradas e se encantar com a
              combinação de sabores únicos. Conte conosco para levar até você uma experiência
              incrível de pizza, com entrega rápida e eficiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
