import React from 'react';
import { shallow, mount, render } from 'enzyme';
import TypingIndicator from '../../components/Bot/TypingIndicator';
import Bot from '../../components/Bot/Bot';
import MessageForm from '../../components/Bot/MessageForm';


describe('<TypingIndicator', () => {

  let wrapper = mount(<Bot />);

  beforeEach(() => {
    wrapper = mount(<Bot />);
  });


    it('should on state typing true render Indicator', () => {
        const msg = {target: {name: "userMessage", value: "YOLO!"} };
       wrapper.find(MessageForm).find('[type="text"]').simulate('change', msg);
       wrapper
         .find(MessageForm)
         .find("form")
         .simulate("submit");
       console.log(wrapper.state())
       expect(wrapper.find(TypingIndicator).exists()).toEqual(true);
        
    })

    it.skip('should set css on state typing true', () => {
        wrapper.setState({ typing : true});
        console.log(wrapper.state());
        expect(wrapper.find(TypingIndicator).hasClass("TypingIndicator")).toBe(true);
    })
})