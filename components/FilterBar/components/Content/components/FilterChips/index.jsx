/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import I18n from '@shopgate/pwa-common/components/I18n';
import Chip from 'Components/Chip';
import ChipLayout from 'Components/ChipLayout';
import connect from './connector';

/**
 * The Filter Bar Filter Chips component.
 * @param {Object} props The component props.
 * @return {JSX}
 */
const FilterChips = ({ activeFilters, currency, handleFilterRemove, handleOpenFilters }) => {
  if (!activeFilters.length) {
    return null;
  }

  const chips = [];

  Object.keys(activeFilters).forEach((key) => {
    const filter = activeFilters[key];

    switch (filter.type) {
      case 'range':
        chips.push(
          <Chip
            key={filter.label}
            onRemove={() => handleFilterRemove(key)}
            onClick={handleOpenFilters}
          >
            <I18n.Price price={filter.minimum / 100} currency={currency} fractions={false} />
            &nbsp;&mdash;&nbsp;
            <I18n.Price price={filter.maximum / 100} currency={currency} fractions={false} />
          </Chip>
        );
        break;
      case 'multiselect':
        filter.values.forEach((value, index) => chips.push(
          <Chip
            key={`${filter.label}-${index + 1}`}
            onRemove={() => handleFilterRemove(key, index)}
            onClick={handleOpenFilters}
          >
            {`${filter.label}: ${value}`}
          </Chip>
        ));
        break;
      default:
        chips.push(
          <Chip
            key={filter.label}
            onRemove={() => handleFilterRemove(key)}
            onClick={handleOpenFilters}
          >
            {`${filter.label}: ${filter.value}`}
          </Chip>
        );
        break;
    }
  });

  return (
    <ChipLayout moreLabel="filter.more" handleMoreButton={handleOpenFilters}>
      {chips}
    </ChipLayout>
  );
};

FilterChips.propTypes = {
  activeFilters: PropTypes.shape(),
  currency: PropTypes.string,
  handleFilterRemove: PropTypes.func,
  handleOpenFilters: PropTypes.func,
};

FilterChips.defaultProps = {
  activeFilters: null,
  currency: '',
  handleFilterRemove: () => {},
  handleOpenFilters: () => {},
};

export default connect(FilterChips);
