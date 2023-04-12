import { Logo } from './Logo';

import Image from 'next/image';
import Link from 'next/link';

import ShoppingCartIcon from '../../public/icons/shopping-cart.svg';

export function Header() {
  return (
    <header className="h-[100px] border-b border-red-border">
      <div className="h-[100px] max-w-[1120px] mx-auto flex items-center justify-between">
        <Logo />

        <nav className="flex gap-8">
          <Link href="" className="text-subtitle text-xl hover:text-red transition-colors">
            Início
          </Link>
          <Link href="" className="text-subtitle text-xl hover:text-red transition-colors">
            Sobre
          </Link>
          <Link href="" className="text-subtitle text-xl hover:text-red transition-colors">
            Cardápio
          </Link>
        </nav>

        <button className="h-38 w-38 bg-orange-light p-2 rounded-md hover:opacity-75 transition-opacity">
          <Image src={ShoppingCartIcon} alt="Ícone de carrinho de compras" />
        </button>
      </div>
    </header>
  );
}
