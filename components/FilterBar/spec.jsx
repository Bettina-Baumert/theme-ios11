/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import FilterBar from './index';

describe('<FilterBar>', () => {
  global.requestAnimationFrame = () => {};

  it('should hide if outside of the view', () => {
    const wrapper = shallow(
      <FilterBar
        handleSortChange={() => {}}
        handleOpenFiltersView={() => {}}
        getFilters={() => {}}
      />
    );

    const filterBar = wrapper.instance();
    filterBar.element = {
      offsetHeight: 50,
    };

    filterBar.scrollElement = {
      scrollTop: 300,
    };

    expect(filterBar.isVisible).toBe(true);
    filterBar.animate();
    expect(filterBar.isVisible).toBe(false);
    filterBar.scrollElement.scrollTop = 0;
    filterBar.animate();
    expect(filterBar.isVisible).toBe(true);
  });

  it('does not reset the spacer height if element height is not available', () => {
    const wrapper = shallow(
      <FilterBar
        handleSortChange={() => {}}
        handleOpenFiltersView={() => {}}
        getFilters={() => {}}
      />
    );
    const filterBar = wrapper.instance();

    filterBar.element = { offsetHeight: 50 };
    filterBar.componentDidUpdate();
    expect(filterBar.state.spacerHeight).toEqual(50);

    filterBar.element = {};
    filterBar.componentDidUpdate();
    expect(filterBar.state.spacerHeight).toEqual(50);

    filterBar.element = { offsetHeight: 0 };
    filterBar.componentDidUpdate();
    expect(filterBar.state.spacerHeight).toEqual(50);

    filterBar.element = { offsetHeight: 30 };
    filterBar.componentDidUpdate();
    expect(filterBar.state.spacerHeight).toEqual(30);
  });
});
