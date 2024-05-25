import { Link } from "react-router-dom";
import CardTopCircleRectangle from "../../../Shared/CardTopCircleRectangle/CardTopCircleRectangle";
import VistSite from "../../../Shared/VisitSite/VisitSite";
import ImagePlaceHolder1 from "../../../assets/Image placeholder1.svg";
import "./styles.css";

const ShopJitana = () => {
  return (
    <div className="shop-jitana">
      <div className="realm-left">
        <div className="shop-jitana-card-container"></div>
        <div className="circle-rectangle-cardarea">
          <CardTopCircleRectangle />
          {ImagePlaceHolder1 && <img src={ImagePlaceHolder1} alt="Image" />}
        </div>
      </div>
      <div className="realm-right">
        <p className="p2">Product Strategy & Engineering</p>
        <h4>Shop Jitana</h4>
        <p className="p2">
          Shop Jitana tapped Sweet Potato Pie to transform their digital
          landscape. Working hand in hand with their marketing and technical
          teams, we took on the challenge of designing, building, and refining
          their marketing platform. This involved orchestrating a recent
          overhaul, including a vibrant brand rollout and a fresh redesign.
        </p>
        <p className="p2">
          With a sharp focus on enhancing user experience and maximizing
          conversions, we crafted a growth strategy rooted in top-notch UX, CRO,
          and frontend development principles. Armed with leading-edge
          technologies like ReactJS and Gatsby, we've equipped Shop Jitana to
          thrive in the bustling ecommerce realm.
        </p>
        <Link to="https://shopjitana.com/">
          <VistSite />
        </Link>
      </div>
    </div>
  );
};

export default ShopJitana;
