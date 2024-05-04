import Image from 'next/image';
import pizzaMakerIllustration from '../../public/pizza-maker-illustration.svg';

export function AboutUs() {
  return (
    <section id="aboutus" className="max-w-[1120px] mx-auto px-6 py-24 scroll-mt-16">
      <div className="flex flex-col lg:flex-row justify-between">
        <Image
          src={pizzaMakerIllustration}
          height={320}
          width={320}
          priority
          alt="Ilustração de pizzaiolo"
          className="h-[330px] w-[360px] hidden lg:block"
        />

        <div className="w-full lg:max-w-[560px] flex flex-col gap-6">
          <h1 className="text-title text-[32px] leading-tight font-extrabold">Sobre nós</h1>

          <div className="space-y-5">
            <p className="text-text lg:text-start text-lg leading-tight">
              Bem-vindo ao{' '}
              <span className="font-bold">
                <span className="text-red">Pizza</span>Shop
              </span>
              ! Aqui você encontra as mais deliciosas pizzas de Salvador - BA e região, entregues
              diretamente na sua porta.
            </p>

            <p className="text-text lg:text-start text-lg leading-tight">
              Usamos ingredientes de qualidade e frescos para garantir que cada fatia seja
              deliciosa. Nossa missão é proporcionar uma experiência de pizza fácil e conveniente
              para você desfrutar no conforto da sua casa.
            </p>

            <p className="text-text lg:text-start text-lg leading-tight">
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
