import Link from 'next/link';
import Image from 'next/image';
import alternativeLogoImg from '../../public/alternative-logo.svg';

export function Footer() {
  return (
    <footer className="h-auto w-full bg-red">
      <div className="h-auto max-w-[1120px] mx-auto px-5 py-6 flex items-center flex-wrap justify-between gap-16">
        <Link href="/">
          <Image src={alternativeLogoImg} height={24} alt="Logotipo alternativo do PizzaShop" />
        </Link>

        <p className="text-red-light ">©2023 PizzaShop. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
