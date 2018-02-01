import React from "react";
import { shallow, mount, render } from "enzyme";
import Bot from "../../components/Bot/Bot";
import Message from "../../components/Bot/Message";
import MessageForm from "../../components/Bot/MessageForm";

describe("<Bot />", () => {
 let wrapper = mount(<Bot />);
  let mockItem = { target: { name: "userMessage", value: "YOLO!" } };

  beforeEach(() => {
      wrapper = mount(<Bot />);
    mockItem = { target: { name: "userMessage", value: "YOLO!" } };
  });

  jest.useFakeTimers();

  function flushPromises() {
    return new Promise(resolve => setImmediate(resolve));
  }

  it("should render component", () => {
    expect(wrapper.html()).toContain("div");
  });

it("should send a message from human and  get a reply from bot", () => {
  wrapper
    .find(MessageForm)
    .find('[type="text"]')
    .simulate("change", mockItem);
  wrapper
    .find(MessageForm)
    .find("form")
    .simulate("submit");
  expect(wrapper.state().typing).toBe(true);
  jest.runAllTimers();
  wrapper.instance().sendReply();
  return flushPromises().then(() => {
    expect(true);
    expect(wrapper.state().messages[1].bot).toBe(true);
  });
  
});
});
