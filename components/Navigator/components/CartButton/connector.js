/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { connect } from 'react-redux';
import { getHistoryPathname } from '@shopgate/pwa-common/history/selectors';
import { CART_PATH } from '@shopgate/pwa-common-commerce/cart/constants';
import { getCartProductDisplayCount } from '@shopgate/pwa-common-commerce/cart/selectors';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @return {Object} The extended component props.
 */
const mapStateToProps = state => ({
  activeCartRoute: getHistoryPathname(state) === CART_PATH,
  cartProductCount: getCartProductDisplayCount(state),
});

export default Component => connect(mapStateToProps)(Component);
