import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { toggleCartHidden } from '../../redux/cart/cart.actions.js';


import "./cart-dropdown.styles.scss";

const CartDropDown = ({ cartItems, history, toggleCartHidden }) => (
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

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToPorps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(mapStateToProps, mapDispatchToPorps)(
  withRouter(CartDropDown)
)
