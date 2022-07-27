import React from "react";
import Header from "../elements/Header.js";
import Main from "../elements/Main.js";
import Stats from "../elements/Stats.js";
import Video from "../elements/Video.js";
import About from "../elements/AboutUs.js";
import BasicExample from "../elements/Form.js";
import Footer from "../elements/Footer.js";
export default function Home() {
  return (
    <div className="home-div " id="homeDiv">
      <Header />
      <Main />
      <Stats />
      <About />
      <BasicExample />
      <Footer />
    </div>
  );
}
