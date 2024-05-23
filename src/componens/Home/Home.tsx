import { BrowserRouter as Router } from "react-router-dom";
import { Welcome } from "./Welcome/Welcome";
import { Whatwedo } from "./Whatwedo/Whatwedo";
import { AboutSweetPotatoPie } from "./AboutSweetPotatoPie/AboutSweetPotatoPie";
import OurPartnerships from "./OurPartnerships/OurPartnerships";
import WorkWithUs from "./WorkWithUs/WorkWithUs";
export function Home() {
  return (
    <div id="home">
      <Router>
        <Welcome />
        <Whatwedo />
        <AboutSweetPotatoPie />
        <OurPartnerships />
        <WorkWithUs />
      </Router>
    </div>
  );
}
