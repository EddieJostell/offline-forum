import React from 'react';
import { mount, render } from 'enzyme';
import PersonaSwitcher from '../components/PersonaSwitcher';
import App from '../components/App';


describe("<PersonaSwitcher />", () => {
  it("Switching persona", () => {
    const wrapper = mount(<App />);
    wrapper.setState({ currentPersona : "Zac" })
    let personaState = wrapper.state().currentPersona;
    let wrapperPersona = render(<PersonaSwitcher currentPersona={personaState} changePersona={() => {}} />)
    const selectWrapper = wrapper.find('select');
    expect(wrapperPersona.find('select [selected]').val()).toEqual('Zac');
    selectWrapper.simulate('change', {target : { value : "Morgana" }});
    console.log(personaState);    
    personaState = wrapper.state().currentPersona;
    console.log(personaState);
    wrapperPersona = render(<PersonaSwitcher currentPersona={personaState} changePersona={() => {}} />)
    expect(wrapperPersona.find('select [selected]').val()).toEqual('Morgana');
  }); 
});