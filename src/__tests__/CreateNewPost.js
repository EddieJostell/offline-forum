import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CreateNewPost from '../components/CreateNewPost';
import Posts from '../components/Posts';

describe('<CreateNewPost', () => {

    it('Form was loaded', () => {
        const wrapper = shallow(<CreateNewPost author="" updatePosts="" />);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('A Post was created', () => {
        const newMockPost = jest.fn();
        const wrapper = mount(<Posts CreateNowPost={newMockPost} />);
        const titleEvent = { target: { name: "title", value: "My Awesome Post" } };
        const contentEvent = { target: { name: "content", value: "Awesome Content Right here! You Definetly need to read this!" } };
        wrapper
          .find('input[name="title"]')
          .simulate("change", titleEvent);
        wrapper
          .find('textarea[name="content"]')
          .simulate("change", contentEvent);
        wrapper.find('form').simulate("submit");
        // expect(wrapper.find(".success").exists()).toBeTruthy();
        console.log(titleEvent);
    });
});

