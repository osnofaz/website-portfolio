import React, { useEffect, useState } from 'react';
import './styles/toggle.css';
import { setTheme } from './utils/themes';

function Toggle() {
    const [active, setActive] = useState(false);
    const [ariaActive, setAriaActive] = useState(true);
    const [navColour, updateNavbar] = useState(false);

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

    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
      <div className={darkMode}>
      <div className={navColour ? "containerswitch transparent" : "containerswitch"}>
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
