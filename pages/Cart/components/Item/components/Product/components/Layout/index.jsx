/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@shopgate/pwa-common/components/Grid';
import ProductImage from 'Components/ProductImage';
import QuantityPicker from './components/QuantityPicker';
import Title from './components/Title';
import ProductPrice from './components/ProductPrice';
import Properties from './components/Properties';
import styles from './style';

/**
 * The Cart Product Layout component.
 * @param {Object} props The component properties.
 * @returns {JSX}
 */
const Layout = props => (
  <Grid className={styles.item}>
    <Grid.Item className={styles.leftColumn}>
      <div className={styles.image}>
        <ProductImage src={props.product.featuredImageUrl} />
      </div>
      <QuantityPicker
        quantity={props.quantity}
        editMode={props.editMode}
        onChange={props.handleUpdate}
        onToggleEditMode={props.toggleEditMode}
      />
    </Grid.Item>
    <Grid.Item className={styles.content} grow={1}>
      <Title
        handleRemove={props.handleDelete}
        toggleEditMode={props.toggleEditMode}
        value={props.product.name}
      />
      <Grid className={styles.info}>
        <Properties properties={props.product.properties} />
        <ProductPrice
          currency={props.currency}
          defaultPrice={props.product.price.default}
          specialPrice={props.product.price.special}
        />
      </Grid>
    </Grid.Item>
  </Grid>
);

Layout.propTypes = {
  currency: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
  product: PropTypes.shape().isRequired,
  quantity: PropTypes.number.isRequired,
  handleDelete: PropTypes.func,
  handleUpdate: PropTypes.func,
  toggleEditMode: PropTypes.func,
};

Layout.defaultProps = {
  handleDelete: () => {},
  handleUpdate: () => {},
  toggleEditMode: () => {},
};

export default Layout;
