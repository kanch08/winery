import React from 'react'
import { shallow } from 'enzyme'
import List from "./components/List";
import Paragraph from "./components/Paragraph";
import Toggle from "./components/Toggle";
import Tooltip from "./components/itemlist/Tooltip";
import UserLink from "./components/UserLink";
import ProductThumbnail from "./components/cartthumbnail/ProductThumbnail";
import toJson from "enzyme-to-json";
import TestComponent from "./components/TestComponent/index";
import TestComponent1 from "./components/TestComponent1/index";

//
// describe('Paragraph' , () => {
//   it('should render children inside a p tag',  () => {
//     const wrapper = shallow(<Paragraph>This is my first test</Paragraph>);
//     const paragraph = wrapper.find('p');
//     expect(paragraph).toHaveLength(1);
//     expect(paragraph.text()).toEqual('This is my first test')
//   })
// })
describe('List'  , () => {
  it('should render This list is empty inside a paragraph componenet if items list is an empty array' , () => {
    const wrapper = shallow(<List items={[]} />);
    const paragraph = wrapper.find(Paragraph);
    expect (paragraph.props().children).toEqual('This list is empty');
  })

  // it('should render a list with the body of each item inside a div' , () => {
  //   const listItems = [{id:1, body: 'Shopping'}, {id:2, body: 'Exercise'}, {id:3 , body: 'Cook'}];
  //   const wrapper = shallow(<List items={listItems} />);
  //   const items = wrapper.find('div[class="item"]');
  //   // expect(item).toHaveLength(listItems.length);
  //   expect(items.first().text()).toEqual('Shopping');
  // })

  it('should render a list with the body of each item inside a div', () => {
    const itemsArray = [{ id: 1, body: 'Shopping' }, { id: 2, body: 'Exercise' }, { id: 3, body: 'Cook' }]
    const wrapper = shallow(<List items={itemsArray} />)

    const items = wrapper.find('div[className="item"]')
    expect(items).toHaveLength(itemsArray.length)
    expect(items.first().text()).toEqual('Shopping')
    console.log(wrapper.debug());
  })
})

describe('Toggle' , () => {
  describe('Behavioral(Integration', () => {
    const wrapper = shallow(<Toggle />);
    it('renders a button with "Toggle" as children', () => {
     expect(wrapper.find('button')).toHaveLength(1)
     expect(wrapper.find('button').text()).toEqual('Toggle')
    })

    it('renders "Toggled" as button children if button is clicked' , () => {
      wrapper.find('button').simulate('click');
      expect(wrapper.find('button').text()).toEqual('Toggled')
    })

    it('renders "Toggle" as button children if button is clicked' , () => {
      wrapper.find('button').simulate('click');
      expect(wrapper.find('button').text()).toEqual('Toggle')
    })
  })

  describe('Component (Unit)', () => {
    const wrapper = shallow(<Toggle />)
   describe('Toggle function' , () => {
     it('toggles "toggled" variable in state' , () => {
       expect(wrapper.state('toggled')).toBe(false)
       wrapper.instance().toggle();
       expect(wrapper.state('toggled')).toBe(true)
     })
   })
  })
})

const history = {
  push: jest.fn(),
};
describe('UserLink' , () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  const wrapper = shallow(<UserLink history={history} />);
  console.log(wrapper.debug());
  it('renders a button', () => {
    expect(wrapper.find('button').text()).toEqual('Show all users')
  });
})
describe('Product thumbnail rendering', () => {
  const wrapper = shallow(<ProductThumbnail />)
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})

describe('it renders enzyme' , () => {
  it('testing Paragraph', () => {
    const wrapper = shallow(<Paragraph/>)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})

describe('testing the Test Component', () => {
  const wrapper = shallow(<TestComponent/>)
  it('has the initial state count of zero', () => {
    expect(wrapper.state()).toEqual({ count: 0 });
  })

  it('increments by 1 on one click', () => {
    wrapper.find('#count-up').props().onClick();
    expect(wrapper.state()).toEqual({ count: 0});
  })

  it('decrements by 1 on one click', () => {
    wrapper.find('#count-down').props().onClick();
    expect(wrapper.state()).toEqual({ count: -1});
  })

  it('sets state count to 0 on click', () => {
    wrapper.setState({count: 10})
    wrapper.find('#zero-count').props().onClick();
    expect(wrapper.state()).toEqual({count: 0});
  })
})

describe('testing hook component', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(<TestComponent1 />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Count Up', () => {
    it('calls setCount with count + 1', () => {
      wrapper.find('#count-up').props().onClick();
      expect(setState).toHaveBeenCalledWith(1);
    });
  });

  describe('Count Down', () => {
    it('calls setCount with count - 1', () => {
      wrapper.find('#count-down').props().onClick();
      expect(setState).toHaveBeenCalledWith(-1);
    });
  });

  describe('Zero', () => {
    it('calls setCount with 0', () => {
      wrapper.find('#zero-count').props().onClick();
      expect(setState).toHaveBeenCalledWith(0);
    });
  });
})

describe('testing Toggle component', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(<Toggle />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Count Down', () => {
    it('calls setCount with count', () => {
      wrapper.find('button').props().onClick();
      expect(setState).toHaveBeenCalledWith(true);
    });
  });


})