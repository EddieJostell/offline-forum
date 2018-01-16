import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CreateNewPost from '../components/CreateNewPost';

describe('<CreateNewPost', () => {
    it('Load Create Form', () => {
        render(<CreateNewPost />);
    })
})
