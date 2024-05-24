import { BrowserRouter as Router } from "react-router-dom";
import ShapeFuture from "./ShapeFuture/ShapeFuture";
import Realm from "./Realm/Realm";
import Saints from "./Saints/Saints";
import ShopJitana from "./ShopJitana/ShopJitana";
const Partnerships = () => {
  return (
    <div id="partnerships">
      <Router>
        <ShapeFuture />
        <Realm />
        <Saints />
        <ShopJitana />
      </Router>
    </div>
  );
};

export default Partnerships;
