import { Pizza } from '@/types/pizza';
import { PizzaCard } from './PizzaCard';

interface MenuProps {
  pizzas: Pizza[];
}

export function Menu({ pizzas }: MenuProps) {
  return (
    <section id="menu" className="max-w-[1120px] py-24 mx-auto scroll-mt-16">
      <div className="flex flex-col items-center gap-20">
        <h1 className="text-title text-4xl font-extrabold leading-tight">Cardápio</h1>

        <div className="flex flex-wrap justify-between gap-x-5 gap-y-20">
          {pizzas.map(pizza => {
            return <PizzaCard key={pizza.slug} pizza={pizza} />;
          })}
        </div>
      </div>
    </section>
  );
}
