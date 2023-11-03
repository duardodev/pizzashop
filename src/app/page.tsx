import { Intro } from '@/components/Intro';
import { Divider } from '@/components/Divider';
import { AboutUs } from '@/components/AboutUs';
import { Menu } from '@/components/Menu';
import { Footer } from '@/components/Footer';

import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query';
import { Pizza } from '@/types/pizza';

interface PizzasData {
  pizzas: Pizza[];
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | HotPizza'
};

export default async function Home() {
  const getPizzasData = async (): Promise<PizzasData> => {
    const query = `
      query PizzasQuery {
        pizzas {
          title
          description
          slug
          minimumPrice
          mediumPrice
          maximumPrice
          image {
            url
          }
        }
      } 
    `;

    return fetchHygraphQuery(query);
  };

  const { pizzas } = await getPizzasData();

  return (
    <>
      <Intro />

      <Divider gradientTo="left" />

      <AboutUs />

      <Divider gradientTo="right" />

      <Menu pizzas={pizzas} />

      <Footer />
    </>
  );
}
