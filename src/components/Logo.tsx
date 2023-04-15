import Image from 'next/image';
import Link from 'next/link';
import PizzaIcon from '../../public/icons/pizza.svg';

export function Logo() {
  return (
    <Link href="/" className="flex gap-2">
      <Image src={PizzaIcon} alt="Ícone de pizza" />

      <h1 className="text-red text-3xl font-extrabold">
        Hot<span className="text-subtitle">Pizza</span>
      </h1>
    </Link>
  );
}
