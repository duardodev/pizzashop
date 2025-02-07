import { PizzaFromTheCart } from '@/contexts/CartContext';
import { produce } from 'immer';

export enum ActionTypes {
  ADD_PIZZA = 'ADD_PIZZA',
  CHANGE_QUANTITY = 'CHANGE_QUANTITY',
  CHANGE_SIZE = 'CHANGE_SIZE',
  REMOVE_PIZZA = 'REMOVE_PIZZA',
  CLEAN_CART = 'CLEAN_CART',
}

type Action =
  | { type: ActionTypes.ADD_PIZZA; payload: PizzaFromTheCart }
  | { type: ActionTypes.CHANGE_QUANTITY; payload: { slug: string; type: 'increase' | 'decrease'; size: string } }
  | { type: ActionTypes.CHANGE_SIZE; payload: { slug: string; size: string } }
  | { type: ActionTypes.REMOVE_PIZZA; payload: { slug: string; size: string } }
  | { type: ActionTypes.CLEAN_CART };

export function cartReducer(state: PizzaFromTheCart[], action: Action) {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.ADD_PIZZA: {
        const pizzaExistsInCart = state.findIndex(
          pizzaFromTheCart =>
            pizzaFromTheCart.slug === action.payload.slug && pizzaFromTheCart.size === action.payload.size
        );

        if (pizzaExistsInCart >= 0) {
          draft[pizzaExistsInCart].quantity += action.payload.quantity;
        } else {
          draft.push(action.payload);
        }

        break;
      }
      case ActionTypes.CHANGE_QUANTITY: {
        const pizzaExistsInCart = state.findIndex(
          pizzaFromTheCart =>
            pizzaFromTheCart.slug === action.payload.slug && pizzaFromTheCart.size === action.payload.size
        );

        if (pizzaExistsInCart >= 0) {
          const pizza = state[pizzaExistsInCart];

          draft[pizzaExistsInCart].quantity =
            action.payload.type === 'increase' ? pizza.quantity + 1 : pizza.quantity - 1;
        }

        break;
      }
      case ActionTypes.CHANGE_SIZE: {
        const pizzaExistsInCart = state.findIndex(
          pizzaFromTheCart =>
            pizzaFromTheCart.slug === action.payload.slug && pizzaFromTheCart.size === action.payload.size
        );

        if (pizzaExistsInCart >= 0) {
          const pizza = draft[pizzaExistsInCart];

          pizza.size = action.payload.size;

          switch (pizza.size) {
            case 'Grande':
              pizza.price = pizza.maximumPrice;
              break;
            case 'Média':
              pizza.price = pizza.mediumPrice;
              break;
            case 'Pequena':
              pizza.price = pizza.minimumPrice;
              break;
          }
        }

        break;
      }
      case ActionTypes.REMOVE_PIZZA: {
        const pizzaExistsInCart = state.findIndex(
          pizzaFromTheCart =>
            pizzaFromTheCart.slug === action.payload.slug && pizzaFromTheCart.size === pizzaFromTheCart.size
        );

        if (pizzaExistsInCart >= 0) {
          draft.splice(pizzaExistsInCart, 1);
        }

        break;
      }
      case ActionTypes.CLEAN_CART: {
        return [];
      }
      default:
        return state;
    }
  });
}
