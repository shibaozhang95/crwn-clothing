import React from 'react';
import { connect } from 'react-redux';

import { selectCollectionsForPreview, selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';

import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import Spinner from '../spinner/spinner.component';

const CollectionOverview = ({ isLoading, collections }) => {
  console.log(isLoading);
  console.log(collections);
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

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
  isLoading: () => !selectIsCollectionsLoaded
})

export default connect(mapStateToProps)(CollectionOverview);