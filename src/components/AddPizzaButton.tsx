import { useCart } from '@/hooks/useCart';
import { Pizza } from '@/types/pizza';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';

interface AddPizzaButtonProps {
  pizza: Pizza;
  quantity: number;
  price: number;
  size: string;
}

export function AddPizzaButton({ pizza, quantity, price, size }: AddPizzaButtonProps) {
  const { addPizza } = useCart();

  function handleAddToCart() {
    const pizzaToAdd = {
      ...pizza,
      quantity,
      price,
      size,
    };

    addPizza(pizzaToAdd);

    toast.success('Pizza adicionada ao carrinho!', {
      duration: 1400,
      style: {
        background: '#FFFFFF',
        fontSize: '16px',
        fontFamily: 'unset',
      },
    });
  }

  return (
    <button
      onClick={handleAddToCart}
      className="bg-red-dark text-white text-sm font-bold uppercase p-1 rounded-full hover:bg-red transition-colors absolute -top-2 -right-2"
    >
      <Plus size={22} />
    </button>
  );
}
