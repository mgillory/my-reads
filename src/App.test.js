import React from 'react';
import { shallow } from 'enzyme';

import Search from './components/Search';

describe('<App />', () => {
  it('renders <App /> component', () => {
    const wrapper = shallow(<Search />);
  });
});