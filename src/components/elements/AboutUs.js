import React from "react";
import "./aboutUs.css";
function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="aboutUs-main">
        <div className="image-div">
          <img
            className="about-us-img"
            src={require("../../assets/images/home2.png")}
          />
        </div>
        <div className="about-info">
          You've
          <br /> Tried The Rest
          <br /> Now <br />
          Try The Best
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
