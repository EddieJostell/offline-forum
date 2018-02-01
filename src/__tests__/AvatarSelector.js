import React from 'react';
import { shallow } from 'enzyme';
import AvatarSelector from '../components/AvatarSelector';

describe("<AvatarSelector />", () => {
  it("renders an image", () => {
    const logo = shallow(<AvatarSelector currentPersona="Zac" />);
    expect(logo.find("img").prop("src")).toContain("zac.png");
  });

  it("renders an image", () => {
    const logo = shallow(<AvatarSelector currentPersona="Esmeralda" />);
    expect(logo.find("img").prop("src")).toContain("esmeralda.png");
  });

  it("renders an image", () => {
    const logo = shallow(<AvatarSelector currentPersona="Morgana" />);
    expect(logo.find("img").prop("src")).toContain("morgana.png");
  });
});