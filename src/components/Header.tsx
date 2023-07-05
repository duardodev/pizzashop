'use client';

import { Logo } from './Logo';
import { MdShoppingCart } from 'react-icons/md';

import Link from 'next/link';

export function Header() {
  return (
    <header className="h-[90px] w-full bg-backgroud border-b border-red-border sticky top-0 left-0 z-10">
      <div className="h-[90px] max-w-[1120px] mx-auto flex items-center justify-between">
        <Logo />

        <div className="flex justify-center items-center gap-14">
          <nav className="flex gap-9">
            <Link href="/" className="text-title text-lg font-alt hover:text-red transition-colors">
              Início
            </Link>
            <Link
              href="#aboutus"
              className="text-title text-lg font-alt hover:text-red transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#menu"
              className="text-title text-lg font-alt hover:text-red transition-colors"
            >
              Cardápio
            </Link>
          </nav>

          <button className="h-9 w-9 bg-orange-light p-2 rounded-md hover:opacity-75 transition-opacity flex items-center justify-center">
            <MdShoppingCart size={24} className="text-orange" />
          </button>
        </div>
      </div>
    </header>
  );
}
