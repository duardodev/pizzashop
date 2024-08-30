'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { SelectedPizza } from './SelectedPizza';
import { useCart } from '@/hooks/useCart';
import { formatCurrency } from '@/utils/format-currency';

export function SelectedPizzas() {
  const { pizzasFromTheCart, totalOfPizzasInTheCart, cartQuantity } = useCart();
  const cartTotal = 8.5 + totalOfPizzasInTheCart;
  const formattedDeliveryPrice = formatCurrency(8.5);
  const formattedItemsTotal = useMemo(() => formatCurrency(totalOfPizzasInTheCart), [totalOfPizzasInTheCart]);
  const formattedCartTotal = useMemo(() => formatCurrency(cartTotal), [cartTotal]);

  return (
    <>
      {cartQuantity >= 1 ? (
        <div className="w-full h-[90%] flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-8">
            <div className="max-h-[380px] overflow-y-auto space-y-8">
              {pizzasFromTheCart.map(item => {
                return <SelectedPizza key={item.slug} pizza={item} />;
              })}
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p>Entrega</p>
                <p className="text-sm">R$ {formattedDeliveryPrice}</p>
              </div>

              <div className="flex items-center justify-between">
                <p>Subtotal</p>
                <p className="text-sm">R$ {formattedItemsTotal}</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-lg font-bold">Total</p>
                <p className="font-bold">R$ {formattedCartTotal}</p>
              </div>
            </div>
          </div>
          <Link
            href="/checkout"
            aria-label="Confirmar pedido"
            className="h-11 bg-red text-white text-sm font-bold uppercase rounded-md py-3 px-2 flex items-center justify-center hover:bg-red-dark transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Confirmar pedido
          </Link>
        </div>
      ) : (
        <p className="text-center">Nenhuma pizza selecionada.</p>
      )}
    </>
  );
}
