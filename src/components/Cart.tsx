'use client';

import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { SelectedPizzasList } from './SelectedPizzasList';
import { useCart } from '@/hooks/useCart';
import { MdShoppingCart } from 'react-icons/md';

export function Cart() {
  const { cartQuantity } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="h-9 w-9 bg-orange-light p-2 rounded-lg hover:opacity-75 transition-opacity flex items-center justify-center relative">
          <MdShoppingCart size={24} className="text-orange" />

          {cartQuantity >= 1 && (
            <span className="h-5 w-5 bg-orange text-white text-xs font-bold  rounded-full absolute -top-2 -right-[8.345px] flex items-center justify-center">
              {cartQuantity}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full min-[400px]:w-[360px] lg:w-[460px] lg:max-w-[460px]">
        <SheetHeader>
          <SheetTitle>Pizzas selecionadas</SheetTitle>
          <SheetDescription />
        </SheetHeader>

        {cartQuantity >= 1 ? (
          <div className="w-full h-[90%] flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-8">
              <SelectedPizzasList />
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
      </SheetContent>
    </Sheet>
  );
}
