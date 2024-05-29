import { Link } from "react-router-dom";
import CardTopCircleRectangle from "../../../Shared/CardTopCircleRectangle/CardTopCircleRectangle";
import VistSite from "../../../Shared/VisitSite/VisitSite";
import ImagePlaceholder from "../../../assets/Image placeholder.svg";
import "./styles.css";

const Saints = () => {
  return (
    <div className="saints">
      <div className="saints-left">
        <p className="p3">Product Strategy & UI/UX</p>
        <p className="lgh4">Saints</p>
        <p className="p3">
          Saints in Los Angeles enlisted Sweet Potato Pie to revolutionize their
          digital presence. Collaborating seamlessly with their marketing and
          technical teams, we took charge of designing, building, and refining
          their marketing platform. Our expertise led to a recent overhaul,
          including a fresh brand rollout and a sleek redesign.
        </p>
        <p className="p3">
          With a focus on enhancing user experience and boosting conversions, we
          crafted a growth strategy that leverages top-tier UX, CRO, and
          frontend development principles. Utilizing cutting-edge technologies
          like ReactJS and Gatsby, we've equipped Saints in Los Angeles to
          dominate the e-commerce landscape.
        </p>
        <Link to="https://saintsinlosangeles.com/">
          <VistSite />
        </Link>
      </div>
      <div className="saints-right">
        <div className="circle-rectangle-cardarea">
          <CardTopCircleRectangle />
          {ImagePlaceholder && <img src={ImagePlaceholder} alt="Image" />}
        </div>
      </div>
    </div>
  );
};

export default Saints;
