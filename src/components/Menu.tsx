import { Pizza } from '@/types/pizza';
import { PizzaCard } from './PizzaCard';

interface MenuProps {
  pizzas: Pizza[];
}

export function Menu({ pizzas }: MenuProps) {
  return (
    <section id="menu" className="max-w-[1120px] mx-auto px-5 py-24 scroll-mt-16">
      <div className="flex flex-col items-center gap-20">
        <h1 className="text-title text-[32px] font-extrabold leading-tight">Cardápio</h1>

        <div className="flex flex-wrap justify-center min-[1075px]:justify-between gap-x-12 gap-y-20">
          {pizzas.map(pizza => {
            return <PizzaCard key={pizza.slug} pizza={pizza} />;
          })}
        </div>
      </div>
    </section>
  );
}
