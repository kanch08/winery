import React from 'react'
import TestComponent3 from './index';
import { shallow, mount } from 'enzyme';
import TogglableButton from "./TogglableButton";

describe('testing TestComponent3 component', () => {
   it('test Togglable Component', () => {
       const togglableComponent = mount(<TestComponent3/>);
       const button = togglableComponent.find('button');
       button.simulate('click');
       expect(togglableComponent.state().disabled).toBeFalsy();
   })
    it('should render toggle enabled when toggle button is clicked', () => {
        const home = shallow(<TestComponent3/>);
        home.find(TogglableButton).props().onToggle();

        expect((home.find('#toggle').at(0).text())).toEqual('ToggleEnabled');
    });
    it('should render toggle enabled when toggle button is clicked', () => {
        const home = shallow(<TestComponent3/>);
        const togglableButton = home.find(TogglableButton);

        togglableButton.simulate('toggle', false);

        expect((home.find('#toggle').at(0).text())).toEqual('ToggleEnabled');
    });
})