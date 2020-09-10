import { createSelector } from 'reselect';
import * as lodash from  'lodash';
import { RootState } from '../root-reducer';

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = lodash.memoize((collectionUrlParam: string) =>
  createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null
  )
);

export const selectIsColletionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
)