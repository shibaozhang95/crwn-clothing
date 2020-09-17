import React from 'react';
import { connect } from 'react-redux';

import { selectCollectionsForPreview, selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';

import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import Spinner from '../spinner/spinner.component';
import { Collection } from '../../models/collection';
import { RootState } from '../../redux/root-reducer';

type StateProps = {
  isLoading: boolean
  collections: Collection[]
}

type OwnProps = {}

type Props = OwnProps & StateProps

const CollectionOverview = ({ isLoading, collections }: Props) => {
  return (
    isLoading
    ? (<Spinner />) 
    : (<div className='shop-page'>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>)
  )
};

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  collections: selectCollectionsForPreview,
  isLoading: () => !selectIsCollectionsLoaded
})

export default connect(mapStateToProps)(CollectionOverview);