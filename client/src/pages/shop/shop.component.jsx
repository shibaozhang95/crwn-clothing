import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// import { default as CollectionsOverview} from '../../components/collections-overview/collections-overview.container';
// import { default as CollectionPage } from '../collection/collection.container';

import Spinner from '../../components/spinner/spinner.component';

const CollectionsOverview = lazy(() => import('../../components/collections-overview/collections-overview.container'));
const CollectionPage = lazy(() => import('../collection/collection.container'));

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} 
          component={CollectionsOverview}
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          component={CollectionPage}
        />
      </Suspense>
      
    </div>
  );
  
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});


export default connect(null, mapDispatchToProps)(ShopPage);