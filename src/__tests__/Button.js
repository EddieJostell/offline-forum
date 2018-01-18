import React from "react";
import { shallow, mount, render } from "enzyme";
import Button from "../components/Button";

describe("<Button />", () => {
  it.skip("render the Button", () => {
    render(<Button />);
  });
});

it.skip("check if component exists", () => {
  const btn = shallow(<Button />);
  expect(btn.find('[data-test="button"]').exists());
});

it.skip("Snapshot of component", () => {
  const btn = render(<Button onClick="onClick" />);
  expect(btn).toMatchSnapshot();
});

it.skip("Button has props", () => {
  const btn = shallow(<Button  onClick={() => {}} />);
  //  console.log(btn.props());
  expect(btn.props()).toBeTruthy();
});

it("Button has CSS", () => {
  const btn = shallow(<Button danger={true} />);
  console.log(btn.html());
  expect(btn.find('[data-test="button"]').hasClass("bg-red-dark")).toBe(true);
  btn.setProps({ danger : false });
  expect(btn.find('[data-test="button"]').hasClass("bg-red-dark")).toBe(false);
  });
