import React from 'react';
import { shallow } from 'enzyme';
import { themeStyle, handleChange, sections } from '../utils/testHelper';

import BookList from '../components/BookList';

describe('BookList', () => {
  it('renders BookList component', () => {
    const booklist = shallow(<BookList
      themeStyle={themeStyle}
      handleChange={handleChange}
      sections={sections} />);
  });
});