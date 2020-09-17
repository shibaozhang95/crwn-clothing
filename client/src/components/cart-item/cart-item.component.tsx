import React from 'react';

import { CartItem as ICartItem } from '../../redux/cart/cart.types';

import './cart-item.styles.scss';

type Props = {
  item: ICartItem
}

const CartItem = ({ item: { imageUrl, price, name, quantity }}: Props) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default React.memo(CartItem);