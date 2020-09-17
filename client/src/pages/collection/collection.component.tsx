import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selector';


import  CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';
import { Collection } from '../../models/collection';
import { RootState } from '../../redux/root-reducer';
import { RouteComponentProps } from 'react-router';

type OwnProps = {}

type StateProps = {
  collection: Collection | null
}

type Props = OwnProps & StateProps

const CollectionPage = ({ collection }: Props) => {
  return !collection ?
    <div>Wrong Path</div>
    : (
    <div className='collection-page'>
      <h2 className='title'>{collection.title}</h2>
      <div className='items'>
        {
          collection.items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  )
};

const mapStateToProps = (state: RootState, ownProps: OwnProps & RouteComponentProps<{collectionId: string}>): StateProps => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})
// const mapStateToProps = (state, ownProps) => createStructuredSelector({
//   collection: () => selectCollection(ownProps.match.params.collectionId)(state)
// })

export default connect(mapStateToProps)(CollectionPage);