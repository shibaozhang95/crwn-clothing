import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
 
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';

import CollectionPage from './collection.component';
import Spinner from '../../components/spinner/spinner.component';

const CollectionPageContainer = ({ isLoading , ...otherProps }) => {
  return (
    isLoading 
    ? <Spinner />
    : <CollectionPage {...otherProps} />
  )
}

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

export default connect(mapStateToProps)(CollectionPageContainer);

// import { Query } from 'react-apollo';
// import { gql } from 'apollo-boost';

// import CollectionPage from './collection.component';
// import Spinner from '../../components/spinner/spinner.component';

// const GET_COLLECTION_BY_TITLE = gql`
//   query getCollectionsByTitle($title: String!) {
//     getCollectionsByTitle(title: $title) {
//       id
//       title
//       items {
//         id
//         name
//         price
//         imageUrl
//       }
//     }
//   }
// `;

// const CollectionPageContainer = ({ match }) => (
//   <Query 
//     query={GET_COLLECTION_BY_TITLE}
//     variables={{title: match.params.collectionId}}
//   >
//     {
//       ({ loading, data }) => {
//         if (loading) return <Spinner />;
//         console.log(data);
//         const { getCollectionsByTitle } = data;
//         return <CollectionPage collection={getCollectionsByTitle} />;
//       }
//     }
//   </Query>
// );

// export default CollectionPageContainer;