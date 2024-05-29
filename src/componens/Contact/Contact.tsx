import CardTopCircleRectangle from "../../Shared/CardTopCircleRectangle/CardTopCircleRectangle";
import Ellipse from "../../assets/Ellipse.svg";
import LeftCurvedArrow from "../../assets/LeftCurevedArrow.svg";
import Underline_04 from "../../assets/Underline_04.svg";
import BrownCheese from "../../assets/BrownCheese.svg";
import RightArrow from "../../assets/RightArrow.svg";
import github from "../../assets/github.svg";
import likedin from "../../assets/linkedin.svg";
import Sendlight from "../../assets/Send_light.svg";
import Group6 from "../../assets/Group6.svg";
import "./styles.css";

const Contact = () => {
  return (
    <div className="contact-us" id="contact">
      <div className="contact-us-area">
        <div className="contact-us-top">
          <p className="lgh4">Contact us</p>
          <div className="contact-us-top-picturearea">
            {Ellipse && <img src={Ellipse} alt="Ellipse" className="ellipse" />}
            {LeftCurvedArrow && (
              <img
                src={LeftCurvedArrow}
                alt="LeftCurvedArrow"
                className="left-curved-arrow"
              />
            )}
          </div>
        </div>

        <div className="have-project">
          <p className="lgh1">Have a project?</p>
          <div className="have-project-underline">
            {Underline_04 && <img src={Underline_04} alt="Underline_04" />}
          </div>
        </div>

        <div className="have-project-bottom">
          <CardTopCircleRectangle />
          <div className="have-project-card-bottom">
            <div className="have-project-card-bottom-first">
              {BrownCheese && <img src={BrownCheese} alt="BrownCheese" />}
              <p className="lgh2">Sweet Potato Pie</p>
            </div>
            <div className="have-project-card-bottom-second">
              <div className="card-bottom-second-top"></div>
              <div className="card-bottom-second-survey">
                <p className="lgh3">Survey for Project Estimate</p>
              </div>
              <div className="card-bottom-switch-second-acount">
                <p>stedman@auradrops.com</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScKOOP9w2t5EiIdij39JXCkQdGPJ6oww5gGW04RvF2Do9PnJQ/viewform?embedded=true">
                  <p>Switch account</p>
                </a>
              </div>
              <div className="card-bottom-switch-second-indicate">
                <p>Indicates required question</p>
              </div>
            </div>
            <div className="have-project-card-bottom-third">
              <p>Email</p>
              <p>Your email</p>
              <div className="straight"></div>
            </div>
          </div>
        </div>
        <div className="schedule-call">
          <p>Schedule a call</p>
          {RightArrow && <img src={RightArrow} alt="RightArrow" />}
        </div>
      </div>
      <div className="contact-with-us">
        <div className="contact-with-us-left">
          <div>
            <p className="p1">Check our works</p>
            <a href="https://github.com/Steddyrockin">
              <img src={github} alt="github" />
            </a>
          </div>

          <div>
            <p className="p1">Check us on</p>
            <a href="https://www.linkedin.com/company/sweet-potato-pie-ventures/">
              <img src={likedin} alt="likedin" />
            </a>
          </div>
          <div>
            <p className="p1">Say hi</p>
            <div className="say-hi">
              <img src={Sendlight} alt="Sendlight" />
              <p className="p2">hi@sweetpotatopieventures.com</p>
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

export default Contact;
