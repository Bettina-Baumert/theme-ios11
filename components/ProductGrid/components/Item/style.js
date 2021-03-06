/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { css } from 'glamor';
import colors from 'Styles/colors';

const container = css({
  position: 'relative',
  display: 'block',
  background: colors.light,
  fontSize: 15,
  height: '100%',
  padding: '0 5px',
}).toString();

const details = css({
  ':not(:empty)': {
    padding: '12px 0 30px',
  },
}).toString();

const title = css({
  fontSize: 'initial',
  lineHeight: 1.2,
  paddingRight: '1.5em',
}).toString();

const priceWrapper = css({
  alignItems: 'center',
  lineHeight: 1.8,
  marginTop: 2,
}).toString();

const basicPrice = css({
  fontSize: '0.85em',
  marginTop: -1,
}).toString();

const badgeWrapper = css({
  lineHeight: 1,
  position: 'absolute',
  left: 15,
  top: 10,
  width: 40,
}).toString();

const wishlist = css({
  display: 'none',
  position: 'absolute',
  right: 16,
  left: 'auto',
  transform: 'translate3d(0, -50%, 0)',
}).toString();

const priceStriked = css({
  fontSize: '0.75rem',
  marginTop: 2,
}).toString();

export default {
  badgeWrapper,
  basicPrice,
  container,
  details,
  priceWrapper,
  title,
  wishlist,
  priceStriked,
};
