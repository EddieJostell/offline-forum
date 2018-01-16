import React from 'react';
import { mount } from 'enzyme';
import PersonaSwitcher from '../components/PersonaSwitcher';


describe("<PersonaSwitcher />", () => {
  it("renders an image", () => {
    const wrapper = mount(<PersonaSwitcher currentPersona="Morgana" changePersona={() => {}} />);
    const selectWrapper = wrapper.find('[data-selectnpc="select"]');   
    selectWrapper.simulate('change', {target : { value : "Zac"}});
    expect(wrapper.props().currentPersona).toBe("Zac");
  }); 
});
