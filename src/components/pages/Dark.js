import React from "react";
import Header from "../elements/Header";
export default function Dark() {
  return (
    <div className="Dark-page">
      <Header />
      <div>
        <video
          src={require("../../assets/videos/human-female-02.webm")}
          preload="none"
          autoPlay
          loop
        />
      </div>
    </div>
  );
}
