import ShippingData from "./ShippingData";
import {shallow } from "enzyme";
import React from "react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

it('check name prop type', () => {
    const mockStore = configureStore();
    const initialState = {};
    const store = mockStore(initialState);
    const props = {
            name: 'jgjjgjkgkjjk',
            price: '23',
            quantity: '35',
            color: 'blue',
            images: [],
        },
        wrapper = shallow(<Provider store={store}><ShippingData {...props} /></Provider>);
    expect(wrapper.props().children.props.name).toEqual('jgjjgjkgkjjk');

});