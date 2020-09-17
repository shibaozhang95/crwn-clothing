import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { CartActionTypes, CartItem as ICartItem } from '../../redux/cart/cart.types';
import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

type DispatchProps = {
  clearItem: (item: ICartItem) => void,
  removeItem: (item: ICartItem) => void,
  addItem: (item: ICartItem) => void
}

type OwnProps = {
  cartItem: ICartItem
}

type Props = OwnProps & DispatchProps

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }: Props) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button'
        onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>): DispatchProps => ({
  clearItem: (item: ICartItem) => dispatch(clearItemFromCart(item)),
  addItem: (item: ICartItem) => dispatch(addItem(item)),
  removeItem: (item: ICartItem) => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);