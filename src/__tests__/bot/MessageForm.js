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

    it('should submit a message from user', async () => {
        const msg = {target: { name: "userMessage", value: "Hey whats up hello!"} };
        wrapper.find(MessageForm).find('[type="text"]').simulate("change", msg);
        wrapper.find(MessageForm).find('form').simulate('submit');
        jest.runAllTimers();
        await flushPromises();
        expect(wrapper.state().messages[0].message).toEqual("Hey whats up hello!");
    })
})