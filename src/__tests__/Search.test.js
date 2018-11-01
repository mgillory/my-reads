import React from 'react';
import { shallow } from 'enzyme';
import { sections, books as booksOnTheShelf, themeStyle, handleChange } from '../utils/testHelper';

import Search from '../components/Search';

describe('Search', () => {
  it('renders Search component', () => {
    const search = shallow(<Search
      themeStyle={themeStyle}
      sections={sections}
      booksOnTheShelf={booksOnTheShelf}
      handleChange={handleChange} />);
  });
});