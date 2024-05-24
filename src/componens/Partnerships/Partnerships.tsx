import { BrowserRouter as Router } from "react-router-dom";
import ShapeFuture from "./ShapeFuture/ShapeFuture";
import Realm from "./Realm/Realm";
import Saints from "./Saints/Saints";
const Partnerships = () => {
  return (
    <div id="partnerships">
      <Router>
        <ShapeFuture />
        <Realm />
        <Saints />
      </Router>
    </div>
  );
};

export default Partnerships;
