import { Item } from '../../models/item';
import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FORM_CART,
  CLEAR_CART,
  ToggleCartHiddenAction,
  AddItemAction,
  RemoveItemAction,
  ClearItemFromCartAction,
  ClearCartAction,
  CartItem
} from './cart.types';

export const toggleCartHidden = (): ToggleCartHiddenAction => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItem = (item: Item): AddItemAction => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItem = (item: Item): RemoveItemAction => ({
  type: REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = (item: Item): ClearItemFromCartAction => ({
  type: CLEAR_ITEM_FORM_CART,
  payload: item
}); 

export const clearCart = (): ClearCartAction => ({
  type: CLEAR_CART
});