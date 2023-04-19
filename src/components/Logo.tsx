import Image from 'next/image';
import Link from 'next/link';
import LogoImg from '../../public/logo.svg';

export function Logo() {
  return (
    <Link href="/">
      <Image src={LogoImg} alt="Logo do HotPizza" />
    </Link>
  );
}
