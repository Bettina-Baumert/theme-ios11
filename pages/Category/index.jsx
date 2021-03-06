/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryList from 'Components/CategoryList';
import FilterBar from 'Components/FilterBar';
import Headline from 'Components/Headline';
import View from 'Components/View';
import Products from './components/Products';
import Empty from './components/Empty';
import connect from './connector';
import styles from './style';

/**
 * The category view component.
 * @returns {JSX}
 */
class Category extends Component {
  static propTypes = {
    category: PropTypes.shape(),
    hasHeadline: PropTypes.bool,
    hasProducts: PropTypes.bool,
    isFilterBarShown: PropTypes.bool,
    isRoot: PropTypes.bool,
  };

  static defaultProps = {
    category: null,
    hasHeadline: false,
    hasProducts: false,
    isFilterBarShown: true,
    isRoot: true,
  };

  static contextTypes = {
    history: PropTypes.shape(),
    i18n: PropTypes.func,
  };

  createHeadline = () => {
    if (this.props.isFilterBarShown) {
      return (
        <div className={styles.headlineWrapper}>
          <Headline text={this.title} />
        </div>
      );
    }

    return <Headline text={this.title} />;
  };

  /**
   * Returns the current view title.
   * @return {string} The view title.
   */
  get title() {
    const { __ } = this.context.i18n();

    if (this.props.isRoot) {
      return __('titles.categories');
    }

    return this.props.category ? this.props.category.name : '';
  }

  /**
   * Renders the component.
   * @returns {JSX}
   */
  render() {
    return (
      <View title={this.title}>
        {this.props.isFilterBarShown && <FilterBar />}
        {this.props.hasHeadline && this.createHeadline()}
        <CategoryList />
        {this.props.hasProducts && <Products />}
        <Empty
          headlineText="category.no_result.heading"
          bodyText="category.no_result.body"
          searchPhrase={this.title}
        />
      </View>
    );
  }
}

export default connect(Category);
