import { Link } from "react-router-dom";
import CardTopStraightCircle from "../../../Shared/CardTopStraightCircle/CardTopStraightCircle";
import VistSite from "../../../Shared/VisitSite/VisitSite";
import BlebrityPic from "../../../assets/BlebrityPic.svg";

const Blebrity = () => {
  return (
    <div className="realm">
      <div className="realm-left">
        <div className="straight-circle-cardarea">
          <CardTopStraightCircle />
          {BlebrityPic && <img src={BlebrityPic} alt="BlebrityPic" />}
        </div>
      </div>
      <div className="realm-right">
        <p className="p3">Product Strategy & Product Design</p>
        <p className="lgh4">Blebrity</p>
        <p className="p3">
          Blebrity partnered with Sweet Potato Pie to redefine their product
          strategy and product design. Together, we embarked on a collaborative
          journey to reimagine and enhance their digital offering. Our team
          spearheaded the conceptualization, development, and refinement of
          their platform, ensuring a seamless and engaging user experience.
        </p>
        <p className="p3">
          With a keen focus on product strategy and design excellence, we
          crafted a holistic approach to drive innovation and user satisfaction.
          From ideation to execution, our partnership empowered Blebrity to
          stand out in the competitive landscape and captivate their audience
          with compelling digital experiences.
        </p>
        <Link to="https://www.blebrity.com/">
          <VistSite />
        </Link>
      </div>
    </div>
  );
};

export default Blebrity;
