import React from "react";
import { shallow, mount, render } from "enzyme";
import Button from "../components/Button";

describe("<Button />", () => {
  it.skip("render the Button", () => {
    render(<Button />);
  });
});

it.skip("check if HOC Button exists", () => {
  const btn = shallow(<Button />);
  expect(btn.find('[data-test="button"]').exists());
});

it.skip("Snapshot of component", () => {
  const btn = render(<Button onClick="onClick" />);
  expect(btn).toMatchSnapshot();
});

it("Button has props", () => {
  const btn = shallow(<Button />);
  //  console.log(btn.props());
  expect(btn.props()).toBeTruthy();
});

it("Button has CSS", () => {
  const btn = shallow(<Button />);
  console.log(btn.instance().);
  expect(btn.props().className).toEqual(
    "bg-indigo-dark hover:bg-indigo-darker text-white font-bold py-2 px-4 rounded-full "
  );
 
});
