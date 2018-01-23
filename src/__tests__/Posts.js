import React from 'react';
import { mount, render, shallow } from 'enzyme';
import Posts from '../components/Posts';
import fakePosts from '../fakePosts';

describe('', () => {
  it.skip('', () => {

    

    expect(fakePosts.data).toHaveLength(3);
    const wrapper = mount(<Posts currentPersona="Zac" />);
    const obj = fakePosts.data;
    wrapper.setState({ posts : obj });
   
    wrapper.instance().renderPostList(wrapper.state().posts);
    console.log(wrapper.state().posts);
    expect(wrapper.find('[data-type="post"]')).toHaveLength(3);
    wrapper.instance().removePost('565ddy34');
    expect(wrapper.find('[data-type="post"]')).toHaveLength(3);
    
  })
})

describe("Posts", () => {
  it("Fetch a post", () => {
    const postWrapper = mount(
      <Posts postId="565ddy34" currentPersona="Esmeralda" />
    );
    const mockItem = fakePosts.data
    const mockery = JSON.stringify(mockItem);
    localStorage.setItem("posts", mockery);
    postWrapper.instance().setPostFromLocalStorage("565ddy34");
    expect(postWrapper.state().posts[0].id).toEqual("565ddy34");
  });
});
