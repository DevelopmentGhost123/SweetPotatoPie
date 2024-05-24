import Ellipse from "../../../assets/Ellipse.svg";
import BrownCheese from "../../../assets/BrownCheese.svg";
import BeyondPicture1 from "../../../assets/BeyondPicture1.svg";
import BeyondPicture2 from "../../../assets/BeyondPicture2.svg";
import BeyondPicture3 from "../../../assets/BeyondPicture3.svg";

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
      <h4>About us</h4>
      <h1>Culture Beyond Borders</h1>
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
    </div>
  );
};

export default CultureBeyond;
