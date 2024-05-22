import { Link } from "react-router-dom";

import Group4 from "../../../assets/Group4.svg";
import styleText from "../../../assets/styleText.svg";

import "./styles.css";

export function Whatwedo() {
  return (
    <div>
      <h4>What we do?</h4>
      <div className="whatwedo">
        <div className="css-style-sample">
          <div className="css-style-titlebar">
            <div className="circle-repeat">
              {[0, 1, 2].map((index) => (
                <div key={index} className="circle-sample"></div>
              ))}
            </div>
            <div className="round-rectangle-repeat">
              {[0, 1, 2].map((index) => (
                <div key={index} className="round-rectangle-sample"></div>
              ))}
            </div>
          </div>
          <div className="css-style-main">
            <div className="css-main-textarea p4">
              {styleText && <img src={styleText} alt="styleText" />}
            </div>
          </div>
        </div>

        <div className="whatwedo-second-right">
          <div className="second-right-textarea">
            <h4>UI/UX Design</h4>
            <h4>Product Design</h4>
            <h4>Engineering</h4>
          </div>

          <div className="seeall p1">
            <p>See all</p>
            <Link
              to="https://drive.google.com/file/d/1SwQO6OVvTaWHUHlQ1kEyKe-tBeUklfkV/view?usp=drive_link"
              className="seeall-image"
            >
              {Group4 && <img src={Group4} alt="Group4" />}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
