import { useState } from 'react';
import { useCart } from './useCart';
import { Pizza } from '@/types/pizza';
import { toast } from 'sonner';
import { usePizzaPricing } from './usePizzaPricing';

interface usePizzaCardProps {
  pizza: Pizza;
}

export const usePizzaCard = ({ pizza }: usePizzaCardProps) => {
  const { addPizza } = useCart();
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

  function handleAddToCart() {
    toast.success('Pizza adicionada ao carrinho!', {
      duration: 1400,
      style: {
        background: '#FFFFFF',
        fontSize: '16px',
        fontFamily: 'unset',
      },
    });

    const pizzaToAdd = {
      ...pizza,
      quantity,
      price,
      size,
    };

    addPizza(pizzaToAdd);
  }

  return {
    quantity,
    formattedPrice,
    size,
    handleAddToCart,
    handleIncrease,
    handleDecrease,
    handleSizeChange,
  };
};
