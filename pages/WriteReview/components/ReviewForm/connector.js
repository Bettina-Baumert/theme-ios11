/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { connect } from 'react-redux';
import submitReview from '@shopgate/pwa-common-commerce/reviews/actions/submitReview';
import {
  getDefaultAuthorName,
  getUserReviewForProduct,
  getUserReviewFirstFetchState,
} from '@shopgate/pwa-common-commerce/reviews/selectors';
import { getCurrentProductId } from '@shopgate/pwa-common-commerce/product/selectors/product';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @return {Object} The extended component props.
 */
const mapStateToProps = state => ({
  authorName: getDefaultAuthorName(state),
  productId: getCurrentProductId(state),
  review: getUserReviewForProduct(state),
  isLoadingUserReview: getUserReviewFirstFetchState(state),
});

/**
 * Connects the dispatch function to a callable function in the props.
 * @param {Function} dispatch The redux dispatch function.
 * @return {Object} The extended component props.
 */
const mapDispatchToProps = dispatch => ({
  submit: (review, update) => dispatch(submitReview(review, update)),
});

export default connect(mapStateToProps, mapDispatchToProps);
