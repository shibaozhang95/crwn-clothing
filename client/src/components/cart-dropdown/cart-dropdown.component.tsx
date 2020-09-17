import React from "react";
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, compose } from 'redux'
import { selectCartItems } from '../../redux/cart/cart.selectors';

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import "./cart-dropdown.styles.scss";
import { CartItem as ICartItem, CartActionTypes, ToggleCartHiddenAction } from "../../redux/cart/cart.types";
import { RootState } from "../../redux/root-reducer";

type StateProps = {
  cartItems: ICartItem[]
}

type DispatchPorps = {
  toggleCartHidden: () => ToggleCartHiddenAction
}

type OwnProps = {}

type Props = StateProps & DispatchPorps & OwnProps & RouteComponentProps;

const CartDropDown = ({ cartItems, history, toggleCartHidden }: Props) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length 
        ? cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
        :
        (<span className='empty-message'>Your cart is empty</span>)
      }
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        toggleCartHidden();
      }}  
    >GO TO CHECKOUT</CustomButton>
  </div>
);


const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  cartItems: selectCartItems
});

const mapDispatchToPorps = (dispatch: Dispatch<CartActionTypes>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

// const Connected = connect(mapStateToProps, mapDispatchToPorps)(CartDropDown)

// export default withRouter(Connected)

export default compose<React.FunctionComponent<OwnProps>>(
  withRouter,
  connect(mapStateToProps, mapDispatchToPorps)
)(CartDropDown)