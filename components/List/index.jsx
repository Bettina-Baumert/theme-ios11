/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List as BaseList } from '@shopgate/pwa-common/components/List';
import ListItem from './components/ListItem';
import styles from './style';

/**
 * The list component.
 */
class List extends Component {
  static Item = ListItem;

  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  /**
   * Renders the component.
   * @returns {JSX}
   */
  render() {
    const { children } = this.props;

    if (!React.Children.count(children)) {
      return null;
    }

    return (
      <BaseList>
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) {
            return null;
          }
          // The key for each child.
          const key = `child-${index}`;
          // Selected state for the child.
          const isSelected = child.props.isSelected;
          // Whether or not this child is the last.
          const isLast = (index === children.length - 1);

          let classes = styles.item;

          if (!isLast) {
            classes += ` ${styles.itemNotLast}`;
          }

          return (
            <BaseList.Item
              className={classes}
              isSelected={isSelected}
              key={key}
            >
              <div className={styles.innerContainer}>
                {child}
              </div>
            </BaseList.Item>
          );
        })}
      </BaseList>
    );
  }
}

export default List;