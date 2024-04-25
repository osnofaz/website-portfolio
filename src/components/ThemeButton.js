
import React, {useState} from "react";
import '../App.css'

function ThemeButton() {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
    <div className="containerswitch">
      <span style={{ color: darkMode ? "grey" : "black" }}>☀︎</span>
      <div className="switch-checkbox">
        <label className="switch">
          <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
          <span className="slider round"> </span>
        </label>
      </div>
      <span style={{ color: darkMode ? "white" : "grey" }}>☽</span>
    </div>
    </div>
  )};


export default ThemeButton;