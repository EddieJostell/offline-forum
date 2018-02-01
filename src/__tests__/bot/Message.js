import React from 'react';
import { mount, render, shallow } from 'enzyme';
import Message from '../../components/Bot/Message';

describe('<Message CSS />', () => {
  it('bot false css', () => {
    const wrapper = shallow(<Message message="no bot" bot={false} />)
    expect(wrapper.props().bot).toBeFalsy()
    expect(wrapper.find('p').hasClass('bg-indigo-dark')).toBeTruthy()
  });
  it('bot true css', () => {
    const wrapper = shallow(<Message message="only bot" bot={false} />)
    wrapper.setProps({ bot : true });
    expect(wrapper.props().bot).toBeFalsy()
    expect(wrapper.find('p').hasClass('bg-white')).toBeTruthy()
  });
});