import React from "react";
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, compose } from 'redux'
import { selectCartItems } from '../../redux/cart/cart.selectors';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import "./cart-dropdown.styles.scss";
import { CartItem as ICartItem, CartActionTypes, ToggleCartHiddenAction } from "../../redux/cart/cart.types";
import { RootState } from "../../redux/root-reducer";

import CartDropdown from './cart-dropdown.component'

type StateProps = {
  cartItems: ICartItem[]
}

type DispatchPorps = {
  toggleCartHidden: () => ToggleCartHiddenAction
}

type OwnProps = {
}

export type Props = StateProps & DispatchPorps & OwnProps;

const CartDropDownContainer = (props: Props) => (
  <CartDropdown {...props} />
);


const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  cartItems: selectCartItems
});

const mapDispatchToPorps = (dispatch: Dispatch<CartActionTypes>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToPorps)(CartDropDownContainer)