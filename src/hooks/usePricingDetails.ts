import { formatCurrency } from '@/utils/format-currency';
import { useMemo } from 'react';
import { useCart } from './useCart';

export const usePricingDetails = () => {
  const { totalOfPizzasInTheCart } = useCart();
  const deliveryPrice = 8.5;
  const cartTotal = deliveryPrice + totalOfPizzasInTheCart;
  const formattedDeliveryPrice = formatCurrency(deliveryPrice);

  const totalFormattedPriceOfPizzas = useMemo(
    () => formatCurrency(totalOfPizzasInTheCart),
    [totalOfPizzasInTheCart]
  );
  const totalFormattedPrice = useMemo(() => formatCurrency(cartTotal), [cartTotal]);

  return { formattedDeliveryPrice, totalFormattedPriceOfPizzas, totalFormattedPrice };
};
