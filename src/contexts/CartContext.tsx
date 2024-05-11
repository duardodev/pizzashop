'use client';

import { createContext, ReactNode, useEffect, useState } from 'react';
import { Pizza } from '@/types/pizza';
import { produce } from 'immer';

export interface CartItem extends Pizza {
  quantity: number;
  price: number;
  size: string;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addPizzaToCart: (pizza: CartItem) => void;
  removeCartItem: (cartItemSlug: string) => void;
  changeCartItemQuantity: (cartItemSlug: string, type: 'increase' | 'decrease') => void;
  changeCartItemSize: (cartItemSlug: string, selectedSize: string) => void;
  cleanCart: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem('pizzashop:cartItems');
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });

  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function addPizzaToCart(pizza: CartItem) {
    const pizzaAlreadyExistsInCart = cartItems.findIndex(cartItem => cartItem.slug === pizza.slug);

    const newCart = produce(cartItems, draft => {
      if (pizzaAlreadyExistsInCart < 0) {
        draft.push(pizza);
      } else {
        draft[pizzaAlreadyExistsInCart].quantity += pizza.quantity;
      }
    });

    setCartItems(newCart);
  }

  function changeCartItemQuantity(cartItemSlug: string, type: 'increase' | 'decrease') {
    const newCart = produce(cartItems, draft => {
      const pizzaExistsInCart = cartItems.findIndex(cartItem => cartItem.slug === cartItemSlug);

      if (pizzaExistsInCart >= 0) {
        const item = draft[pizzaExistsInCart];

        draft[pizzaExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  function removeCartItem(cartItemSlug: string) {
    const newCart = produce(cartItems, draft => {
      const pizzaExistsInCart = cartItems.findIndex(cartItem => cartItem.slug === cartItemSlug);

      if (pizzaExistsInCart >= 0) {
        draft.splice(pizzaExistsInCart, 1);
      }
    });

    setCartItems(newCart);
  }

  function changeCartItemSize(cartItemSlug: string, selectedSize: string) {
    const newCart = produce(cartItems, draft => {
      const pizzaExistsInCart = cartItems.findIndex(cartItem => cartItem.slug === cartItemSlug);

      if (pizzaExistsInCart >= 0) {
        const item = draft[pizzaExistsInCart];

        item.size = selectedSize;

        if (selectedSize === 'Grande') {
          item.price = item.maximumPrice;
        } else if (selectedSize === 'Média') {
          item.price = item.mediumPrice;
        } else if (selectedSize === 'Pequena') {
          item.price = item.minimumPrice;
        }
      }
    });

    setCartItems(newCart);
  }

  function cleanCart() {
    setCartItems([]);
  }

  useEffect(() => {
    localStorage.setItem('pizzashop:cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addPizzaToCart,
        cartQuantity,
        changeCartItemQuantity,
        removeCartItem,
        changeCartItemSize,
        cartItemsTotal,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
