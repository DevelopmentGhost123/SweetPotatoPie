import RightArrow from "../../../assets/RightArrow.svg";
import github from "../../../assets/github.svg";
import likedin from "../../../assets/linkedin.svg";
import Sendlight from "../../../assets/Send_light.svg";
import Group6 from "../../../assets/Group6.svg";
import { Link } from "react-router-dom";
import "./styles.css";

const WorkWithUs = () => {
  return (
    <div className="work-with-us">
      <div className="work-with-us-first">
        <p className="lgh4">Work with us</p>
        <div className="get-started">
          <p className="p1">Get started</p>
          <div className="round-rectangle">
            <img src={RightArrow} alt="RightArrow" />
          </div>
        </div>
      </div>
      <div className="contact-with-us">
        <div className="contact-with-us-left">
          <div>
            <p className="p1">Check our works</p>
            <Link to="https://github.com/Steddyrockin">
              <img src={github} alt="github" />
            </Link>
          </div>

          <div>
            <p className="p1">Check us on</p>
            <Link to="https://www.linkedin.com/company/sweet-potato-pie-ventures/">
              <img src={likedin} alt="likedin" />
            </Link>
          </div>
          <div>
            <p className="p1">Say hi</p>
            <div className="say-hi">
              <img src={Sendlight} alt="Sendlight" />
              <p className="p3">hi@sweetpotatopieventures.com</p>
            </div>
          </div>
        </div>
        <div className="contact-with-us-right">
          <img src={Group6} alt="Group6" />
          <p className="p2">2024 Sweet Potato Pie, Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
