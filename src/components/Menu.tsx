import { Pizza } from '@/types/pizza';
import { PizzaCard } from './PizzaCard';
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query';

interface PizzasData {
  pizzas: Pizza[];
}

export async function Menu() {
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
    <section id="menu" className="max-w-[1120px] mx-auto px-5 py-28 scroll-mt-16">
      <div className="flex flex-col items-center gap-24">
        <h2 className="text-title text-[32px] font-extrabold leading-tight">Cardápio</h2>
        <div className="flex flex-wrap justify-center min-[1075px]:justify-between gap-x-12 gap-y-20">
          {pizzas.map(pizza => {
            return <PizzaCard key={pizza.slug} pizza={pizza} />;
          })}
        </div>
      </div>
    </section>
  );
}
