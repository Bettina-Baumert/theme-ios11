/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@shopgate/pwa-common/components/Grid';
import Sheet from 'Components/Sheet';
import ShippingCostsLabel from './components/ShippingCostsLabel';
import ShippingCosts from './components/ShippingCosts';
import SubTotalLabel from './components/SubTotalLabel';
import SubTotal from './components/SubTotal';
import CheckoutButton from './components/CheckoutButton';
import styles from './style';

/**
 * The Payment Bar component.
 * @param {Object} props The component props.
 * @return {JSX}
 */
const PaymentBar = ({ isVisible }) => (
  <Sheet isOpen={isVisible} backdrop={false} animation={styles.animation}>
    <Grid className={styles.container}>

      <Grid.Item className={styles.labelColumn} grow={1}>
        <div className={styles.column}>
          <SubTotalLabel />
          <ShippingCostsLabel />
        </div>
      </Grid.Item>

      <Grid.Item className={styles.costsColumn} grow={1}>
        <div className={styles.column}>
          <SubTotal />
          <ShippingCosts />
        </div>
      </Grid.Item>

      <Grid.Item className={styles.buttonColumn} grow={1}>
        <div className={styles.column}>
          <div className={styles.checkoutButton}>
            <CheckoutButton />
          </div>
        </div>
      </Grid.Item>
    </Grid>
  </Sheet>
);

PaymentBar.propTypes = {
  isVisible: PropTypes.bool,
};

PaymentBar.defaultProps = {
  isVisible: true,
};

export default PaymentBar;
