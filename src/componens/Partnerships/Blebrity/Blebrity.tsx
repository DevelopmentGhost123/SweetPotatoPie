import CardTopStraightCircle from "../../../Shared/CardTopStraightCircle/CardTopStraightCircle";
import VistSite from "../../../Shared/VisitSite/VisitSite";
import BlebrityPic from "../../../assets/BlebrityPic.svg";
import "./styles.css";

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
        <p className="p2">Product Strategy & Product Design</p>
        <h4>Blebrity</h4>
        <p className="p2">
          Blebrity partnered with Sweet Potato Pie to redefine their product
          strategy and product design. Together, we embarked on a collaborative
          journey to reimagine and enhance their digital offering. Our team
          spearheaded the conceptualization, development, and refinement of
          their platform, ensuring a seamless and engaging user experience.
        </p>
        <p className="p2">
          With a keen focus on product strategy and design excellence, we
          crafted a holistic approach to drive innovation and user satisfaction.
          From ideation to execution, our partnership empowered Blebrity to
          stand out in the competitive landscape and captivate their audience
          with compelling digital experiences.
        </p>
        <VistSite />
      </div>
    </div>
  );
};

export default Blebrity;
