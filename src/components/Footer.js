import React from 'react';
import PropTypes from 'prop-types';
import ThemeSwitcher from './ThemeSwitcher';

export default function Footer({ onThemeChange, themeStyle, darkTheme }) {
  return (
    <footer style={{ background: themeStyle.header }}>
      <div className="footer-content">
        <p style={{ color: themeStyle.textOpacity1 }}>2018 Matheus Freitas da Silva | Made with <i className="ion-ios-heart-empty" /></p>
        <ThemeSwitcher themeStyle={themeStyle} divClass="footer-theme-selector" pClass="footer-theme-selector-p" onThemeChange={onThemeChange} darkTheme={darkTheme} />
      </div>
    </footer>
  )
}

Footer.propTypes = {
  onThemeChange: PropTypes.func.isRequired,
  themeStyle: PropTypes.object.isRequired,
  darkTheme: PropTypes.bool.isRequired,
}
