import React from 'react';
import { shallow, mount, render } from 'enzyme';
import TypingIndicator from '../../components/Bot/TypingIndicator';




describe('<TypingIndicator', () => {

  let wrapper = mount(<TypingIndicator />);

  beforeEach(() => {
     wrapper = mount(<TypingIndicator />);
  });


    it('should not be visible on mount', () => {
      expect(wrapper.html()).toEqual(null);
        
    })

    it('should be visible if state "typing" equal true', () => {
      expect(wrapper.html()).toEqual(null);
      wrapper.setProps({ typing : true});
    expect(wrapper
        .find('div')
        .hasClass("bg-indigo-dark")).toBe(true);
         
    })
    it('should contain three <span /> tags', () => {
      wrapper.setProps({ typing: true });
      expect(wrapper.find("div").children()).toHaveLength(3);
    });
})