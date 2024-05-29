import Shape from "../../../assets/Shape.svg";
import PastryBag from "../../../assets/Pastry Bag.svg";
import CombinedShape from "../../../assets/Combined Shape.svg";
import Meringue from "../../../assets/Meringue.svg";
import "./styles.css";

export function AboutSweetPotatoPie() {
  return (
    <div className="about-sweet-potato-area">
      <div className="aboutsweet">
        <div>
          <p className="lgh4">About Sweet Potato Pie</p>
        </div>
        <div className="aboutsweet-main">
          <div className="aboutsweet-left">
            <p className="lgh3">
              Empowering
              <br /> Your Digital
              <br /> Journey
            </p>
            <div className="shape">
              {Shape && <img src={Shape} alt="Shape" />}
            </div>
            <div className="pastrybag">
              {PastryBag && <img src={PastryBag} alt="PastryBag" />}
            </div>
            <div className="combinedshape">
              {CombinedShape && <img src={CombinedShape} alt="CombinedShape" />}
            </div>
          </div>
          <div className="aboutsweet-right">
            <div className="meringue">
              {Meringue && <img src={Meringue} alt="Meringue" />}
            </div>
            <p className="p1">
              Our commitment to being a product-driven and agile organization is
              ingrained in our DNA. By uniting talents from diverse backgrounds,
              we create innovative solutions that make a difference in people's
              lives.
            </p>
            <p className="p1">
              From cutting-edge data analytics to engaging user experiences,
              we're dedicated to helping businesses like yours thrive online.
              Our custom solutions enhance your digital footprint, streamline
              operations, and open doors to new opportunities for growth.
            </p>
            <p className="p1">
              Sweet Potato Pie is known for embracing a global culture,
              promoting inclusivity, and harnessing diverse talents to develop
              cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
