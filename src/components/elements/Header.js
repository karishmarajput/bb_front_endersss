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
          <li className="contactUsLi">
            <a onClick={() => {
                      document.getElementById("footerLight").scrollIntoView();
                    }}> Contact Us</a>
          </li>
        </ul>
        <div className="logo" >
          <img
          id ="logo"
            src={require("../../assets/images/a1a-logo.png")}
            width="130"
            height="80"
          />
        </div>
        <ul>
          <li>
            <a href="https://www.instagram.com/a1acarwashltd/">Let's Connect</a>
          </li>
        </ul>
      </div>
      <div className="hr-line"></div>
    </div>
  );
}
