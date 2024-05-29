import Ellipse from "../../../assets/Ellipse.svg";
import BrownCheese from "../../../assets/BrownCheese.svg";
import BeyondPicture1 from "../../../assets/BeyondPicture1.svg";
import BeyondPicture2 from "../../../assets/BeyondPicture2.svg";
import BeyondPicture3 from "../../../assets/BeyondPicture3.svg";
import Misc from "../../../assets/Misc.svg";
import BlueEllipse from "../../../assets/BlueEllipse.svg";
import CurveArrow from "../../../assets/CurveArrow.svg";

import "./styles.css";

const CultureBeyond = () => {
  return (
    <div className="culture-beyond">
      <div className="picturearea">
        {Ellipse && <img src={Ellipse} alt="Ellipse" className="ellipse" />}
        {BrownCheese && (
          <img src={BrownCheese} alt="BrownCheese" className="browncheese" />
        )}
      </div>
      <p className="lgh4">About us</p>
      <p className="lgh1">Culture Beyond Borders</p>
      <div className="beyond-picure-area">
        {BeyondPicture1 && (
          <img
            src={BeyondPicture1}
            alt="BeyondPicture1"
            className="beyond-picture-left"
          />
        )}
        {BeyondPicture2 && (
          <img
            src={BeyondPicture2}
            alt="BeyondPicture2"
            className="beyond-picture-middle"
          />
        )}
        {BeyondPicture3 && (
          <img
            src={BeyondPicture3}
            alt="BeyondPicture3"
            className="beyond-picture-right"
          />
        )}
      </div>
      <div className="beyond-textarea">
        <div className="beyond-textarea-left">
          <div className="top-misc">
            {Misc && <img src={Misc} alt="Misc" />}
          </div>
          <div className="bottom-misc">
            {Misc && <img src={Misc} alt="Misc" />}
          </div>
        </div>
        <div className="beyond-textarea-text">
          <p className="p1">
            We're not just another agency — we're your partners in progress. We
            believe in fostering a collaborative environment where knowledge is
            shared freely, and growth knows no bounds. As an extension of your
            team, we're committed to driving growth, pushing boundaries, and
            achieving success together.{" "}
          </p>
          <p className="p1">
            We relish the challenge of integrating seamlessly with teams,
            blending the energizing vibe of an agency with the stability of
            working on long-standing client platforms. This balance keeps us
            sharp and ensures that our processes never miss a beat.{" "}
          </p>
          <p className="p1">
            Whether you're looking to revamp your website, enhance your digital
            strategy, or launch a groundbreaking product, Sweet Potato Pie is
            here to help. Partner with us and discover the sweet taste of
            digital success.
          </p>
        </div>
        <div className="beyond-text-area-right">
          {BlueEllipse && (
            <img src={BlueEllipse} alt="BlueEllipse" className="blue-ellipse" />
          )}
          {CurveArrow && (
            <img src={CurveArrow} alt="CurveArrow" className="curve-arrow" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CultureBeyond;
