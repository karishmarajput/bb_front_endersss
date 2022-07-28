import React from "react";
import "./header.css";
import { Navigate } from "react-router-dom";

// const windowLoc = window.location.href;
// console.log(windowLoc)
let toggle = document.getElementsByClassName("switch-toggle")[0];
// console.log(toggle.checked)
let switchToggle = (props, context) => {
  let toggle = document.getElementsByClassName("switch-toggle")[0];
  console.log(toggle.checked);
  if (!toggle.checked) {
    window.location.href = window.location.href.replace("/dark", "");
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
                className="switch-toggle switchDark"
                onClick={switchToggle}
                checked="true"
              />
              <span class="slider sliderDark round"></span>
            </label>
          </li>
          <li>
            <a href=""> Contact Us</a>
          </li>
        </ul>
        <div className="logo">
          <img
            src={require("../../assets/images/dark-logo.png")}
            width="180"
            height="85"
          />
        </div>
        <ul>
          <li>
            <a href="">Let's Connect</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
