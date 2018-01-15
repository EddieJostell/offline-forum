import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Button from '../components/Button';

describe('<Button />', () => {
    it.skip('render the Button', () => {
        render(<Button />);
    });
} )

it.skip('check if HOC Button exists', () => {
    const btn = shallow(<Button />);
    expect(btn.find('[data-test="button"]').exists());
})

it.skip('Has props shown in Snapshot', () => {
    const btn = shallow(<Button onClick="onClick" />);
    expect(btn).toMatchSnapshot();
});


