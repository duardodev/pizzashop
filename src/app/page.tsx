import { Intro } from '@/components/Intro';
import { Divider } from '@/components/Divider';
import { AboutUs } from '@/components/AboutUs';
import { Menu } from '@/components/Menu';

import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query';
import { Pizza } from '@/types/pizza';
import { Footer } from '@/components/Footer';

interface PizzasData {
  pizzas: Pizza[];
}

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
