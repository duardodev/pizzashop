'use client';

import { useCart } from '@/hooks/useCart';
import { SelectedPizza } from './SelectedPizza';
import Link from 'next/link';

const deliveryPrice = 8;

export function SelectedPizzas() {
  const { cartItems, cartItemsTotal, cartQuantity } = useCart();
  const cartTotal = deliveryPrice + cartItemsTotal;

  const formattedDeliveryPrice = deliveryPrice.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });

  const formattedItemsTotal = cartItemsTotal.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });

  const formattedCartTotal = cartTotal.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });

  return (
    <div className="w-full h-full flex flex-col justify-between gap-10">
      <div className="flex flex-col gap-8">
        <h1 className="text-title text-xl font-extrabold">Pizzas selecionadas</h1>

        {cartQuantity >= 1 ? (
          <>
            <div className="max-h-[380px] overflow-y-auto space-y-8">
              {cartItems.map(item => {
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
          </>
        ) : (
          <p className="text-center">Nenhuma pizza selecionada.</p>
        )}
      </div>

      {cartQuantity >= 1 && (
        <Link
          href="/checkout"
          className="h-11 bg-red text-white text-sm font-bold uppercase rounded-md py-3 px-2 flex items-center justify-center hover:bg-red-dark transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          Confirmar perdido
        </Link>
      )}
    </div>
  );
}
