import { Link } from "react-router-dom";
import CardTopStraightCircle from "../../../Shared/CardTopStraightCircle/CardTopStraightCircle";
import VistSite from "../../../Shared/VisitSite/VisitSite";
import Rectangle7 from "../../../assets/Rectangle7.svg";
import "./styles.css";

const GTHX = () => {
  return (
    <div className="gthx">
      <div className="saints-left">
        <p className="p2">Product Strategy & UI/UX</p>
        <h4>GTHX</h4>
        <p className="p2">
          GTHX joined forces with Sweet Potato Pie to elevate their product
          strategy and UI/UX design. Collaborating closely, we embarked on a
          journey to redefine and optimize their digital product offerings. Our
          team led the charge in conceptualizing, developing, and refining their
          platform to ensure seamless user interactions and engaging
          experiences.
        </p>
        <p className="p2">
          With a laser focus on product strategy and UI/UX excellence, we
          crafted a comprehensive approach aimed at driving innovation and user
          satisfaction. From inception to implementation, our partnership
          empowered GTHX to differentiate itself in the market and deliver
          exceptional value to its users.
        </p>
        <Link to="https://apps.apple.com/us/app/gthx-gratitude/id1304741675">
          <VistSite />
        </Link>
      </div>
      <div className="gthx-right">
        <div className="straight-circle-cardarea">
          <CardTopStraightCircle />
          {Rectangle7 && <img src={Rectangle7} alt="Rectangle7" />}
        </div>
      </div>
    </div>
  );
};

export default GTHX;
