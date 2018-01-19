import React from "react";
import { shallow, mount, render } from "enzyme";
import CreateNewPost from "../components/CreateNewPost";
import Posts from "../components/Posts";

describe("<CreateNewPost", () => {
  it("Form was loaded", () => {
    const author = "Morgana";
    const wrapper = shallow(<CreateNewPost author={author} updatePosts={() => {}} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("Create a Post", () => {
    const currentPersona = "Morgana";
    const newMockPost = jest.fn();
    const wrapper = mount(<Posts CreateNowPost={newMockPost} currentPersona={currentPersona} />);
    const titleEvent = { target: { name: "title", value: "My Awesome Post" } };
    const contentEvent = {
      target: {
        name: "content",
        value: "Awesome Content Right here! You Definetly need to read this!"
      }
    };
    wrapper.find('input[name="title"]').simulate("change", titleEvent);
    wrapper.find('textarea[name="content"]').simulate("change", contentEvent);
    wrapper.find("form").simulate("submit");
    /* console.log(titleEvent.target.value);
    console.log(contentEvent.target.value); */
   // console.log(wrapper.props());
    expect(titleEvent.target.value).toBeDefined();
    expect(contentEvent.target.value).toBeDefined();
  });

  it("Not Create a Post if no inputs are activated", () => {
    
  })
});
