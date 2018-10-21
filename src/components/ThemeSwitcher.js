import React from 'react'

export default function ThemeSwitcher({ themeStyle, divClass, pClass, onThemeChange, darkTheme }) {
  return (
    <div className={divClass}>
      <p style={{ color: themeStyle.textOpacity1 }} className={pClass}>Dark theme: </p>
      <label className="switch">
        <input type="checkbox" onChange={onThemeChange} checked={darkTheme} />
        <span className="slider round"></span>
      </label>
    </div>
  )
}
