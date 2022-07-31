import React from "react";
import Header from "../dark-elements/Header";
import DarkHome from "../dark-elements/Dark-home";
import DarkForm from "../dark-elements/DarkForm";
import "../dark-elements/Dark.css";
import AboutUs from "../dark-elements/AboutUs-dark";
import Footer from "../dark-elements/Footer.js";
import News from "../dark-elements/News";
import WaveElement from "../dark-elements/Wave";
import '../../darkResponsive.css';
export default function Dark() {
  return (
    <div className="darkMain">
    <div className="dark-main-page">
      <Header />
      <DarkHome />
      <WaveElement/>
      <AboutUs />
      <DarkForm />
      <News />
      <Footer />
    </div>
    </div>
  );
}
