import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </li>
        <li>
          <a href=""> Contact Us</a>
        </li>
      </ul>
      <div className="logo">
        <img src="../assets/images/a1a-logo.png" />
        logo
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
  );
}
