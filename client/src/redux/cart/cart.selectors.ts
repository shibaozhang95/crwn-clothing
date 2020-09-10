import { createSelector } from 'reselect';
import { RootState } from '../root-reducer';

import { CartItem, CartState } from './cart.types';

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector<RootState, CartState, CartItem[]>(
  [selectCart],
  (cart): CartItem[] => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumalatedQuantity: number, cartItem: CartItem) => accumalatedQuantity + cartItem.quantity
    , 0
  )
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumalatedQuantity: number, cartItem: CartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price
    , 0
  )
)