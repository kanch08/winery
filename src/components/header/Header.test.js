import Header from "./Header";
import { mount, shallow } from 'enzyme';
import React from "react";
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import toJson from "enzyme-to-json";

describe("testing Header component", () => {
    it("testing connected components", () => {
        const mockStore = configureStore();
        const initialState = {};
        const store = mockStore(initialState);
        const wrapper = shallow(<Provider store={store}><Header/></Provider>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it("testing props", () => {
        const offers =[
            {
                "id":"201",
                "text":"Free shipping on prepaid-orders above INR 500"

            },
            {
                "id":"202",
                "text":"Great Offers from the Great Brands"
            },
            {
                "id":"203",
                "text":"Women Fashion Sale Coming Soon!!"
            }
        ];
        const mockStore = configureStore();
        const initialState = {};
        const store = mockStore(initialState);
        const wrapper = shallow(<Provider store={store}><Header offers={offers}/></Provider>);
        expect(wrapper.props().children.props.offers).not.toBe([]);
        // expect(wrapper.length).toEqual(1);
    })
})