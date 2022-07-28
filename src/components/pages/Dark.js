import React from "react";
import Header from "../dark-elements/Header";
import DarkHome from "../dark-elements/Dark-home";
import DarkForm from "../dark-elements/DarkForm";
import "../dark-elements/Dark.css";
import AboutUs from "../dark-elements/AboutUs-dark";
import Footer from "../dark-elements/Footer.js";
import News from "../dark-elements/News";

export default function Dark() {
  return (
    <div className="dark-main-page">
      <Header />
      <DarkHome />
      <AboutUs />
      <DarkForm />
      <News />
      <Footer />
    </div>
  );
}
