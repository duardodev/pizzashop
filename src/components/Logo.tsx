import { Poppins } from 'next/font/google';

import Image from 'next/image';
import Link from 'next/link';
import PizzaIcon from '../../public/icons/pizza.svg';

const poppins = Poppins({
  weight: ['700', '800'],
  subsets: ['latin']
});

export function Logo() {
  return (
    <Link href="/" className="flex gap-2">
      <Image src={PizzaIcon} alt="Ícone de pizza" />
      <h1 className={`${poppins.className} text-red text-3xl font-extrabold`}>
        Hot<span className="text-subtitle">Pizza</span>
      </h1>
    </Link>
  );
}
