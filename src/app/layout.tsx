import { Header } from '@/components/Header';
import { CartProvider } from '@/contexts/CartContext';
import { Roboto_Flex as Roboto } from 'next/font/google';

import './globals.css';

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  preload: true
});

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | HotPizza',
    default: 'HotPizza'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto.className} bg-background text-text`}>
        <CartProvider>
          <Header />

          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
