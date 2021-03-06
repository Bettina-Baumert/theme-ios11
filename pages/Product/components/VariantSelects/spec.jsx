/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { selection, selectionWithWarning, selectionWithAlert } from './mock';
import { Unwrapped as VariantSelects } from './index';
import styles from './style';

window.requestAnimationFrame = () => {};

// Mock <Portal>
jest.mock('react-portal', () => ({ children }) => children);
jest.mock('Components/Sheet', () => ({ children }) => children);

// Mock the redux connect() method instead of providing a fake store.
jest.mock('@shopgate/pwa-common/components/Router/components/RouteGuard', () => (obj) => {
  const newObj = obj;

  newObj.defaultProps = {
    ...newObj.defaultProps,
    currentRoute: '',
  };

  return newObj;
});

describe('<VariantSelects />', () => {
  it('should render with variants', () => {
    const wrapper = shallow(<VariantSelects selection={selection} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the handleSelectionUpdate callback', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <VariantSelects selection={selection} handleSelectionUpdate={spy} />
    );

    // Trigger onChange callback
    wrapper.find('Picker').first().prop('onChange')('1');

    // Check if handleSelectionUpdate callback was called
    expect(spy).toHaveBeenCalledWith('1', '1');
  });

  describe('given availability', () => {
    const warningCssClass = `.${styles.availabilities.warning.split(' ').join('.')}`;
    const alertCssClass = `.${styles.availabilities.alert.split(' ').join('.')}`;

    it('should not render availability text if available', () => {
      const wrapper = shallow(<VariantSelects selection={selection} />);

      expect(wrapper.find(warningCssClass).exists()).toBeFalsy();
      expect(wrapper.find(alertCssClass).exists()).toBeFalsy();

      expect(wrapper).toMatchSnapshot();
    });

    it('should render a warning', () => {
      const wrapper = mount(<VariantSelects selection={selectionWithWarning} />);

      expect(wrapper.find(warningCssClass).length).toBe(3);
      expect(wrapper.find(alertCssClass).exists()).toBeFalsy();
      expect(wrapper.html().indexOf('Only 1 left')).toBeGreaterThan(-1);
      expect(wrapper.html().indexOf('Only 2 left')).toBeGreaterThan(-1);
      expect(wrapper.html().indexOf('Only 3 left')).toBeGreaterThan(-1);

      expect(wrapper).toMatchSnapshot();
    });

    it('should render an alert', () => {
      const wrapper = mount(<VariantSelects selection={selectionWithAlert} />);

      expect(wrapper.find(warningCssClass).exists()).toBeFalsy();
      expect(wrapper.find(alertCssClass).length).toBe(2);
      expect(wrapper.html().indexOf('Out of stock')).toBeGreaterThan(-1);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
