import React from 'react';
import Header from '../elements/Header.js';
import Main from '../elements/Main.js';
import Stats from '../elements/Stats.js';
import Video from '../elements/Video.js';
import About from '../elements/AboutUs.js';
import BasicExample from '../elements/Form.js';
export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Stats />
      <About/>
      <BasicExample/>
    </div>
  );
}
