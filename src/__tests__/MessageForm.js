import React from 'react';
import { mount, render, shallow } from "enzyme";
import MessageForm from '../components/Bot/MessageForm';
import Bot from '../components/Bot/Bot';
import * as api from '../api/index';

describe('<MessageForm />', () => {

    let wrapper = mount(<Bot />);

    beforeEach(() => {
        wrapper = mount(<Bot />);
    })

    jest.useFakeTimers();
    jest.runAllTimers();
    
    it('should submit a message from user', () => {
        const msg = {target: { name: "userMessage", value: "Hey whats up hello!"} };
        const msgFormWrapper = mount(<MessageForm onSubmit="" />)
        wrapper.find(MessageForm).find('[type="text"]').simulate("change", msg);
        wrapper.find(MessageForm).find('form').simulate('submit');
        console.log(wrapper.state().messages);
        wrapper.instance().onSubmit(msgFormWrapper.props().onSubmit)
        expect(wrapper.instance().sendReply()).toHaveBeenCalled();
        console.log(wrapper.state().messages)

    })

        it('should submit a message from bot', () => {
        const msg = {target: { name: "userMessage", value: "Hey whats up hello!"} };
        wrapper.find(MessageForm).find('[type="text"]').simulate("change", msg);
        wrapper.find(MessageForm).find('form').simulate('submit');
       // console.log(wrapper.state().messages);

    })
})