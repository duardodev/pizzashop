'use client';

import Link from 'next/link';
import Image from 'next/image';
import alternativeLogoImg from '../../public/alternative-logo.svg';

import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiTiktokLine,
  RiYoutubeLine
} from 'react-icons/ri';

export function Footer() {
  return (
    <header className="h-72 w-full bg-red">
      <div className="h-72 max-w-[1120px] py-10 mx-auto flex flex-col justify-between items-stretch">
        <div className="flex justify-between items-center">
          <div className="space-y-5">
            <Link href="/">
              <Image src={alternativeLogoImg} height={24} alt="Logotipo alternativo do HotPizza" />
            </Link>

            <div>
              <p className="text-red-light font-alt">©2023 HotPizza.</p>
              <p className="text-red-light font-alt">Todos os direitos reservados.</p>
            </div>

            <div className="flex gap-6">
              <a href="/">
                <RiInstagramLine
                  size={22}
                  className="text-red-light hover:text-white transition-colors"
                />
              </a>
              <a href="/">
                <RiTiktokLine
                  size={22}
                  className="text-red-light hover:text-white transition-colors"
                />
              </a>
              <a href="/">
                <RiYoutubeLine
                  size={22}
                  className="text-red-light hover:text-white transition-colors"
                />
              </a>
              <a href="/">
                <RiFacebookCircleLine
                  size={22}
                  className="text-red-light hover:text-white transition-colors"
                />
              </a>
            </div>
          </div>

          <div className="space-y-7">
            <div className="flex items-center gap-3">
              <RiPhoneLine size={22} className="text-red-light" />
              <p className="text-red-light font-alt">75 9876-5432</p>
            </div>
            <div className="flex items-center gap-3">
              <RiMapPinLine size={22} className="text-red-light" />
              <p className="text-red-light font-alt">Salvador, Bahia</p>
            </div>
            <div className="flex items-center gap-3">
              <RiMailLine size={22} className="text-red-light" />
              <p className="text-red-light font-alt">contato@hotpizza.com</p>
            </div>
          </div>
        </div>

        <div className="self-center">
          <h2 className="text-red-light font-alt">
            Desenvolvido por{' '}
            <a
              href="https://github.com/sampaiocode"
              target="_blank"
              className="font-bold hover:text-white transition-colors"
            >
              Deivit Eduardo
            </a>
            .
          </h2>
        </div>
      </div>
    </header>
  );
}
