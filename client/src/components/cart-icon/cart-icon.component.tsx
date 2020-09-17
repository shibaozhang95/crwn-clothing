import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch } from 'redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { CartActionTypes, ToggleCartHiddenAction } from '../../redux/cart/cart.types';
import { RootState } from '../../redux/root-reducer';

type StateProps = {
  itemCount: number
}

type DispatchProps = {
  toggleCartHidden: () => ToggleCartHiddenAction
}

type OwnProps = {}

type Props = StateProps & DispatchProps & OwnProps;

const CartIcon = ({ toggleCartHidden, itemCount }: Props) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);