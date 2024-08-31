import { useState, useMemo } from 'react';
import { sizes } from '@/lib/data';
import { formatCurrency } from '@/utils/format-currency';

interface usePizzaPricingProps {
  maximumPrice: number;
  mediumPrice: number;
  minimumPrice: number;
}

export const usePizzaPricing = ({
  maximumPrice,
  mediumPrice,
  minimumPrice,
}: usePizzaPricingProps) => {
  const [size, setSize] = useState(sizes[1]);
  const [price, setPrice] = useState(mediumPrice);

  const formattedPrice = useMemo(() => formatCurrency(price), [price]);

  function handleSizeChange(selectedSize: string) {
    let pizzaPrice = 0;

    switch (selectedSize) {
      case sizes[0]:
        pizzaPrice = maximumPrice;
        break;
      case sizes[1]:
        pizzaPrice = mediumPrice;
        break;
      case sizes[2]:
        pizzaPrice = minimumPrice;
        break;
      default:
        pizzaPrice = mediumPrice;
    }

    setSize(selectedSize);
    setPrice(pizzaPrice);
  }

  return { size, price, formattedPrice, handleSizeChange };
};
