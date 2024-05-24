import { BrowserRouter as Router } from "react-router-dom";
import CultureBeyond from "./CultureBeyond/CultureBeyond";
import FlagShip from "./FlagShip/FlagShip";
import WhyChooseSweet from "./WhyChooseSweet/WhyChooseSweet";
import WorkWithUs from "../Home/WorkWithUs/WorkWithUs";

const About = () => {
  return (
    <div id="about">
      <Router>
        <CultureBeyond />
        <FlagShip />
        <WhyChooseSweet />
        <WorkWithUs />
      </Router>
    </div>
  );
};

export default About;
