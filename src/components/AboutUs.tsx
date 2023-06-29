import PizzaMakerIllustration from '../../public/pizza-maker-illustration.svg';

import Image from 'next/image';

export function AboutUs() {
  return (
    <section className="max-w-[1120px] my-16 mx-auto">
      <div className="flex items-start justify-between">
        <Image src={PizzaMakerIllustration} alt="Ilustração de pizzaiolo" />

        <div className="max-w-[580px] flex flex-col items-start gap-8">
          <h1 className="text-title text-[42px] leading-tight font-extrabold">Sobre nós</h1>

          <div className="flex flex-col gap-4">
            <p className="text-text text-xl font-alt leading-tight">
              Bem-vindo ao{' '}
              <span className="font-bold">
                <span className="text-red">Hot</span>Pizza
              </span>
              ! Aqui oferecemos as melhores pizzas de Salvador - BA e região, entregues diretamente
              na sua porta.
            </p>

            <p className="text-text text-xl font-alt leading-tight">
              Usamos ingredientes de qualidade e frescos para garantir que cada fatia seja
              deliciosa. Nossa missão é proporcionar uma experiência de pizza fácil e conveniente
              para você desfrutar no conforto da sua casa.
            </p>

            <p className="text-text text-xl font-alt leading-tight">
              Juntamente com uma variedade de sabores e opções de tamanho, assim temos a pizza
              perfeita para todas as ocasiões!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
