import React, { useEffect, lazy, Suspense } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import Spinner from '../../components/spinner/spinner.component';

const CollectionsOverview = lazy(() => import('../../components/collections-overview/collections-overview.component'));
const CollectionPage = lazy(() => import('../collection/collection.container'));

type DispatchProps = {
  fetchCollectionsStart: () => void
}

type Props = DispatchProps & RouteComponentProps

const ShopPage = ({ fetchCollectionsStart, match }: Props) => {
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});


export default connect(null, mapDispatchToProps)(ShopPage);