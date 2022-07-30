import React from "react";
import "./Main.css";
let click =0;
let darkModeFunc = () =>{
  console.log('dark Mode');
  let homeDiv = document.getElementById('homeDiv');
  let logo = document.getElementById("logo");
  console.log(logo)
  click++;
  if(click % 2 !== 0){
    homeDiv.classList.add('homeDark');
    logo.src = 'https://github.com/karishmarajput/bb_front_endersss/blob/main/src/assets/images/a1a-dark.png?raw=true';
  }else{
    homeDiv.classList.remove('homeDark');
    logo.src = 'https://github.com/karishmarajput/bb_front_endersss/blob/main/src/assets/images/a1a-logo.png?raw=true';
  }
}
export default function Main() {
  return (
    <div id="mainPage" className="mainPage">
      <div className="toggleDark">
          <div className="toggleDarkDiv">
            <input type="checkbox" class="checkbox" id="checkbox" onClick={darkModeFunc}/>
          <label for="checkbox" class="label">
            <i class="fas fa-moon"></i>
            <i class='fas fa-sun'></i>
            <div class='ball'/>
          </label>
          </div>
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
      <div className="pic">
        <img
          className="clip-pic"
          src={require("../../assets/images/clip-pic.png")}
        />
      </div>
    </div>
  );
}
