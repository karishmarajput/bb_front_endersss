import React from 'react'
import Wave from 'react-wavify'

export default function Waves (){
    return(
  <Wave fill='#f79902'
        paused={false}
        className="wave"
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
  />
)
}