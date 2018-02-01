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

  it("Snapshot of component", () => {
    const btn = render(<Button onClick={() => {}} />);
    expect(btn).toMatchSnapshot();
  });

  it("Button has props", () => {
    const btn = shallow(<Button onClick={() => {}} />);
    expect(btn.props()).toBeTruthy();
  });

  it("Button has CSS", () => {
    const btn = shallow(<Button danger={false} onClick={() => {}} />);
    expect(btn.find('[data-test="button"]').hasClass("bg-red-dark")).toBe(
      false
    );
    btn.setProps({ danger: true });
    expect(btn.find('[data-test="button"]').hasClass("bg-red-dark")).toBe(true);
  });

  it("Button can be clicked", () => {
    const mockCallBack = jest.fn();
    const btn = shallow(<Button onClick={mockCallBack} />);
    btn.find('[data-test="button"]').simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});