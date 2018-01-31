import React from 'react';
import { mount } from "enzyme";
import MessageForm from '../../components/Bot/MessageForm';
import Bot from '../../components/Bot/Bot';

describe('<MessageForm />', () => {

    let wrapper = mount(<Bot />);

    beforeEach(() => {
        wrapper = mount(<Bot />);
    })

    jest.useFakeTimers();
    
    function flushPromises() {
        return new Promise(resolve => setImmediate(resolve))
    }

    it('should submit a message from user', () => {
        const msg = {target: { name: "userMessage", value: "Hey whats up hello!"} };
        const msgFormWrapper = mount(<MessageForm onSubmit="Hello" />)
        wrapper.find(MessageForm).find('[type="text"]').simulate("change", msg);
        wrapper.find(MessageForm).find('form').simulate('submit');
        jest.runAllTimers();
        wrapper.instance().onSubmit(msgFormWrapper.props().onSubmit)
        // wrapper.instance().sendReply();
        // console.log(wrapper.state())
        return flushPromises().then(()=> {
            expect(true);
            expect(wrapper.state().messages[1].message).toEqual("Hello");
        })
    })
})