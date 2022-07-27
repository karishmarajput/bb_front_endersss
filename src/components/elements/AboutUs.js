import React from "react";
import "./aboutUs.css";
function AboutUs() {
  return (
    <div className="aboutUs " id="aboutUs">
      <div className="aboutUs-main ">
        <div className="image-div">
          <img
            className="about-us-img"
            src={require("../../assets/images/a1a-pic.png")}
          />
        </div>
        <div className="about-info">
          <h1>You've tried the rest,</h1>
          <h1> now try the best!</h1>
          <br></br>
          <p>
            You will always make a great first impression with a shiny, clean
            car. At A1A Wash, you will find wide bays for cleaning your car plus
            all of the materials you need. Unlimited microfiber towels, Free
            vacuums including a crevice and a claw tool, glass cleaner, interior
            cleaner, Citrus fragrance, Compressed air.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
