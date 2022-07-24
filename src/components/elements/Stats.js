import React from 'react';
import './stats.css';
import { FaAngleRight } from 'react-icons/fa';

function Stats() {
  return (
    <div>
      <div className="stats-div">
        <div className="show-numbers">
          <div className="stats-data">
            <h1>$125+</h1>
            <h6>Avg Annual Income</h6>
          </div>
          <div className="stats-data">
            <h1>3X</h1>
            <h6>Growth Rate</h6>
          </div>
        </div>

        <div className="stats-details">
          <div className="stats-tour">
            <a href="#video-div">
              Get a tour <FaAngleRight width="20" height="20" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Stats;
