/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  HISTORY_PUSH_ACTION,
  HISTORY_POP_ACTION,
  HISTORY_REPLACE_ACTION,
} from '@shopgate/pwa-common/constants/ActionTypes';
import Button from '@shopgate/pwa-common/components/Button';
import { INDEX_PATH } from '@shopgate/pwa-common/constants/RoutePaths';
import ArrowIcon from 'Components/icons/ArrowIcon';
import CrossIcon from 'Components/icons/CrossIcon';
import connect from './connector';
import {
  NAV_STATE_INDEX,
  NAV_STATE_BACK,
} from './constants';
import styles from './style';

/**
 * Gets the type for a set of NavButton props.
 * @param {Object} props The component props.
 * @returns {string} The type for the given set of component properties.
 */
const getTypeFromProps = (props) => {
  const { action, path } = props;
  switch (action) {
    case HISTORY_PUSH_ACTION:
      return NAV_STATE_BACK;
    case HISTORY_POP_ACTION:
    case HISTORY_REPLACE_ACTION:
      return (path !== INDEX_PATH) ? NAV_STATE_BACK : NAV_STATE_INDEX;
    default:
      return NAV_STATE_INDEX;
  }
};

/**
 * The nav icon component for the navigator.
 */
class NavButton extends PureComponent {
  static propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    action: PropTypes.string.isRequired,
    filterAttributeOpen: PropTypes.bool.isRequired,
    filterOpen: PropTypes.bool.isRequired,
    loginOpen: PropTypes.bool.isRequired,
    // eslint-disable-next-line react/no-unused-prop-types
    path: PropTypes.string.isRequired,
    goBackHistory: PropTypes.func,
    showIconShadow: PropTypes.bool,
  };

  static defaultProps = {
    goBackHistory: () => {},
    showIconShadow: false,
  };

  /**
   * Constructor.
   * @param {Object} props The component props.
   */
  constructor(props) {
    super(props);

    this.state = {
      type: getTypeFromProps(props),
    };
  }

  /**
   * Will be fired when the component props change.
   * @param {Object} nextProps The new component props.
   */
  componentWillReceiveProps(nextProps) {
    const type = getTypeFromProps(nextProps);

    if (type !== this.state.type) {
      this.setState({ type });
    }
  }

  /**
   * The component only should update if the type changed.
   * @param {Object} nextProps The next props.
   * @param {Object} nextState The next state.
   * @returns {boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.type !== this.state.type ||
      nextProps.showIconShadow !== this.props.showIconShadow ||
      nextProps.filterOpen !== this.props.filterOpen ||
      nextProps.filterAttributeOpen !== this.props.filterAttributeOpen ||
      nextProps.loginOpen !== this.props.loginOpen
    );
  }

  /**
   * Handles a click on the icon.
   * @param {Object} event The event object.
   */
  handleClick = (event) => {
    event.preventDefault();

    if (this.props.filterOpen || this.state.type === NAV_STATE_BACK) {
      this.props.goBackHistory();
    }
  }

  /**
   * Returns the icon for the button.
   * @return {JSX} The icon.
   */
  renderIcon() {
    if (this.props.loginOpen || (this.props.filterOpen && !this.props.filterAttributeOpen)) {
      return <CrossIcon />;
    }

    if (this.state.type === NAV_STATE_BACK || this.props.filterAttributeOpen) {
      return <ArrowIcon shadow={this.props.showIconShadow} />;
    }

    return null;
  }

  /**
   * Renders the component.
   * @returns {JSX}
   */
  render() {
    const Icon = this.renderIcon();

    if (!Icon) {
      return null;
    }

    return (
      <Button className={styles.button} onClick={this.handleClick}>
        <div className={styles.buttonContent}>
          {Icon}
        </div>
      </Button>
    );
  }
}

export default connect(NavButton);
