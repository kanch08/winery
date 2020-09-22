import React from 'react';
import { mount, shallow } from 'enzyme';
import DataTable from "./DataTable";
import toJson from "enzyme-to-json";

describe('testing Data table component',  () => {
    let spy;
    const addedItems = {
        name: 'kanchan',
        work: 'SE',
    }
    it('test props of DataTable', () => {

        const wrapper= mount(<DataTable  items={addedItems}/>);
        expect(wrapper.props().items).toEqual(addedItems);
    })
    it('test the componentDid Mount', () => {
        const addedItems = [
        { name: 'kanchan'},
        {work: 'SE'},
    ]
        spy = jest.spyOn(DataTable.prototype, 'render');
        const wrapper = mount(<DataTable {...addedItems}/>);
        wrapper.instance();
        expect(spy).toHaveBeenCalled();
    })
    it('renders correctly', () => {
        const wrapper = shallow(<DataTable items={addedItems}/>)
        expect(toJson(wrapper)).toMatchSnapshot();
    })

})