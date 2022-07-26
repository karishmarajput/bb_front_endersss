import React from "react";
import Header from "../dark-elements/Header";
import DarkHome from "../dark-elements/Dark-home";
import DarkForm from "../dark-elements/DarkForm";
import "../dark-elements/Dark.css";
export default function Dark() {
  return (
    <div className="dark-main-page">
      <Header/>
      <DarkHome />
      <DarkForm/>
      <DarkForm/>
    </div>
  );
}
