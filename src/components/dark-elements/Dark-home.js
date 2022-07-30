import React from "react";
import "./dark-home.css";
import Wave from "react-wavify";
export default function DarkHome() {
  return (
    <div className="dark-tag" id="darkHome">
      <h1 className="tagline-d1">
        F<span className="span-td1">**</span>K
      </h1>
      <h1 className="tagline-d1-sp">BORING</h1>
      <h1 className="tagline-d1">JOB!</h1>
      <h4 className="tagline-d2">ESCAPE THE ORDINARY</h4>
      <div className="wave">      
          <Wave fill='#FECE5B'
            paused={false}
            options={{
              height: 13,
              amplitude: 15,
              speed: 0.6,
              points: 3
            }}
      />
      </div>

    </div>
  );
}
