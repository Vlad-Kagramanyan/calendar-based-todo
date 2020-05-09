import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { expect } from 'chai';
import Header from './index';
import { testData } from '../../constants';

describe('testing Header component', () => {
  const Change = sinon.spy();
  const wrapper = shallow(<Header titleVal="test" setTitleVal={Change} searchBar={false} todos={[testData]} />);
  test('if search bar false should not be input else will', () => {
    expect(wrapper.find('input').exists()).to.equal(false);
    wrapper.setProps({ searchBar: true });
    expect(wrapper.find('input').exists()).to.equal(true);
  });

  test('testing input value prop', () => {
    expect(wrapper.find('input').first().props().value).to.equal('test');
  });
});
