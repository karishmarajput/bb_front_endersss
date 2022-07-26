import React from "react";
import "./header.css";
import { Navigate } from 'react-router-dom';

// const windowLoc = window.location.href;
// console.log(windowLoc)
let toggle = document.getElementsByClassName("switch-toggle")[0];
// console.log(toggle.checked)
let switchToggle = (props, context) => {
  let toggle = document.getElementsByClassName("switch-toggle")[0];
  console.log(toggle.checked)
  if (!toggle.checked){ 

    window.location.href = window.location.href.replace('/dark','');
  }
  
};

export default function Header() {
  return (
    <div className="header-main dark">
      <div className="header">
        <ul>
          <li className="switch-btn">
            <label class="switch">
              
              <input
                type="checkbox"
                className="switch-toggle"
                onClick={switchToggle}
                checked="true"
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
            <button className="login">Login</button>
          </li>
          <li>
            <button className="signup">Sign up</button>
          </li>
        </ul>
      </div>
      <div className="hr-line"></div>
    </div>
  );
}