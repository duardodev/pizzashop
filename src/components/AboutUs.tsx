import Image from 'next/image';
import secondaryPizzaImage from '../../public/pizza-image-2.jpg';
import { SocialMediaLinks } from './social-media-links';

export function AboutUs() {
  return (
    <section id="aboutus" className="scroll-mt-16">
      <div className="max-w-[1120px] mx-auto px-5 py-28 flex justify-between gap-14">
        <div className="lg:w-[330px] min-w-[330px] h-auto hidden md:block order-last lg:order-first rounded-xl">
          <Image
            src={secondaryPizzaImage}
            width={330}
            height={440}
            priority
            alt="Imagem de pizza e ingredientes"
            className="w-auto h-full object-cover rounded-xl"
          />
        </div>

        <div className="w-full lg:max-w-[580px] flex flex-col gap-8">
          <h1 className="text-title text-[32px] leading-none font-extrabold">Sobre nós</h1>

          <div className="space-y-5 mb-3">
            <p className="text-text lg:text-start text-lg leading-tight">
              Bem-vindo ao{' '}
              <span className="font-bold">
                <span className="text-red">Pizza</span>Shop
              </span>
              ! Aqui você encontra as mais deliciosas pizzas de Salvador (BA) entregues diretamente na porta da sua casa.
            </p>

            <p className="text-text lg:text-start text-lg leading-tight">
              Usamos ingredientes de qualidade e frescos para garantir que cada fatia seja deliciosa. Nossa missão é proporcionar uma
              experiência de pizza fácil e conveniente para você desfrutar no conforto da sua casa.
            </p>

            <p className="text-text lg:text-start text-lg leading-tight">
              Venha experimentar nossas pizzas cuidadosamente elaboradas e se encantar com a combinação de sabores únicos. Conte conosco
              para levar até você uma experiência incrível de pizza, com entrega rápida e eficiente.
            </p>
          </div>

          <SocialMediaLinks />
        </div>
      </div>
    </section>
  );
}
