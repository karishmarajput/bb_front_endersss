import React from 'react';

import ReactPlayer from 'react-player';

function Video() {
  return (
    <div>
      <div id="video-div" className="video-div">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=LIXV_swzL9Q"
          width="80vw"
          height="45vw"
        />
      </div>
    </div>
  );
}
export default Video;
