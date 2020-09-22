import React from 'react';
import CheckboxWithLabel from "./CheckboxWithLabel";
import { shallow } from "enzyme";

describe("testing Checkbox with label component", () => {
    it('CheckboxWithLabel changes the text after click', () => {
        const wrapper = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />)
        expect(wrapper.text()).toEqual('Off');
        wrapper.find('input').simulate('onChange');
        expect(wrapper.text()).toEqual('On');
    })
})