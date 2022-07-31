import Wave from "react-wavify";

export default function WaveElement(){
    return(
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
    );
}