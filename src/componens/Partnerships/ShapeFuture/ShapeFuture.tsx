import Highlight1 from "../../../assets/Highlight1.svg";
import Underline06 from "../../../assets/Underline_06.svg";
import Ellipse from "../../../assets/Ellipse.svg";
import "./styles.css";

const ShapeFuture = () => {
  return (
    <div className="shape-future">
      <div className="shape-future-left">
        <div className="our-partnerships">
          <h4>Our partnerships</h4>
          {Highlight1 && <img src={Highlight1} alt="Highlight1" />}
        </div>
        <div className="future-together">
          <h1>Let's shape the future together</h1>
          <div className="underline06">
            {Underline06 && <img src={Underline06} alt="Underline06" />}
          </div>
        </div>
      </div>
      <div className="shape-future-right">
        {Ellipse && <img src={Ellipse} alt="Ellipse" />}
      </div>
    </div>
  );
};

export default ShapeFuture;
