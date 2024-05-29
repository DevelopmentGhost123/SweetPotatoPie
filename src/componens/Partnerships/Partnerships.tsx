import { BrowserRouter as Router } from "react-router-dom";
import ShapeFuture from "./ShapeFuture/ShapeFuture";
import Realm from "./Realm/Realm";
import Saints from "./Saints/Saints";
import ShopJitana from "./ShopJitana/ShopJitana";
import GTHX from "./GTHX/GTHX";
import Blebrity from "./Blebrity/Blebrity";
import WorkWithUs from "../Home/WorkWithUs/WorkWithUs";
import "./styles.css";

const Partnerships = () => {
  return (
    <div id="partnerships" className="partnerships-area">
      <Router>
        <ShapeFuture />
        <Realm />
        <Saints />
        <ShopJitana />
        <GTHX />
        <Blebrity />
        <WorkWithUs />
      </Router>
    </div>
  );
};

export default Partnerships;
