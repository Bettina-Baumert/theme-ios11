/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import I18n from '@shopgate/pwa-common/components/I18n/';
import Input from '@shopgate/pwa-common/components/Input/';
import SearchIcon from 'Components/icons/MagnifierIcon';
import SearchSuggestions from './components/Suggestions';
import connect from './connector';
import styles from './style';

/**
 * The search field component.
 */
class SearchField extends Component {
  static propTypes = {
    searchPhrase: PropTypes.string.isRequired,
    setSearchPhrase: PropTypes.func.isRequired,
    submitSearch: PropTypes.func.isRequired,
    name: PropTypes.string,
  };

  static defaultProps = {
    name: 'search',
  };

  /**
   * Creates a new search field instance.
   * @param {Object} props The component properties.
   */
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
    };

    this.input = null;
  }

  /**
   * Sets a reference to the input fields DOM element.
   * @param {HTMLElement} ref The reference.
   */
  setInputRef = (ref) => {
    this.input = ref;
  };

  /**
   * Handles input change events.
   * @param {string} value The new input value.
   * @returns {undefined}
   */
  handleChange = value => this.props.setSearchPhrase(value);

  /**
   * Handles changes to the focus of the input element.
   * @param {boolean} focused Whether the element currently became focused.
   */
  handleFocusChange = (focused) => {
    setTimeout(() => {
      /*
       * Delay the execution of the state change until the next cycle
       * to give pending click events a chance to run.
       */
      this.setState({ focused });
    }, 0);
  };

  /**
   * Handles the cancel event.
   */
  handleCancel = () => {
    this.props.setSearchPhrase('');
    this.setState({ focused: false });
  };

  /**
   * Handles the form submit event.
   * @param {Object} event The event object.
   */
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitSearch();
    this.input.blur();
    this.setState({ focused: false });
  };

  /**
   * Renders the hint element.
   * @return {JSX}
   */
  renderLabelElement = () => (
    <label
      htmlFor={this.props.name}
      className={styles.label}
    >
      <div className={styles.icon}>
        <SearchIcon />
      </div>
      { !this.props.searchPhrase && <I18n.Text string="search.label" /> }
    </label>
  );

  /**
   * Renders the cancel button.
   * @return {JSX}
   */
  renderCancelButton = () => (
    <button
      className={classNames(
        styles.button, {
          [styles.hidden]: !this.state.focused,
        })}
      onClick={this.handleCancel}
    >
      <I18n.Text string="search.cancel" />
    </button>
  );

  /**
   * Renders the input field.
   * @return {JSX}
   */
  renderInputField = () => (
    <Input
      autoComplete={false}
      className={styles.input}
      onFocusChange={this.handleFocusChange}
      onChange={this.handleChange}
      onSubmit={this.handleSubmit}
      value={this.props.searchPhrase}
      setRef={this.setInputRef}
      type="search"
    />
  );

  /**
   * Renders the overlay.
   * @return {JSX}
   */
  renderOverlay = () => (
    this.state.focused && <button className={styles.overlay} />
  );

  /**
   * Renders the text field.
   * @return {JSX}
   */
  render() {
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.inputWrapper}>
            <form onSubmit={this.handleSubmit} action={'.'}>
              { this.renderLabelElement() }
              { this.renderInputField() }
            </form>
          </div>
          <div>
            { this.renderCancelButton() }
          </div>
        </div>
        { this.renderOverlay() }
        <SearchSuggestions />
      </div>
    );
  }
}

export default connect(SearchField);
