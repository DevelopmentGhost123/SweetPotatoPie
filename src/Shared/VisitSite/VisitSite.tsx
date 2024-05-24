import RightArrow from "../../assets/RightArrow.svg";
import "./styles.css";
const VistSite = () => {
  return (
    <div className="visit-site-area">
      <p className="p1">Visit site</p>
      {RightArrow && <img src={RightArrow} alt={RightArrow} />}
    </div>
  );
};

export default VistSite;
