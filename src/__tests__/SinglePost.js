import React from "react";
import { shallow, mount, render } from "enzyme";
import SinglePost from '../components/SinglePost';

describe('<SinglePost />', () => {
    it('Component should exist', () => {
        const mock = jest.fn();
        const wrapper = mount(<SinglePost author="Zac" currentPersona="Zac" onClick={mock} />);
        const button = wrapper.find('button');
        expect(wrapper.find('[data-type="post"]')).toHaveLength(1);
        console.log(button.html())
        button.simulate('click');
        expect(wrapper.find('[data-type="post"]')).toHaveLength(1);        
    })
})

