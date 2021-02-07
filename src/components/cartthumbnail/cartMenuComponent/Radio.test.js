import React from 'react';
import RadioButton from "./RadioButton";
import { mount} from 'enzyme';

describe('Test Radio Button Component', () => {
    it('it tests on click event', () => {
        const onRadioChange = jest.fn();
        let wrapper = mount(<RadioButton onClick={onRadioChange}/>);
        wrapper.setProps(onRadioChange);
        wrapper.find(`input[type="radio"]`).first().simulate('click');
        expect(onRadioChange).toBeCalledWith(true);
    })
})