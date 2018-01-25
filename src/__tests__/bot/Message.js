import React from 'react';
import { mount, render, shallow } from 'enzyme';
import Message from '../../components/Bot/Message';

describe('', () => {
  it('', () => {
    const wrapper = shallow(<Message bot="true" />)
    console.log(wrapper.html())
    expect(wrapper.props().bot).toBe(true)
  });
});
