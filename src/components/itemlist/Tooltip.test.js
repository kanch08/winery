import Tooltip from "./Tooltip";
import { shallow } from 'enzyme';
import React from 'react';

describe('testing tootlip component', () => {
    it('div class matching', () => {
        const wrapper = shallow(<Tooltip/>);
        expect( wrapper.find('div').hasClass('tooltip')).toEqual( true);
    })
    it('component contains div', () => {
        const wrapper =  shallow(<Tooltip/>);
        expect(wrapper.is('div')).toEqual(true);
    });

    it('paragraph value matching', () => {
        const wrapper =  shallow(<Tooltip/>);
        expect(wrapper.find('p').text()).toEqual('sgcshcgsdhc');
    })
    it('component contains p', () => {
        const wrapper =  shallow(<Tooltip/>);
        expect(wrapper.find('p')).toBeTruthy();
    })


})