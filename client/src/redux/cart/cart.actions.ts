import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FORM_CART,
  CLEAR_CART,
  CartActionTypes,
  CartItem
} from './cart.types';

export const toggleCartHidden = (): CartActionTypes => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItem = (item: CartItem): CartActionTypes => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItem = (item: CartItem): CartActionTypes => ({
  type: REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = (item: CartItem): CartActionTypes => ({
  type: CLEAR_ITEM_FORM_CART,
  payload: item
}); 

export const clearCart = (): CartActionTypes => ({
  type: CLEAR_CART
});