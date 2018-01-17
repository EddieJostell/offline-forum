import React from 'react';
import { mount, render } from 'enzyme';
import PersonaSwitcher from '../components/PersonaSwitcher';
import App from '../components/App';


describe("<PersonaSwitcher />", () => {
  it("Switching persona", () => {
    const wrapper = mount(<App />);
    wrapper.setState({ currentPersona : "Zac" })
    const personaState = wrapper.state().currentPersona;
    const wrapperPersona = render(<PersonaSwitcher currentPersona={personaState} changePersona={() => {}} />)
    const selectWrapper = wrapper.find('select');
    expect(wrapperPersona.find('select [selected]').val()).toEqual('Zac');
    selectWrapper.simulate('change', {target : { value : "Morgana" }});
    const personaState2 = wrapper.state().currentPersona;
    const wrapperPersona2 = render(<PersonaSwitcher currentPersona={personaState2} changePersona={() => {}} />)
    expect(wrapperPersona2.find('select [selected]').val()).toEqual('Morgana');
  }); 
});