import Misc from "../../../assets/Misc.svg";
import WorldLight from "../../../assets/world_2_light.svg";
import CompassLight from "../../../assets/Compass_light.svg";
import MessageLight from "../../../assets/Message_light.svg";
import HappyLight from "../../../assets/happy_light.svg";
import "./styles.css";

const WhyChooseSweet = () => {
  return (
    <div className="why-choose-sweet">
      <div className="why-choose-sweet-title">
        <p className="lgh4">Why Choose Sweet Potato Pie?</p>
        <div className="why-choose-sweet-pic">
          {Misc && <img src={Misc} alt="Misc" />}
        </div>
      </div>
      <div className="world-light-area">
        {WorldLight && <img src={WorldLight} alt="WorldLight" />}
        <p className="p2">
          We bridge cultural gaps and drive meaningful impact worldwide.
        </p>
      </div>
      <div className="compass-light-area">
        {CompassLight && <img src={CompassLight} alt="CompassLight" />}
        <p className="p2">
          Our team stays ahead of the curve with cutting-edge technologies.
        </p>
      </div>
      <div className="message-light-area">
        {MessageLight && <img src={MessageLight} alt="MessageLight" />}
        <p className="p2">
          We blend innovation with creativity to deliver standout results.
        </p>
      </div>
      <div className="happy-light-area">
        {HappyLight && <img src={HappyLight} alt="HappyLight" />}
        <p className="p2">
          Your success is our priority, and we tailor our solutions to your
          unique needs.
        </p>
      </div>
    </div>
  );
};

export default WhyChooseSweet;
