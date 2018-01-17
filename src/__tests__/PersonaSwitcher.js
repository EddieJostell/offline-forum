import React from 'react';
import { mount } from 'enzyme';
import PersonaSwitcher from '../components/PersonaSwitcher';


describe("<PersonaSwitcher />", () => {
  it("Switching persona", () => {
    const wrapper = mount(<PersonaSwitcher currentPersona="Zac" changePersona={() => {}} />);
    const selectWrapper = wrapper.find('[data-selectnpc="select"]');
    
    selectWrapper.simulate('change', {target : { value : "Morgana"}});
    wrapper.setProps({ currentPersona: 'Morgana' });
    expect(wrapper.props().currentPersona).toBe("Morgana");
  }); 
});
