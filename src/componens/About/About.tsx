import { BrowserRouter as Router } from "react-router-dom";
import CultureBeyond from "./CultureBeyond/CultureBeyond";

const About = () => {
  return (
    <div id="about">
      <Router>
        <CultureBeyond />
      </Router>
    </div>
  );
};

export default About;
