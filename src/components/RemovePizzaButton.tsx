import { useCart } from '@/hooks/useCart';
import { HiOutlineTrash } from 'react-icons/hi';

interface RemovePizzaButton {
  slug: string;
  title: string;
  size: string;
}

export function RemovePizzaButton({ slug, title, size }: RemovePizzaButton) {
  const { removePizza } = useCart();

  function handleRemove() {
    removePizza(slug, size);
  }

  return (
    <button type="button" aria-label={`Remover pizza de ${title}`} onClick={handleRemove}>
      <HiOutlineTrash size={18} className="text-red hover:text-red/70 transition-colors" />
    </button>
  );
}
