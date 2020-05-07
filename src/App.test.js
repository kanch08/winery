import React from 'react';
import { shallow } from 'enzyme';
import { ToastContainer } from 'react-toastify';

import App from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.containsMatchingElement(<ToastContainer/>)).toEqual(true)
  expect(wrapper.children().length).toEqual(1);
});