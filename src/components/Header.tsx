'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { MdArrowBack } from 'react-icons/md';
import { FiMenu, FiX } from 'react-icons/fi';
import { Cart } from './Cart';
import { links } from '@/lib/data';
import logoImg from '../../public/logo.svg';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="h-[90px] w-full bg-background border-b border-red-border fixed top-0 left-0 z-10">
      {pathname === '/' ? (
        <div className="h-[90px] max-w-[1120px] mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <Image src={logoImg} priority width={130} height={23.39} alt="Logo do PizzaShop" className="w-[130px] h-auto" />
          </Link>

          <div className="flex justify-center items-center gap-14">
            <nav>
              <ul className="hidden md:flex gap-9">
                {links.map(link => {
                  return (
                    <li key={link.hash}>
                      <Link href={link.hash} className="text-title text-lg hover:text-red transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {isOpen && (
              <nav className="h-[calc(100vh-90px)] md:hidden w-full bg-background absolute top-[90px] left-0 right-0 transition">
                <ul className="h-[calc(100vh-90px)] flex flex-col items-center justify-center gap-16">
                  {links.map(link => {
                    return (
                      <li key={link.hash}>
                        <Link href={link.hash} className="text-title text-lg hover:text-red transition-colors">
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            )}
          </div>

          <div className="flex gap-4">
            <button
              onClick={toggleNavbar}
              className="h-9 w-9 bg-orange-light p-2 rounded-lg hover:opacity-75 transition-opacity flex items-center justify-center md:hidden"
            >
              {isOpen ? <FiX size={24} className="text-orange" /> : <FiMenu size={24} className="text-orange" />}
            </button>

            <Cart />
          </div>
        </div>
      ) : (
        <div className="h-[90px] max-w-[1120px] mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <MdArrowBack size={22} className="text-title" />
          </Link>

          <Link href="/">
            <Image src={logoImg} height={24} alt="Logo do PizzaShop" />
          </Link>

          <Cart />
        </div>
      )}
    </header>
  );
}
