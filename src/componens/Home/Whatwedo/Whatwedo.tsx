import { Link } from "react-router-dom";

import Group4 from "../../../assets/Group4.svg";

import "./styles.css";
import CardTopCircleRectangle from "../../../Shared/CardTopCircleRectangle/CardTopCircleRectangle";

export function Whatwedo() {
  return (
    <div className="what-we-do-area">
      <p className="lgh4">What we do?</p>
      <div className="whatwedo">
        <div className="whatwedo-left">
          <div className="css-style-sample">
            <CardTopCircleRectangle />
            <div className="css-style-main">
              <div className="css-main-textarea">
                <p className="p5">&lt;style&gt;</p>
                <p className="p5">
                  <span className="red-color"> .breadcumbs </span>
                  <span className="blue-color"> {`{`}</span>
                </p>
                <p className="p5"> margin: 0 0 2em;</p>
                <p className="p5 blue-color"> {`}`}</p>
                <p className="p5">
                  <span className="red-color"> .breadcrumbs__list </span>
                  <span className="blue-color"> {`{`}</span>
                </p>
                <p className="p5"> list-style-type: none;</p>
                <p className="p5"> margin: 0;</p>
                <p className="p5"> padding: 0;</p>
                <p className="p5 blue-color"> {`}`}</p>
                <p className="p5">
                  <span className="red-color"> .breadcrumbs__item </span>
                  <span className="blue-color"> {`{`}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="whatwedo-second-right">
          <div className="second-right-textarea">
            <p className="lgh4">UI/UX Design</p>
            <p className="lgh4">Product Design</p>
            <p className="lgh4 lgh4-last-bottom-margin">Engineering</p>
          </div>

          <div className="seeall">
            <div className="seeall-textarea">
              <p className="p1">See all</p>
            </div>
            <div className="seeall-image">
              <Link to="https://drive.google.com/file/d/1SwQO6OVvTaWHUHlQ1kEyKe-tBeUklfkV/view?usp=drive_link">
                {Group4 && <img src={Group4} alt="Group4" />}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
