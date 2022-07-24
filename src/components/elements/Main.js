import React from 'react';
import './Main.css';

export default function Main() {
  return (
    <div className="mainPage">
      <div className="tagline">
        <h1 className="tag-head">Reach your Customers on demand</h1>
        <h3 className="tag-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          posuere consectetur pharetra. Integer vitae laoreet lacus. Morbi
          iaculis aliquet magna, at volutpat sem lacinia ac.
        </h3>
      </div>
      <div className="tagline-2">
        <button className="button1">Apply</button>
        <button className="button2">Learn more</button>
      </div>
      <div className="pic">
        <img
          className="walter-pic"
          src={require('https://github.com/karishmarajput/bb_front_endersss/blob/main/src/assets/images/home2.png?raw=true')}
        />
      </div>
    </div>
  );
}
