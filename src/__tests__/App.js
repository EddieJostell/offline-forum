import React from 'react';
import { render, mount } from 'enzyme';
import App from '../components/App';
import PersonaSwitcher from '../components/PersonaSwitcher';

test('renders the app', () => {
  render(<App />);
});


describe("<PersonaSwitcher />", () => {
  it("Switching persona", () => {
    const wrapper = mount(<App />);
    wrapper.setState({ currentPersona: "Morgana" });
    const personaState = wrapper.state().currentPersona;
    console.log(personaState);
    expect(personaState).toBe("Morgana")
    const wrapperPersona = mount(<PersonaSwitcher currentPersona={personaState} changePersona={() => {}} />)
    console.log(wrapperPersona.props().currentPersona);
    const selectWrapper = wrapperPersona.find('[data-selectnpc="select"]');
    selectWrapper.simulate('change', {target : { value : "Morgana"}});
    const newState = wrapper.state().currentPersona;
    console.log(newState);
    expect(wrapperPersona.props().currentPersona).toBe("Morgana");
  }); 
});
/* wrapperPersona.setProps({ currentPersona: 'Morgana' }); */