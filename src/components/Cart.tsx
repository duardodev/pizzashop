'use client';

import { MdShoppingCart } from 'react-icons/md';
import { SelectedPizzas } from './SelectedPizzas';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useCart } from '@/hooks/useCart';

export function Cart() {
  const { cartQuantity } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="h-9 w-9 bg-orange-light p-2 rounded-lg hover:opacity-75 transition-opacity flex items-center justify-center relative">
          {cartQuantity >= 1 && (
            <span className="h-5 w-5 bg-orange text-white text-xs font-bold  rounded-full absolute -top-2 -right-[8.345px] flex items-center justify-center">
              {cartQuantity}
            </span>
          )}

          <MdShoppingCart size={24} className="text-orange" />
        </button>
      </SheetTrigger>
      <SheetContent className="w-full min-[400px]:w-[360px] lg:w-[460px] lg:max-w-[460px]">
        <SelectedPizzas />
      </SheetContent>
    </Sheet>
  );
}
