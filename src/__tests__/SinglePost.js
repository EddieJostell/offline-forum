import React from "react";
import { shallow, mount, render } from "enzyme";
import SinglePost from '../components/SinglePost';
import Button from "../components/Button";
import Posts from "../components/Posts";
import fakePosts from "../fakePosts";


describe('<SinglePost />', () => {
  it.skip('Component should exist', () => {
    const mock = jest.fn();
    const PostWrapper = mount(<Posts />)
    const wrapper = mount(<SinglePost author="Zac" currentPersona="Zac" onClick={mock} />);
    const button = wrapper.find(Button);
    expect(PostWrapper.find('[data-type="allaPosts"]')).toHaveLength(1);
    console.log(PostWrapper.find('[data-type="allaPosts"]').html())
    console.log(button.html())
    expect(wrapper.props().author && wrapper.props().currentPersona).toEqual("Zac");
    button.find('button').simulate('click');
    expect(wrapper.find('[data-type="post"]')).toHaveLength(1);        
  })

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