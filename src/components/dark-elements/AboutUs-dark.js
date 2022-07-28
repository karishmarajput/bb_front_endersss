import React from "react";
// import "./aboutUs.css";
function AboutUs() {
  return (
    <div className="aboutUs dark aboutDark">
      <div className="aboutUs-main">
        <div className="image-div">
          <img
            className="about-us-img"
            src={require("../../assets/images/dark-about.png")}
          />
        </div>
        <div className="about-info">
          <h1>We're not in the meth business.</h1>
          <h1>We're in the empire business.</h1>
          <br></br>
          <p>
            At Heisenberg, we are always looking for customer satisfaction. The
            product we offer is made in labs with utmost safety procedure and is
            guaranteed to provide you with good time with every bite.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
