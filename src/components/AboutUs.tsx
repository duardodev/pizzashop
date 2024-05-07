import Image from 'next/image';
import pizzaIllustration from '../../public/pizza-illustration-2.jpg';
import { RiInstagramLine, RiFacebookCircleLine, RiTiktokLine } from 'react-icons/ri';

export function AboutUs() {
  return (
    <section id="aboutus" className="bgscroll-mt-16">
      <div className="max-w-[1120px] mx-auto px-5 py-24 flex justify-between gap-14">
        <Image
          src={pizzaIllustration}
          height={0}
          width={0}
          priority={true}
          alt="Ilustração de pizzaiolo"
          className="w-[330px] h-auto hidden md:block object-cover order-last lg:order-first rounded-xl"
        />

        <div className="w-full lg:max-w-[580px] flex flex-col gap-8">
          <h1 className="text-title text-[32px] leading-none font-extrabold">Sobre nós</h1>

          <div className="space-y-5">
            <p className="text-text lg:text-start text-lg leading-tight">
              Bem-vindo ao{' '}
              <span className="font-bold">
                <span className="text-red">Pizza</span>Shop
              </span>
              ! Aqui você encontra as mais deliciosas pizzas de Salvador (BA) entregues diretamente
              na porta da sua casa.
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

          <div className="mt-3 flex gap-6">
            <a href="/">
              <RiInstagramLine
                size={24}
                className="text-red hover:text-red-dark transition-colors"
              />
            </a>

            <a href="/">
              <RiFacebookCircleLine
                size={24}
                className="text-red hover:text-red-dark transition-colors"
              />
            </a>

            <a href="/">
              <RiTiktokLine size={24} className="text-red hover:text-red-dark transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
