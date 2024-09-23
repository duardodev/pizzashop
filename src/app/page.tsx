import { Metadata } from 'next';
import { Intro } from '@/components/Intro';
import { Divider } from '@/components/Divider';
import { AboutUs } from '@/components/AboutUs';
import { Menu } from '@/components/Menu';
import { Footer } from '@/components/Footer';
import { useFetchPizzas } from '@/hooks/useFetchPizzas';

export const metadata: Metadata = {
  title: 'Home | PizzaShop',
};

export default async function Home() {
  const pizzasData = await useFetchPizzas();

  return (
    <>
      <Intro />
      <Divider gradientTo="left" />
      <AboutUs />
      <Divider gradientTo="right" />
      <Menu pizzas={pizzasData} />
      <Footer />
    </>
  );
}
