import { Metadata } from 'next';
import { Intro } from '@/components/Intro';
import { Divider } from '@/components/Divider';
import { AboutUs } from '@/components/AboutUs';
import { Menu } from '@/components/Menu';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Home | PizzaShop',
};

export default function Home() {
  return (
    <>
      <Intro />
      <Divider gradientTo="left" />
      <AboutUs />
      <Divider gradientTo="right" />
      <Menu />
      <Footer />
    </>
  );
}
