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
  removePizza: (pizzaFromTheCartSlug: string) => void;
  changePizzaQuantity: (pizzaFromTheCartSlug: string, type: 'increase' | 'decrease') => void;
  changePizzaSize: (pizzaFromTheCartSlug: string, size: string) => void;
  cleanCart: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: CartProviderProps) {
  const [pizzasFromTheCart, dispatch] = useReducer(cartReducer, []);
  const cartQuantity = pizzasFromTheCart.length;
  const totalOfPizzasInTheCart = pizzasFromTheCart.reduce((total, pizzaFromTheCart) => {
    return total + pizzaFromTheCart.price * pizzaFromTheCart.quantity;
  }, 0);

  function addPizza(pizza: PizzaFromTheCart) {
    dispatch({ type: ActionTypes.ADD_PIZZA, payload: pizza });
  }

  function changePizzaQuantity(slug: string, type: 'increase' | 'decrease') {
    dispatch({ type: ActionTypes.CHANGE_QUANTITY, payload: { slug, type } });
  }

  function removePizza(slug: string) {
    dispatch({ type: ActionTypes.REMOVE_PIZZA, payload: slug });
  }

  function changePizzaSize(slug: string, size: string) {
    dispatch({ type: ActionTypes.CHANGE_SIZE, payload: { slug, size } });
  }

  function cleanCart() {
    dispatch({ type: ActionTypes.CLEAN_CART });
  }

  useEffect(() => {
    window.localStorage.setItem('pizzashop:pizzasFromTheCart', JSON.stringify(pizzasFromTheCart));
  }, [pizzasFromTheCart]);

  useEffect(() => {
    const pizzasFromTheCartStored = window.localStorage.getItem('pizzashop:pizzasFromTheCart');

    if (pizzasFromTheCartStored) {
      dispatch({ type: ActionTypes.INITIALIZE_CART, payload: JSON.parse(pizzasFromTheCartStored) });
    }
  }, []);

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
