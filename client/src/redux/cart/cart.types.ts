export const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CLEAR_ITEM_FORM_CART = "CLEAR_ITEM_FORM_CART";
export const CLEAR_CART = "CLEAR_CART";

interface ToggleCartHiddenAction {
  type: typeof TOGGLE_CART_HIDDEN
}

interface AddItemAction {
  type: typeof ADD_ITEM
  payload: Item
}

interface RemoveItemAction {
  type: typeof REMOVE_ITEM
  payload: Item
}

interface ClearItemFromCartAction {
  type: typeof CLEAR_ITEM_FORM_CART
  payload: Item
}

interface ClearCartAction {
  type: typeof CLEAR_CART
}

export type CartActionTypes =
  | ToggleCartHiddenAction
  | AddItemAction
  | RemoveItemAction
  | ClearItemFromCartAction
  | ClearCartAction

export interface CartState {
  hidden: boolean
  cartItems: Item[]
}

export interface Item {
  id: number
  imageUrl: string 
  name: string
  price: number
  quantity: number
}