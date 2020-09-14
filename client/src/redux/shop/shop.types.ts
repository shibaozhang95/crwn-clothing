import { Collection } from "../../models/collection";

export interface ShopState {
  collections: CollectionsMap | null;
  isFetching: boolean;
  errorMessage: string | undefined;
}

export const FETCH_COLLECTIONS_START = "FETCH_COLLECTIONS_START";
export const FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS";
export const FETCH_COLLECTIONS_FAILURE = "FETCH_COLLECTIONS_FAILURE";

export interface FetchCollectionsStartAction {
  type: typeof FETCH_COLLECTIONS_START;
}

export interface FetchCollectionSuccessAction {
  type: typeof FETCH_COLLECTIONS_SUCCESS;
  payload: CollectionsMap; // TOOD
}

export interface FetchCollectionsFailureAction {
  type: typeof FETCH_COLLECTIONS_FAILURE;
  payload: string;
}

export type ShopActionTypes =
  | FetchCollectionsStartAction
  | FetchCollectionSuccessAction
  | FetchCollectionsFailureAction;


export interface CollectionForPreview extends Collection {
  routeName: string
}

export type CollectionsMap = Record<string, CollectionForPreview>