import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Item } from '../../models/item';

import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

type OwnProps = {
  item: Item
}

type DispatchProps = {
  addItem: (item: Item) => void
}

type Props = OwnProps & DispatchProps

const CollectionItem = ({ item, addItem }: Props) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton 
        className='custom-button'
        inverted
        onClick={() => addItem(item)}
      > Add to cart </CustomButton>
    </div>
    );
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addItem: (item: Item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);