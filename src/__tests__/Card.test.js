import React from 'react';
import { shallow } from 'enzyme';
import { books, book, handleChange, sections, themeStyle, onClick } from '../utils/testHelper';

import Card from '../components/Card';

describe('Card', () => {
  it('renders Card component', () => {
    const card = shallow(<Card
      themeStyle={themeStyle}
      handleChange={handleChange}
      sections={sections}
      books={books}
      book={book}
      onClick={onClick} />);
  });
});