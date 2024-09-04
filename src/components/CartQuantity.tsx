import { useCart } from '@/hooks/useCart';

export function CartQuantity() {
  const { cartQuantity } = useCart();

  return (
    <span className="h-5 w-5 bg-orange text-white text-xs font-bold  rounded-full absolute -top-2 -right-[8.345px] flex items-center justify-center">
      {cartQuantity}
    </span>
  );
}
