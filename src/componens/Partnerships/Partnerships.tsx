import { BrowserRouter as Router } from "react-router-dom";
import ShapeFuture from "./ShapeFuture/ShapeFuture";
import Realm from "./Realm/Realm";
const Partnerships = () => {
  return (
    <div id="partnerships">
      <Router>
        <ShapeFuture />
        <Realm />
      </Router>
    </div>
  );
};

export default Partnerships;
