import Lifecycle from "./Lifecycle";
import React from 'react';
import { mount } from 'enzyme';

describe('testing lifecycle methods', () => {
    it('testing component will mount', () => {
        const spy = jest.spyOn(Lifecycle.prototype, 'componentWillMount');
        const wrapper = mount(<Lifecycle />);
        expect(spy).toHaveBeenCalled();
        spy.mockReset();
        spy.mockRestore();
    })
    it('testing component did mount', () => {
        const didMount = jest.spyOn(Lifecycle.prototype, 'componentDidMount');
        const wrapper = mount(<Lifecycle />);
        expect(didMount).toHaveBeenCalled();
        didMount.mockReset();
        didMount.mockRestore();
    })
})