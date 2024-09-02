import { useState } from 'react';
import { Pizza } from '@/types/pizza';
import { usePizzaPricing } from './usePizzaPricing';

interface usePizzaCardProps {
  pizza: Pizza;
}

export const usePizzaCard = ({ pizza }: usePizzaCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { size, price, formattedPrice, handleSizeChange } = usePizzaPricing({
    maximumPrice: pizza.maximumPrice,
    mediumPrice: pizza.mediumPrice,
    minimumPrice: pizza.minimumPrice,
  });

  function handleIncrease() {
    setQuantity(state => state + 1);
  }

  function handleDecrease() {
    setQuantity(state => state - 1);
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
