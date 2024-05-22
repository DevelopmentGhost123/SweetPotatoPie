import { BrowserRouter as Router } from "react-router-dom";
import { Welcome } from "./Welcome/Welcome";
import { Whatwedo } from "./Whatwedo/Whatwedo";
import { AboutSweetPotatoPie } from "./AboutSweetPotatoPie/AboutSweetPotatoPie";
export function Home() {
  return (
    <Router>
      <Welcome />
      <Whatwedo />
      <AboutSweetPotatoPie />
    </Router>
  );
}
