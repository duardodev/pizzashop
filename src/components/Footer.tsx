import Link from 'next/link';
import Image from 'next/image';
import alternativeLogoImg from '../../public/alternative-logo.svg';

export function Footer() {
  return (
    <footer className="h-auto w-full bg-red">
      <div className="h-auto max-w-[1120px] mx-auto px-5 py-6 flex items-center justify-center min-[586px]:justify-between flex-wrap gap-x-16 gap-4">
        <Link href="/">
          <Image
            src={alternativeLogoImg}
            width={130}
            height={23.39}
            alt="Logo alternativa do PizzaShop"
            className="w-[130px] h-auto"
          />
        </Link>

        <p className="text-center text-red-light">©2023 PizzaShop. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
