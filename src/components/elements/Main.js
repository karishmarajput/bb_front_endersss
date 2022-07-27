import React from "react";
import "./Main.css";

function darkModeToggle(){
  let toggle = document.getElementsByClassName("darkModeToggle")[0];
  console.log(toggle.checked);
  let homeDiv =document.getElementById("homeDiv");
  if(toggle.checked){
    homeDiv.classList.add("homeDark")
  }else{
    homeDiv.classList.remove("homeDark")
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
            checked= "false"
          />
          <span class="slider round"></span>
        </label>
      </li>
      </div>
      <div className="tagline">
        <h1 className="tag-head">Reach your</h1>
        <h1 className="tag-head">Customers on demand</h1>
        <h3 className="tag-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          posuere consectetur pharetra. Integer vitae laoreet lacus. Morbi
          iaculis aliquet magna, at volutpat sem lacinia ac.
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
