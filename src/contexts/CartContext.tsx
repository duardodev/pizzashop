'use client';

import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { ActionTypes, cartReducer } from '@/reducers/cart';
import { Pizza } from '@/types/pizza';

export interface PizzaFromTheCart extends Pizza {
  quantity: number;
  price: number;
  size: string;
}

interface CartContextType {
  pizzasFromTheCart: PizzaFromTheCart[];
  cartQuantity: number;
  totalOfPizzasInTheCart: number;
  addPizza: (pizza: PizzaFromTheCart) => void;
  removePizza: (pizzaFromTheCartSlug: string, size: string) => void;
  changePizzaQuantity: (pizzaFromTheCartSlug: string, type: 'increase' | 'decrease', size: string) => void;
  changePizzaSize: (pizzaFromTheCartSlug: string, size: string) => void;
  cleanCart: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: CartProviderProps) {
  const [pizzasFromTheCart, dispatch] = useReducer(cartReducer, [], () => {
    if (typeof window !== 'undefined') {
      const storedPizzas = localStorage.getItem('pizzashop:pizzasFromTheCart');
      return storedPizzas ? JSON.parse(storedPizzas) : [];
    }

    return [];
  });

  const cartQuantity = pizzasFromTheCart.length;
  const totalOfPizzasInTheCart = pizzasFromTheCart.reduce((total, pizzaFromTheCart) => {
    return total + pizzaFromTheCart.price * pizzaFromTheCart.quantity;
  }, 0);

  function addPizza(pizza: PizzaFromTheCart) {
    dispatch({ type: ActionTypes.ADD_PIZZA, payload: pizza });
  }

  function changePizzaQuantity(slug: string, type: 'increase' | 'decrease', size: string) {
    dispatch({ type: ActionTypes.CHANGE_QUANTITY, payload: { slug, type, size } });
  }

  function removePizza(slug: string, size: string) {
    dispatch({ type: ActionTypes.REMOVE_PIZZA, payload: { slug, size } });
  }

  function changePizzaSize(slug: string, size: string) {
    dispatch({ type: ActionTypes.CHANGE_SIZE, payload: { slug, size } });
  }

  function cleanCart() {
    dispatch({ type: ActionTypes.CLEAN_CART });
  }

  useEffect(() => {
    localStorage.setItem('pizzashop:pizzasFromTheCart', JSON.stringify(pizzasFromTheCart));
  }, [pizzasFromTheCart]);

  return (
    <CartContext.Provider
      value={{
        pizzasFromTheCart,
        cartQuantity,
        totalOfPizzasInTheCart,
        addPizza,
        changePizzaQuantity,
        removePizza,
        changePizzaSize,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
