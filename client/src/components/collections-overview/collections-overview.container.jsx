import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';

import CollectionsOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

const CollectionsOverviewContainer = ({ isLoading, ...otherProps }) => (
  isLoading 
  ? <Spinner />
  : <CollectionsOverview {...otherProps} />
)

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});


export default connect(mapStateToProps)(CollectionsOverviewContainer);


// import { Query } from 'react-apollo';
// import { gql } from 'apollo-boost';

// import CollectionsOverview from './collections-overview.component';
// import Spinner from '../spinner/spinner.component';

// const GET_COLLECTIONS = gql`
//   {
//     collections {
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

// const CollectionsOverviewContainers = () => (
//   <Query query={GET_COLLECTIONS}>
//   {
//     ({ loading, error, data }) => {
//       if (loading) return <Spinner />;
//       return <CollectionsOverview collections={data.collections}/>
//     }
//   }
//   </Query>
// );

// export default CollectionsOverviewContainers;