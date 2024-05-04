import Link from 'next/link';
import Image from 'next/image';
import alternativeLogoImg from '../../public/alternative-logo.svg';

import {
  RiInstagramLine,
  RiFacebookCircleLine,
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiTiktokLine,
} from 'react-icons/ri';

export function Footer() {
  return (
    <footer className="h-auto w-full bg-red">
      <div className="h-auto max-w-[1120px] mx-auto px-6 py-10 flex flex-col justify-between items-stretch gap-16">
        <div className="flex flex-col gap-10 min-[510px]:flex-row min-[510px]:justify-between min-[510px]:gap-4">
          <div className="flex flex-col justify-between gap-5">
            <Link href="/">
              <Image src={alternativeLogoImg} height={24} alt="Logotipo alternativo do PizzaShop" />
            </Link>

            <div>
              <p className="text-red-light ">©2023 PizzaShop.</p>
              <p className="text-red-light ">Todos os direitos reservados.</p>
            </div>

            <div className="flex gap-6">
              <a href="/">
                <RiInstagramLine
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

              <a href="/">
                <RiTiktokLine
                  size={22}
                  className="text-red-light hover:text-white transition-colors"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-5">
            <div className="flex items-center gap-3">
              <RiMailLine size={22} className="text-red-light" />
              <p className="text-red-light">contato@pizzashop.com</p>
            </div>

            <div className="flex items-center gap-3">
              <RiPhoneLine size={22} className="text-red-light" />
              <p className="text-red-light">(75) 7575-7575</p>
            </div>

            <div className="flex items-center gap-3">
              <RiMapPinLine size={22} className="text-red-light" />
              <p className="text-red-light">Salvador, Bahia</p>
            </div>
          </div>
        </div>

        <div className="self-center">
          <h2 className="text-red-light">
            Desenvolvido por{' '}
            <a
              href="https://github.com/duardodev"
              target="_blank"
              className="font-bold hover:text-white transition-colors"
            >
              Deivit Eduardo
            </a>
            .
          </h2>
        </div>
      </div>
    </footer>
  );
}
