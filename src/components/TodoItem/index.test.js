import React from 'react';
import { shallow } from 'enzyme';

import { expect } from 'chai';
import TodoItem from './index';
import { testData } from '../../constants';

const fn = () => {};

describe('TodoItem test', () => {
  const wrapper = shallow(<TodoItem item={testData} changeTodo={fn} deleteTodo={fn} />);
  test('title should be test title', () => {
    expect(wrapper.find('h3.title').text()).to.equal('test title');
  });
  test('status should be test incomplete', () => {
    expect(wrapper.find('td.status').text()).to.equal('incomplete');
  });
});
