import React from 'react';
import { mount, render, shallow } from 'enzyme';
import Posts from '../components/Posts';
import fakePosts from '../fakePosts';
import SinglePost from '../components/SinglePost';

let postWrapper = mount(
  <Posts postId="565ddy34" currentPersona="Esmeralda" />
);
let mockItem = fakePosts.data
let mockery = JSON.stringify(mockItem);

describe("Posts", () => {
  it("Fetch a post", () => {
    postWrapper.instance().setPostFromLocalStorage("565ddy34");
    expect(postWrapper.state().posts[0].id).toEqual("565ddy34");
  });
});

describe("Posts", () => {
  it("remove a post", () => {
    postWrapper.instance().setPostFromLocalStorage("565ddy34");
    postWrapper.instance().removePost("565ddy34");
    expect(postWrapper.state().posts[0].id).not.toContain("565ddy34");
    // console.log(postWrapper.state().posts)
  });
});

describe("Posts", () => {
  it("render posts", () => {
    postWrapper.instance().setPostFromLocalStorage();
    postWrapper.instance().renderPostList(postWrapper.state().posts);
    const singlepost = render(<SinglePost />)
    // console.log(postWrapper.state().posts)
    expect(singlepost.find('[data-type="post"]').html()).toHaveLength(0);
    expect(postWrapper.find(SinglePost).find('[author="Esmeralda"]')).toBeTruthy();
    expect(postWrapper.find(SinglePost).find('[author="Morgana"]')).toBeTruthy();
    console.log(postWrapper.find(SinglePost))
    // expect(postWrapper.state().posts).toMatchObject([{ author: 'Esmeralda' }])
    // expect(postWrapper.state().posts).toContain([expect.objectContaining({ author: 'Morgana' })])
  });
});

beforeEach(() => {
  postWrapper = mount(
    <Posts postId="565ddy34" currentPersona="Esmeralda" />
  );
  mockItem = fakePosts.data
  mockery = JSON.stringify(mockItem);
  localStorage.setItem("posts", mockery);
});

afterEach(() => {
  localStorage.clear();
});