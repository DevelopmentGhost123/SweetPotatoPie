import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";

export function Header() {
  return (
    <div className="header">
      <Router>
        <div>
          <h4>Sweet Potato Pie</h4>
        </div>
        <div className="header-right p1">
          <p>home</p>
          <p>partnerships</p>
          <p>about</p>
          <p>contact</p>
        </div>
      </Router>
    </div>
  );
}
