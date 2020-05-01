import React from 'react';
import {shallow} from 'enzyme';
import ViewTab from '../ViewTab';
import {LIST_VIEW, CHART_VIEW} from '../../util';

const props = {
  activeTab: LIST_VIEW,
  onTabChange: jest.fn()
}

const e = {
  preventDefault: jest.fn()
}

let wrapper;
describe('test ViewTab Component', () => {
  beforeEach(() => {
    wrapper = shallow(<ViewTab {...props}/>)
  })
  it('should render the component match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should render tab active correct', () => {
    expect(wrapper.find('ul li').first().find('a').props().className).toEqual('nav-link active')
  })
  it('should trigger correct function callback', () => {
    const a = wrapper.find('ul li').first().find('a')
    a.simulate('click', e)
    expect(props.onTabChange).toHaveBeenCalledWith(LIST_VIEW)
  })
})