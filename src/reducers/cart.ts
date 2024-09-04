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
  | { type: ActionTypes.CHANGE_QUANTITY; payload: { slug: string; type: 'increase' | 'decrease' } }
  | { type: ActionTypes.CHANGE_SIZE; payload: { slug: string; size: string } }
  | { type: ActionTypes.REMOVE_PIZZA; payload: string }
  | { type: ActionTypes.CLEAN_CART };

export function cartReducer(state: PizzaFromTheCart[], action: Action) {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.ADD_PIZZA: {
        const pizzaAlreadyExistsInCart = state.findIndex(
          pizzaFromTheCart => pizzaFromTheCart.slug === action.payload.slug
        );

        if (pizzaAlreadyExistsInCart < 0) {
          draft.push(action.payload);
        } else {
          draft[pizzaAlreadyExistsInCart].quantity += action.payload.quantity;
        }

        break;
      }
      case ActionTypes.CHANGE_QUANTITY: {
        const pizzaExistsInCart = state.findIndex(
          pizzaFromTheCart => pizzaFromTheCart.slug === action.payload.slug
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
          pizzaFromTheCart => pizzaFromTheCart.slug === action.payload.slug
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
          pizzaFromTheCart => pizzaFromTheCart.slug === action.payload
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
