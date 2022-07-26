import React from "react";
import Header from "../elements/Header";
import DarkHome from "../dark-elements/Dark-home";
import "../dark-elements/Dark.css";
export default function Dark() {
  return (
    <div className="dark-main-page">
      <DarkHome />
      {/* <Header /> */}
    </div>
  );
}
