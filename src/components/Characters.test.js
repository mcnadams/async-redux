import { shallow } from 'enzyme';
import React from 'react';
import Characters from './Characters';

describe('Characters component', () => {
  it('renders Characters', () => {
    const wrapper = shallow(<Characters characters={[{ 
      name: 'Bonnie',
      photoUrl: './path/to/image',
      id: '2'
    }]}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
