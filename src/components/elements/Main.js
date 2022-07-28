import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div id="mainPage" className="mainPage">
      
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
        <button className="button1" onClick={() => {
                      document.getElementById("form-div").scrollIntoView();
                    }}>Apply</button>
        <button className="button2" onClick={() => {
                      document.getElementById("aboutUs").scrollIntoView();
                    }}>Learn more</button>
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
