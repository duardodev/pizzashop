import { Logo } from './Logo';
import { MdShoppingCart } from 'react-icons/md';

import Link from 'next/link';

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

        <button className="h-10 w-10 bg-orange-light p-2 rounded-md hover:opacity-75 transition-opacity flex items-center justify-center">
          <MdShoppingCart size={24} className="text-orange" />
        </button>
      </div>
    </header>
  );
}
