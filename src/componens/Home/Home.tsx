import { BrowserRouter as Router } from "react-router-dom";
import { Welcome } from "./Welcome/Welcome";
import { Whatwedo } from "./Whatwedo/Whatwedo";
export function Home() {
  return (
    <Router>
      <Welcome />
      <Whatwedo />
    </Router>
  );
}
