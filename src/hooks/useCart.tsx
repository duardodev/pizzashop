import { CartContext } from '@/contexts/CartContext';
import { useContext } from 'react';

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
