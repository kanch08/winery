import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import Customer from "./Customer";
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";


describe('testing Customer component', () => {
    it('testing cdm',  () => {
        const mockStore = configureStore();
        const initialState = {
            someState: [],
            someReducer: {},
        };

        const store = mockStore(initialState);

        const wrapper = mount(
            <Provider store={store}>
               <Customer/>
            </Provider>
        );

        console.log(wrapper.debug())
        // sinon.spy(Customer.prototype, componentDidMount);
        // const wrapper = mount(<Customer/>);
        // expect(componentDidMount).to.have.property('callCount', 1)
    })


})