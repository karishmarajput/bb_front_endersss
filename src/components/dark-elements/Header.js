import React from "react";
import "./header.css";

let toggle = document.getElementsByClassName("switch-toggle")[0];
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
        <ul className="headerUl1">
          <li className="switch-btn">
            <label className="switch">
              <input
                type="checkbox"
                className="switch-toggle switchDark"
                onClick={switchToggle}
                checked="true"
              />
              <span className="slider sliderDark round"></span>
            </label>
          </li>
          <li className="aboutUsLiDark">
            <a onClick={() => {
                      document.getElementById("aboutDark").scrollIntoView();
                    }}>About Us</a>
          </li>
        </ul>
        <div className="logo">
          <img
            src={require("../../assets/images/dark-logo.png")}
            width="180"
            height="85"
          />
        </div>
        <ul className="headerUl2">
        <li className="darkNewsLi">
            <a onClick={() => {
                      document.getElementById("newsDark").scrollIntoView();
                    }}>News</a>
          </li>
          
        <li className="darkFormLi">
            <a onClick={() => {
                      document.getElementById("darkForm").scrollIntoView();
                    }}>Form</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
