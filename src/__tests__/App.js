import React from 'react';
import { render, shallow } from 'enzyme';
import App from '../components/App';

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