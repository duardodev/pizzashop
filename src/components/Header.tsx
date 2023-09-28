'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { MdArrowBack, MdShoppingCart } from 'react-icons/md';
import logoImg from '../../public/logo.svg';
import { useCart } from '@/hooks/useCart';

export function Header() {
  const { cartQuantity } = useCart();
  const pathname = usePathname();

  return (
    <header className="h-[90px] w-full bg-backgroud border-b border-red-border sticky top-0 left-0 z-10">
      {pathname === '/' ? (
        <div className="h-[90px] max-w-[1120px] mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src={logoImg} height={22} alt="Logo do HotPizza" />
          </Link>

          <div className="flex justify-center items-center gap-14">
            <nav className="flex gap-9">
              <Link href="/" className="text-title text-lg hover:text-red transition-colors">
                Início
              </Link>
              <Link href="#aboutus" className="text-title text-lg hover:text-red transition-colors">
                Sobre
              </Link>
              <Link href="#menu" className="text-title text-lg hover:text-red transition-colors">
                Cardápio
              </Link>
            </nav>

            <Link
              href="/checkout"
              className="h-8 w-8 bg-orange-light p-2 rounded-md hover:opacity-75 transition-opacity flex items-center justify-center relative"
            >
              {cartQuantity >= 1 && (
                <span className="h-[18px] w-[18px] bg-orange text-white text-xs font-bold  rounded-full absolute -top-2 -right-[8.345px] flex items-center justify-center">
                  {cartQuantity}
                </span>
              )}
              <MdShoppingCart size={24} className="text-orange" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="h-[90px] max-w-[1120px] mx-auto flex items-center justify-between">
          <Link href="/">
            <MdArrowBack size={22} className="text-title" />
          </Link>

          <Link href="/">
            <Image src={logoImg} height={22} alt="Logo do HotPizza" />
          </Link>

          <Link
            href="/checkout"
            className="h-8 w-8 bg-orange-light p-2 rounded-md hover:opacity-75 transition-opacity flex items-center justify-center relative"
          >
            {cartQuantity >= 1 && (
              <span className="h-[18px] w-[18px] bg-orange text-white text-xs font-bold rounded-full absolute -top-2 -right-[8.345px] flex items-center justify-center">
                {cartQuantity}
              </span>
            )}
            <MdShoppingCart size={24} className="text-orange" />
          </Link>
        </div>
      )}
    </header>
  );
}
