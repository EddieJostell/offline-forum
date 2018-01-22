import React from "react";
import { shallow, mount, render } from "enzyme";
import Button from "../components/Button";

describe("<Button />", () => {
  it("check if component exists", () => {
    const btn = shallow(<Button onClick={() => {}} />);
    expect(btn.exists()).toBeTruthy();
  });

  it("render the Button", () => {
   expect(render(<Button onClick={() => {}} />)).toBeTruthy();
  });
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
  const btn = shallow(<Button danger={true} onClick={() => {}}  />);
  expect(btn.find('[data-test="button"]').hasClass("bg-red-dark")).toBe(true);
  btn.setProps({ danger : false });
  expect(btn.find('[data-test="button"]').hasClass("bg-red-dark")).toBe(false);
  });

  it('Button can be clicked', () => {
     const mockCallBack = jest.fn();
     const btn = shallow(<Button onClick={mockCallBack} />);
     btn.find('[data-test="button"]').simulate("click");
     expect(mockCallBack.mock.calls.length).toEqual(1);
  });
