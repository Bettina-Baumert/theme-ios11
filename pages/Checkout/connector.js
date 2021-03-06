/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import connect from '@shopgate/pwa-common/components/Router/helpers/connect';
import goBackHistory from '@shopgate/pwa-common/actions/history/goBackHistory';
import fetchCheckoutUrl from '@shopgate/pwa-common-commerce/checkout/actions/fetchCheckoutUrl';

/**
 * Connects the dispatch function to a callable function in the props.
 * @param {Function} dispatch The redux dispatch function.
 * @return {Object} The extended component props.
 */
const mapDispatchToProps = dispatch => ({
  fetchCheckoutUrl: () => dispatch(fetchCheckoutUrl()),
  goBackHistory: number => dispatch(goBackHistory(number)),
});

export default connect(null, mapDispatchToProps, null, { withRef: true });
