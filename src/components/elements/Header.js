import React from "react";
import "./Header.css";

const windowLoc = window.location.href;

let switchToggle = (props, context) => {
  let toggle = document.getElementsByClassName("switch-toggle")[0];
  console.log(window.location.href.substring("dark"));
  if (window.location.href.substring("dark")) {
    toggle.checked = true;
  } else {
    toggle.checked = false;
  }
  if (toggle) window.location.href += "dark";
  else {
    window.location.href = windowLoc;
  }
};

export default function Header() {
  return (
    <div className="header-main">
      <div className="header">
        <ul>
          <li className="switch-btn">
            <label class="switch">
              <input
                type="checkbox"
                className="switch-toggle"
                onClick={switchToggle}
              />
              <span class="slider round"></span>
            </label>
          </li>
          <li>
            <a href=""> Contact Us</a>
          </li>
        </ul>
        <div className="logo">
          <img
            src="https://github.com/karishmarajput/bb_front_endersss/blob/main/src/assets/images/a1a-logo.png?raw=true"
            width="130"
            height="80"
          />
        </div>
        <ul>
          <li>
            <a href="">Let's Connect</a>
          </li>
        </ul>
      </div>
      <div className="hr-line"></div>
    </div>
  );
}
