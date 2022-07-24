import React from 'react';
import './Header.css';
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
  );
}
