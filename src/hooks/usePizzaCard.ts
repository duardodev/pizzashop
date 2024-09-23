import { useMemo, useState } from 'react';
import { formatCurrency } from '@/utils/format-currency';
import { Pizza } from '@/types/pizza';
import { sizes } from '@/lib/data';

interface usePizzaCardProps {
  pizza: Pizza;
}

export const usePizzaCard = ({ pizza }: usePizzaCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(sizes[1]);
  const [price, setPrice] = useState(pizza.mediumPrice);
  const formattedPrice = useMemo(() => formatCurrency(price), [price]);

  function handleIncrease() {
    setQuantity(state => state + 1);
  }

  function handleDecrease() {
    setQuantity(state => state - 1);
  }

  function handleSizeChange(selectedSize: string) {
    let pizzaPrice = 0;

    switch (selectedSize) {
      case sizes[0]:
        pizzaPrice = pizza.maximumPrice;
        break;
      case sizes[1]:
        pizzaPrice = pizza.mediumPrice;
        break;
      case sizes[2]:
        pizzaPrice = pizza.minimumPrice;
        break;
      default:
        pizzaPrice = pizza.mediumPrice;
    }

    setSize(selectedSize);
    setPrice(pizzaPrice);
  }

  return {
    quantity,
    formattedPrice,
    size,
    price,
    handleIncrease,
    handleDecrease,
    handleSizeChange,
  };
};
