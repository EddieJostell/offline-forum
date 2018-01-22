import React from "react";
import { render } from "enzyme";
import SingleComment from "../components/SingleComment";

describe('<Comments />', () => {
  it('Should remove post', () => {
    const wrapper = render(<SingleComment currentPersona="Zac" onClick={() => {}} />);
    const post = wrapper.find('[data-type="comment"]');
    expect(post).toHaveLength(0);
  });
});