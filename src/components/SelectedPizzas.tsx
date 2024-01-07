'use client';

import { useCart } from '@/hooks/useCart';
import { SelectedPizza } from './SelectedPizza';
import Modal from './Modal';

import { ImSpinner8 } from 'react-icons/im';

const deliveryPrice = 8;

interface SelectedPizzasProps {
  modalIsVisible: boolean;
  isLoading: boolean;
}

export function SelectedPizzas({ modalIsVisible, isLoading }: SelectedPizzasProps) {
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
    <div className="w-[620px] lg:w-[420px] flex flex-col items-start gap-3">
      <h1 className="text-title text-xl font-extrabold">Resumo do pedido</h1>

      <div className="w-full bg-card rounded-lg mx-auto p-7 flex flex-col gap-6">
        {cartItems.map(item => {
          return <SelectedPizza key={item.slug} pizza={item} />;
        })}

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

        {isLoading ? (
          <button
            type="submit"
            disabled={cartQuantity <= 0}
            className="h-11 bg-red text-white text-sm font-bold uppercase rounded-md py-3 px-2 flex items-center justify-center enabled:hover:bg-red-dark transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <ImSpinner8 size={18} className="animate-spin" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={cartQuantity <= 0}
            className="h-11 bg-red text-white text-sm font-bold uppercase rounded-md py-3 px-2 enabled:hover:bg-red-dark transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Finalizar pedido
          </button>
        )}

        {modalIsVisible ? <Modal /> : ''}
      </div>
    </div>
  );
}
