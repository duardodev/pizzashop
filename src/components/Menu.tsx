'use client';

import { Pizza } from '@/types/pizza';
import { PizzaCard } from './PizzaCard';
import { useState } from 'react';
import { Input } from './Input';
import { Search } from 'lucide-react';

interface MenuProps {
  pizzas: Pizza[];
}

export function Menu({ pizzas }: MenuProps) {
  const [searchName, setSearchName] = useState('');

  const filteredPizzas = pizzas.filter(pizza =>
    pizza.title.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <section id="menu" className="max-w-[1120px] mx-auto px-5 py-28 scroll-mt-16">
      <div className="flex flex-col items-center">
        <h2 className="text-title text-[32px] font-extrabold leading-tight">Cardápio</h2>

        <div className="mt-10 w-full max-w-md mb-8 relative">
          <input
            type="text"
            placeholder="Filtrar pizzas pelo nome..."
            aria-label="Filtrar pizzas"
            className="h-10 w-full p-4 pr-10 bg-transparent placeholder:text-gray-500 rounded-md border border-solid border-gray-300 leading-tight focus:outline-none focus:border-red"
            value={searchName}
            onChange={event => setSearchName(event.target.value)}
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="mt-14 flex flex-wrap justify-center min-[1075px]:justify-between gap-x-12 gap-y-20">
          {filteredPizzas.map(pizza => {
            return <PizzaCard key={pizza.slug} pizza={pizza} />;
          })}
        </div>

        {filteredPizzas.length === 0 && (
          <p className="text-center text-gray-500">Nenhuma pizza encontrada com esse nome.</p>
        )}
      </div>
    </section>
  );
}
