import React from 'react';
import { shallow } from 'enzyme';
import { themeStyle, onThemeChange, darkTheme, divClass, pClass } from '../utils/testHelper';

import ThemeSwitcher from '../components/ThemeSwitcher';

describe('ThemeSwitcher', () => {
  it('renders ThemeSwitcher component', () => {
    const themeswitcher = shallow(<ThemeSwitcher
      themeStyle={themeStyle}
      onThemeChange={onThemeChange}
      darkTheme={darkTheme}
      divClass={divClass}
      pClass={pClass} />);
  });
});