import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />)
})

it('renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      isPending: false
    }],
    searchField: '',
    isPending: false
  }
  const wrapper2 = shallow(<MainPage {...mockProps2}/>)
  expect(wrapper2.instance().filteredRobots()).toEqual([{
    id: 3,
    name: 'John',
    isPending: false
  }])
})

it('filters robots correctly 3', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      isPending: false
    }],
    searchField: 'a',
    isPending: false
  }
  const filteredRobots = [];
  const wrapper3 = shallow(<MainPage {...mockProps3}/>)
  expect(wrapper3.instance().filteredRobots()).toEqual(filteredRobots);
})
