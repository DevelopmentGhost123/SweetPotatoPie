import CardTopCircleRectangle from "../../../Shared/CardTopCircleRectangle/CardTopCircleRectangle";
import VistSite from "../../../Shared/VisitSite/VisitSite";
import AuraPic from "../../../assets/AuraPic.svg";
import "./styles.css";

const FlagShip = () => {
  return (
    <div className="flag-ship">
      <div className="flag-ship-left">
        <p className="p3">Flagship Platform</p>
        <p className="lgh4">Aura</p>
        <p className="p3">
          Our mission is to expand market reach, increase visibility, and drive
          sales by addressing key challenges and leveraging strategic
          initiatives. Slow production limits growth potential, poor sales
          methods lead to revenue loss, and low-quality materials harm
          reputation and loyalty.{" "}
        </p>
        <p className="p3">
          To overcome these obstacles, we prioritize quality eco-materials to
          enhance reputation and foster customer loyalty. Additionally, we
          cultivate global collaboration among creators and makers to elevate
          exclusive product distribution.{" "}
        </p>
        <p className="p3">
          To ensure operational excellence, we leverage AI in the supply chain
          to optimize production efficiency and stay ahead of the curve.
        </p>
        <VistSite />
      </div>
      <div className="flag-ship-right">
        <div className="circle-rectangle-cardarea">
          <CardTopCircleRectangle />
          {AuraPic && <img src={AuraPic} alt="AuraPic" />}
        </div>
      </div>
    </div>
  );
};

export default FlagShip;
