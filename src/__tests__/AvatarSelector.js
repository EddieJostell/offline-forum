import React from 'react';
import { shallow,  } from 'enzyme';
import AvatarSelector from '../components/AvatarSelector';

/* test('renders the AvatarSelector', () => {
  const wrapper = shallow(<AvatarSelector currentPersona="Zac" />);
  const item = wrapper.find('[data-avatarimg="avatarImg"]');
  item.find()
  console.log(wrapper.html());
}); */


describe("<AvatarSelector />", () => {
  it("renders an image", () => {
    const logo = shallow(<AvatarSelector currentPersona="Zac" />);

    expect(logo.find("img").prop("src")).toContain("zac.png");
  });
});

describe("<AvatarSelector />", () => {
  it("renders an image", () => {
    const logo = shallow(<AvatarSelector currentPersona="Esmeralda" />);

    expect(logo.find("img").prop("src")).toContain("esmeralda.png");
  });
});

describe("<AvatarSelector />", () => {
  it("renders an image", () => {
    const logo = shallow(<AvatarSelector currentPersona="Morgana" />);

    expect(logo.find("img").prop("src")).toContain("morgana.png");
  });
});