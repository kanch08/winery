import sinon from 'sinon';
import React from 'react';
import CartItemButtons from "./CartItemButtons";
import { shallow } from 'enzyme';

it('simulates click events', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<CartItemButtons onClick={onClick} />);
    wrapper.find('button').first().simulate('click');
    expect(onClick).to.have.property('callCount', 1);
});