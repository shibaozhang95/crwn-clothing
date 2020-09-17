import React from 'react';
import { Item } from '../../models/item';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

type Props = {
  title: string
  items: Item[]
}
const CollectionPreview = ({ title, items }: Props) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items
          .filter((_item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
      }
    </div>
  </div>
)

export default CollectionPreview;