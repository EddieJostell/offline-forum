import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CreateNewPost from '../components/CreateNewPost';
import App from '../components/App';

describe('<CreateNewPost', () => {
    it('Load Create Form', () => {
        const wrapper = mount(<App />);
        render(<CreateNewPost />);
    })
})
