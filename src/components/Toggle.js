import React, { useEffect, useState } from 'react';
import './styles/toggle.css';
import { setTheme } from './utils/themes';

function Toggle() {
    // false = dark mode because of the way I wrote the CSS
    const [active, setActive] = useState(false)
    // the opposite, for screen readers
    const [ariaActive, setAriaActive] = useState(true)
    let theme = localStorage.getItem('theme')

    const changeThemeAndToggle = () => {
      if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light')
        setActive(true)
        setAriaActive(false)
      } else {
        setTheme('theme-dark')
        setActive(false)
        setAriaActive(true)
      }
    }

    const handleOnClick = () => {
      changeThemeAndToggle()
    }

    const handleKeypress = e => {
        if (e.code === "Enter") {
          changeThemeAndToggle()
        }
      }

    useEffect(() => {
      if (localStorage.getItem('theme') === 'theme-dark') {
        setActive(false)
        setAriaActive(true)
      } else if (localStorage.getItem('theme') === 'theme-light') {
        setActive(true)
        setAriaActive(false)
      }
    }, [theme])

    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode}>
      <div className="containerswitch">
      <span style={{ color: "var(--dark-lua)" }}>☽</span>
      <div className="switch-checkbox">
      <label htmlFor="toggle" className="switch">

        <input type="checkbox" aria-label="dark mode toggle" role="switch" onChange={() => setDarkMode(!darkMode)} aria-checked={ariaActive} onKeyPress={handleKeypress} id="toggle" className="toggle--checkbox" onClick={handleOnClick} checked={active} readOnly />
          <span className="slider round"></span>
        </label>
      </div>
      <span style={{ color: "var(--dark-sol)" }}>☀︎</span>
      </div>
      </div>
    )
}

export default Toggle;
