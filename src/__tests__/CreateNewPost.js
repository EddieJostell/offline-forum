import React from "react";
import { shallow, mount, render } from "enzyme";
import CreateNewPost from "../components/CreateNewPost";
import Posts from "../components/Posts";

describe("<CreateNewPost", () => {
  it("Form was loaded", () => {
    const author = "Morgana";
    const wrapper = shallow(
      <CreateNewPost author={author} updatePosts={() => {}} />
    );
    expect(wrapper.exists()).toBeTruthy();
  });

  it("Create a Post with all input fields activated", () => {
    const currentPersona = "Morgana";
    const newMockPost = jest.fn();
    const wrapper = mount(
      <Posts
        CreateNowPost={newMockPost}
        currentPersona={currentPersona}
        onSubmit={newMockPost}
      />
    );
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
    wrapper.setState({
      title: titleEvent.target.value,
      content: contentEvent.target.value
    });
   // console.log(wrapper.state());
    expect(wrapper.state().title).toBeDefined();
    expect(wrapper.state().content).toBeDefined();
    expect(currentPersona).toBe("Morgana");
    expect(wrapper.find(Posts)).toHaveLength(1);
  });

  it("Can Create a Post with only a title", () => {
    const currentPersona = "Zac";
    const newMockPost = jest.fn();
    const wrapper = mount(
      <Posts CreateNewPost={newMockPost} currentPersona={currentPersona} />
    );
    const titleEvent = { target: { name: "title", value: "My Awesome Post" } };
    const contentEvent = { target: { name: "content", value: null } };
    wrapper.find('input[name="title"]').simulate("change", titleEvent);
    wrapper.find("form").simulate("submit");
    wrapper.setState({
      title: titleEvent.target.value,
      content: contentEvent.target.value
    });

    expect(wrapper.state()).toBeDefined();
    expect(wrapper.state().content).toBe(null);
    expect(currentPersona).toBe("Zac");
    expect(wrapper.find(Posts)).toHaveLength(1);
  });

  it("Can Create a Post with only content", () => {
    const currentPersona = "Zac";
    const newMockPost = jest.fn();
    const wrapper = mount(
      <Posts CreateNewPost={newMockPost} currentPersona={currentPersona} />
    );
    const titleEvent = { target: { name: "title", value: null } };
    const contentEvent = {
      target: {
        name: "content",
        value: "OMG!!, So like I met this guy like and he was really cute like."
      }
    };
    // wrapper.find('input[name="title"]').simulate("change", titleEvent);
    wrapper.find('textarea[name="content"]').simulate("change", contentEvent);
    wrapper.find("form").simulate("submit");
    expect(titleEvent.target.value).toBe(null);
    expect(contentEvent.target.value).toBeDefined();
    expect(wrapper.find(Posts)).toHaveLength(1);
  });

  it("Can Create a Post if no inputs are activated", () => {
    const currentPersona = "Zac";
    const newMockPost = jest.fn();
    const wrapper = mount(
      <Posts CreateNewPost={newMockPost} currentPersona={currentPersona} />
    );
    wrapper.find("form").simulate("submit");
    expect(wrapper.find(Posts)).toHaveLength(1);
  });
});
