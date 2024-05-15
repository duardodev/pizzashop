'use client';

import { Pizza } from '@/types/pizza';
import { PizzaCard } from './PizzaCard';
import { motion } from 'framer-motion';

interface MenuProps {
  pizzas: Pizza[];
}

export function Menu({ pizzas }: MenuProps) {
  return (
    <section id="menu" className="max-w-[1120px] mx-auto px-5 py-28 scroll-mt-16">
      <div className="flex flex-col items-center gap-24">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{
            once: true,
          }}
          className="text-title text-[32px] font-extrabold leading-tight"
        >
          Cardápio
        </motion.h2>

        <div className="flex flex-wrap justify-center min-[1075px]:justify-between gap-x-12 gap-y-20">
          {pizzas.map((pizza, i) => {
            return (
              <motion.div
                key={pizza.slug}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.25, ease: 'easeInOut' }}
                viewport={{
                  once: true,
                }}
              >
                <PizzaCard pizza={pizza} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
