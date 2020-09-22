import React from 'react';
import { mount, shallow } from 'enzyme';
import Shipping from "./Shipping";

describe('testing lifecycle methods', () => {
    it('testing component did mount', () => {
        const didMount = jest.spyOn(Shipping.prototype, 'componentDidMount');
        const wrapper = mount(<Shipping />);
        console.log(wrapper.instance());
        expect(didMount).toHaveBeenCalled();
        didMount.mockReset();
        didMount.mockRestore();
    })
})