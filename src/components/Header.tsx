'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { useCart } from '@/hooks/useCart';
import { MdArrowBack, MdShoppingCart } from 'react-icons/md';
import { FiMenu, FiX } from 'react-icons/fi';

import logoImg from '../../public/logo.svg';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartQuantity } = useCart();
  const pathname = usePathname();

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="h-[90px] w-full bg-background border-b border-red-border sticky top-0 left-0 z-10">
      {pathname === '/' ? (
        <div className="h-[90px] max-w-[1120px] mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <Image src={logoImg} height={22} alt="Logo do HotPizza" />
          </Link>

          <div className="flex justify-center items-center gap-14">
            <nav className="hidden sm:flex gap-9">
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

            {isOpen && (
              <nav className="h-[calc(100vh-90px)] w-full bg-background absolute top-[90px] left-0 right-0 sm:hidden flex flex-col items-center justify-center gap-16 transition">
                <Link
                  href="/"
                  onClick={toggleNavbar}
                  className="text-title text-xl hover:text-red transition-colors"
                >
                  Início
                </Link>
                <Link
                  href="#aboutus"
                  className="text-title text-xl hover:text-red transition-colors"
                  onClick={toggleNavbar}
                >
                  Sobre
                </Link>
                <Link
                  href="#menu"
                  onClick={toggleNavbar}
                  className="text-title text-xl hover:text-red transition-colors"
                >
                  Cardápio
                </Link>
              </nav>
            )}

            <div className="flex gap-4">
              <button
                onClick={toggleNavbar}
                className="h-9 w-9 bg-orange-light p-2 rounded-md hover:opacity-75 transition-opacity flex items-center justify-center sm:hidden"
              >
                {isOpen ? (
                  <FiX size={24} className="text-orange" />
                ) : (
                  <FiMenu size={24} className="text-orange" />
                )}
              </button>

              <Link
                href="/checkout"
                className="h-9 w-9 bg-orange-light p-2 rounded-md hover:opacity-75 transition-opacity flex items-center justify-center relative"
              >
                {cartQuantity >= 1 && (
                  <span className="h-5 w-5 bg-orange text-white text-xs font-bold  rounded-full absolute -top-2 -right-[8.345px] flex items-center justify-center">
                    {cartQuantity}
                  </span>
                )}

                <MdShoppingCart size={24} className="text-orange" />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[90px] max-w-[1120px] mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <MdArrowBack size={22} className="text-title" />
          </Link>

          <Link href="/">
            <Image src={logoImg} height={22} alt="Logo do HotPizza" />
          </Link>

          <Link
            href="/checkout"
            className="h-9 w-9 bg-orange-light p-2 rounded-md hover:opacity-75 transition-opacity flex items-center justify-center relative"
          >
            {cartQuantity >= 1 && (
              <span className="h-5 w-5 bg-orange text-white text-xs font-bold rounded-full absolute -top-2 -right-[8.345px] flex items-center justify-center">
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
