import { shallow } from 'enzyme';
import React from 'react';
import Character from './Character';

describe('Character component', () => {
  it('renders Character', () => {
    const wrapper = shallow(<Character character={{ 
      name: 'Bonnie',
      photoUrl: './path/to/image' 
    }}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
