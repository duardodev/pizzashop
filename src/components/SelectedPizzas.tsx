'use client';

import { useCart } from '@/hooks/useCart';
import { SelectedPizza } from './SelectedPizza';

const deliveryPrice = 8;

export function SelectedPizzas() {
  const { cartItems, cartItemsTotal, cartQuantity } = useCart();
  const cartTotal = deliveryPrice + cartItemsTotal;

  const formattedDeliveryPrice = deliveryPrice.toLocaleString('pt-BR', {
    minimumFractionDigits: 2
  });

  const formattedItemsTotal = cartItemsTotal.toLocaleString('pt-BR', {
    minimumFractionDigits: 2
  });

  const formattedCartTotal = cartTotal.toLocaleString('pt-BR', {
    minimumFractionDigits: 2
  });

  return (
    <div className="w-[480px] flex flex-col items-start gap-3">
      <h1 className="text-title text-lg font-extrabold">Pizzas selecionadas</h1>

      <div className="w-full bg-card rounded-lg p-8 flex flex-col gap-6">
        {cartItems.map(item => {
          return <SelectedPizza key={item.slug} pizza={item} />;
        })}

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-sm">Entrega</p>
            <p className="text-sm">R$ {formattedDeliveryPrice}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm">Total de itens</p>
            <p className="text-sm">R$ {formattedItemsTotal}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="font-bold">Total</p>
            <p className="font-bold">R$ {formattedCartTotal}</p>
          </div>
        </div>

        <button
          type="submit"
          disabled={cartQuantity <= 0}
          className="h-11 bg-red text-white text-sm font-bold uppercase rounded-md py-3 px-2 enabled:hover:bg-red-dark transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          Confirmar pedido
        </button>
      </div>
    </div>
  );
}
