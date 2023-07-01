import Image from 'next/image';
import Link from 'next/link';
import LogoImg from '../../public/logo.svg';

export function Logo() {
  return (
    <Link href="/">
      <Image src={LogoImg} height={24} alt="Logo do HotPizza" />
    </Link>
  );
}
