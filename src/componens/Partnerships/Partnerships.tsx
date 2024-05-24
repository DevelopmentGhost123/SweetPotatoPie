import { BrowserRouter as Router } from "react-router-dom";
import ShapeFuture from "./ShapeFuture/ShapeFuture";
import Realm from "./Realm/Realm";
import Saints from "./Saints/Saints";
import ShopJitana from "./ShopJitana/ShopJitana";
import GTHX from "./GTHX/GTHX";
const Partnerships = () => {
  return (
    <div id="partnerships">
      <Router>
        <ShapeFuture />
        <Realm />
        <Saints />
        <ShopJitana />
        <GTHX />
      </Router>
    </div>
  );
};

export default Partnerships;
