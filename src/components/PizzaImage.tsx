import Image, { ImageProps } from 'next/image';

interface PizzaImageProps extends Omit<ImageProps, 'alt' | 'src'> {
  url: string;
  title: string;
}

export function PizzaImage({ url, title, ...props }: PizzaImageProps) {
  return <Image src={url} sizes="35vw" alt={`Imagem da pizza de ${title}`} {...props} />;
}
