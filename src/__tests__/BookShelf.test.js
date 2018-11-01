import React from 'react';
import { shallow } from 'enzyme';
import { sections, themeStyle, books, onThemeChange, handleChange, loading, darkTheme } from '../utils/testHelper';

import BookShelf from '../components/BookShelf';

describe('BookShelf', () => {
  it('renders BookShelf component', () => {
    const bookshelf = shallow(<BookShelf
      sections={sections}
      themeStyle={themeStyle}
      books={books}
      onThemeChange={onThemeChange}
      handleChange={handleChange}
      loading={loading}
      darkTheme={darkTheme} />);
  });
});