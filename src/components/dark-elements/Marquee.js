import Marquee from "react-fast-marquee";
import "./marquee.css";
function Marqueee() {
  return (
    <div className="marquee-tag">
      <Marquee
        direction="right"
        speed={60}
        gradient="false"
        gradientColor="[119, 82, 29]"
      >
        hello
      </Marquee>
    </div>
  );
}

export default Marqueee;
