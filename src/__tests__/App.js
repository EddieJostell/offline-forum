import React from 'react';
import { render, shallow, mount } from 'enzyme';
import App from '../components/App';
import PersonaSwitcher from '../components/PersonaSwitcher';

test('renders the app', () => {
  render(<App />);
});

describe("What page am I on?", () => {
  it('Expect page "home"', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ currentPage : "home" })
    wrapper.instance().changePage();
    expect(wrapper.state().currentPage).toBe("bot"); 
  });

  it('Expect page "bot"', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ currentPage : "bot" })
    wrapper.instance().changePage();
    expect(wrapper.state().currentPage).toBe("home"); 
  });
});

describe("<PersonaSwitcher />", () => {
  it('Switching persona', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(PersonaSwitcher).render().find('select').val()).toEqual('Zac');
    let selectWrapper = wrapper.find('select');
    selectWrapper.simulate('change', {target : { value : "Esmeralda" }});
    expect(wrapper.state().currentPersona).toEqual('Esmeralda');
  });
});