import React from "react";
import { shallow, mount, render } from "enzyme";
import CreateNewPost from "../components/CreateNewPost";

describe("<CreateNewPost", () => {
  it("Form was loaded", () => {
    const wrapper = shallow(
      <CreateNewPost author="Morgana" updatePosts={jest.fn()} />
    );
    expect(wrapper.find('form').exists()).toEqual(true);
  });

    it("submit should fire", () => {
      const onSubmit = jest.fn();
      const wrapper = mount(<CreateNewPost author="Morgana" updatePosts={onSubmit} />);

      wrapper.find('[data-type="form"]').simulate("submit");
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });

  it("Create a Post and change state onchange title & content", () => {
    // const newMockUpdate = jest.fn();
    const wrapper = mount(
      <CreateNewPost
        author="Morgana"
        updatePosts={jest.fn()}
      />
    );
    const title = { target: { name: "title", value: "My Awesome Post" } };
    const content = {
      target: {
        name: "content",
        value: "Awesome Content Right here! You Definetly need to read this!"
      }
    };
    wrapper.find('input[name="title"]').simulate("change", title);
    wrapper.find('textarea[name="content"]').simulate("change", content);
   // wrapper.find('[data-type="form"]').simulate("submit");
    expect(wrapper.state().title).toEqual("My Awesome Post");
    expect(wrapper.state().content).toEqual("Awesome Content Right here! You Definetly need to read this!");
  
  });



});
