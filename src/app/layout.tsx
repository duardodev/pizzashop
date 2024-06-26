import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { CartProvider } from '@/contexts/CartContext';
import { Toaster } from 'sonner';

import NextTopLoader from 'nextjs-toploader';
import { Roboto_Flex as Roboto } from 'next/font/google';

import './globals.css';

const roboto = Roboto({
  weight: ['500', '700', '900'],
  subsets: ['latin'],
  preload: true,
});

export const metadata: Metadata = {
  title: {
    template: '%s | PizzaShop',
    default: 'PizzaShop',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <body className={`${roboto.className} bg-background text-text`}>
        <NextTopLoader
          color="#EF4444"
          initialPosition={0.08}
          crawlSpeed={200}
          showSpinner={false}
          height={3}
          speed={200}
          shadow="0 0 10px #EF4444,0 0 5px #EF4444"
        />

        <CartProvider>
          <Header />
          <main>{children}</main>
          <Toaster position="top-center" richColors />
        </CartProvider>
      </body>
    </html>
  );
}
