import React from 'react';
import { shallow } from 'enzyme';
import { themeStyle, onThemeChange, darkTheme } from '../utils/testHelper';

import Footer from '../components/Footer';

describe('Footer', () => {
  it('renders Footer component', () => {
    const footer = shallow(<Footer
      themeStyle={themeStyle}
      onThemeChange={onThemeChange}
      darkTheme={darkTheme} />);
  });
});