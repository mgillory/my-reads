import React from 'react';
import { shallow } from 'enzyme';
import { book, sections as list, themeStyle, title, shelf, onChange } from '../utils/testHelper';

import Dropdown from '../components/Dropdown';

describe('Dropdown', () => {
  it('renders Dropdown component', () => {
    const dropdown = shallow(<Dropdown
      themeStyle={themeStyle}
      list={list}
      book={book}
      title={title}
      shelf={shelf}
      onChange={onChange} />);
  });
});