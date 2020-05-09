import React from 'react';
import { shallow, mount } from 'enzyme';

import { expect } from 'chai';
import { Calendar } from './index';
import { testData } from '../../constants';


describe('testing calendar component', () => {
  const wrapper = shallow(<Calendar todos={[testData]} />);

  test('CalendarDay should be 30', () => {
    expect(wrapper.find('CalendarDay').length).to.equal(30);
  });
});
