'use client';

import { usePricingDetails } from '@/hooks/usePricingDetails';

export function PricingDetails() {
  const { formattedDeliveryPrice, totalFormattedPriceOfPizzas, totalFormattedPrice } =
    usePricingDetails();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p>Entrega</p>
        <p className="text-sm">R$ {formattedDeliveryPrice}</p>
      </div>

      <div className="flex items-center justify-between">
        <p>Subtotal</p>
        <p className="text-sm">R$ {totalFormattedPriceOfPizzas}</p>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-lg font-bold">Total</p>
        <p className="font-bold">R$ {totalFormattedPrice}</p>
      </div>
    </div>
  );
}
