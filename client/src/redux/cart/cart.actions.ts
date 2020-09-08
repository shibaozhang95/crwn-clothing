import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FORM_CART,
  CLEAR_CART,
  CartActionTypes,
  Item
} from './cart.types';

export const toggleCartHidden = (): CartActionTypes => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItem = (item: Item): CartActionTypes => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItem = (item: Item): CartActionTypes => ({
  type: REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = (item: Item): CartActionTypes => ({
  type: CLEAR_ITEM_FORM_CART,
  payload: item
}); 

export const clearCart = (): CartActionTypes => ({
  type: CLEAR_CART
});