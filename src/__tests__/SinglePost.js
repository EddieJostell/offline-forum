import React from "react";
import { shallow, mount, render } from "enzyme";
import SinglePost from '../components/SinglePost';
import Button from "../components/Button";
import Posts from "../components/Posts";
import fakePosts from "../fakePosts";


describe('<SinglePost />', () => {
  it('Should remove button on press', () => {
    const mockItem = fakePosts.data
    const mockery = JSON.stringify(mockItem);
    localStorage.setItem("posts", mockery);
    const wrapper = mount(<Posts currentPersona='Zac' />);
    const button = wrapper.find('.bg-red-dark');
    button.simulate('click');
    expect(wrapper.render().find('.bg-red-dark').html()).toBeNull();
  })
})