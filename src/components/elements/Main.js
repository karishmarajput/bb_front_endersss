import React from "react";
import "./Main.css";
let click = 0;
function darkModeToggle() {
  click++;
  let homeDiv = document.getElementById("homeDiv");
  if (click%2 !== 0) {

    homeDiv.classList.add("homeDark");
  } else {
    homeDiv.classList.remove("homeDark");
  }
}
export default function Main() {
  return (
    <div id="mainPage" className="mainPage">
      
      <div className="darkMode-div">
        <button id="darkModeBtn"onClick={darkModeToggle}>Dark Mode:</button>
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
