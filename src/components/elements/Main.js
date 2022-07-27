import React from "react";
import "./Main.css";

function darkModeToggle() {
  let toggle = document.getElementsByClassName("darkModeToggle")[0];
  console.log(toggle.checked);
  let homeDiv = document.getElementById("homeDiv");
  if (toggle.checked) {
    homeDiv.classList.add("homeDark");
  } else {
    homeDiv.classList.remove("homeDark");
  }
  // if (window.location.href.substring("dark")) {
  //   toggle.checked = true;
  // } else {
  //   toggle.checked = false;
  // }
  // if (toggle) window.location.href += "dark";
  // else {
  //   window.location.href = windowLoc;
  // }
}
export default function Main() {
  return (
    <div id="mainPage" className="mainPage">
      <div className="darkMode-div">
        <h6>Dark Mode:</h6>

        <li className="switch-btn darkModeBtn">
          <label class="switch darkSwitch">
            <input
              type="checkbox"
              className="switch-toggle darkModeToggle"
              onClick={darkModeToggle}
              checked="false"
            />
            <span class="slider round"></span>
          </label>
        </li>
      </div>
      <div className="tagline">
        <h1 className="tag-head">Experience</h1>
        <h1 className="tag-head">growth with the best.</h1>
        <h3 className="tag-desc">
          At A1A, we are always on the lookout for enthusiastic, energetic
          people to join our incredible team. If you enjoy helping people, and
          love working in a team environment, a car wash job with A1A may be
          right for you.
        </h3>
      </div>
      <div className="tagline-2">
        <button className="button1">Apply</button>
        <button className="button2">Learn more</button>
      </div>
      <div className="pic">
        <img
          className="walter-pic"
          src={require("../../assets/images/home2.png")}
        />
      </div>
    </div>
  );
}
