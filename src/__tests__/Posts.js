import React from 'react';
import { mount, render, shallow } from 'enzyme';
import Posts from '../components/Posts';
import fakePosts from '../fakePosts';

describe('', () => {
  it('', () => {

    

    expect(fakePosts.data).toHaveLength(3);
    const wrapper = mount(<Posts currentPersona="Zac" />);
    const obj = fakePosts.data;
    wrapper.setState({ posts : obj });
    wrapper.instance().setPostFromLocalStorage();
    wrapper.instance().renderPostList(wrapper.state().posts);
    console.log(wrapper.state().posts);
    expect(wrapper.find('[data-type="post"]')).toHaveLength(3);
    wrapper.instance().removePost('565ddy34');
    expect(wrapper.find('[data-type="post"]')).toHaveLength(3);
    
  })
})
