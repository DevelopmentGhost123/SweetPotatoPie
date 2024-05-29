import Group5 from "../../../assets/Group5.svg";
import Rectangle5 from "../../../assets/Rectangle5.svg";
import Rectangle6 from "../../../assets/Rectangle6.svg";
import RightArrow from "../../../assets/RightArrow.svg";
import "./styles.css";

const cardPic: string[] = [Group5, Rectangle5, Rectangle6];
const textElements = [
  <>
    <p className="lgh4">Realm</p>
    <p className="p3">Your Next Level Awaits</p>
  </>,
  <>
    <p className="lgh4">Saints</p>
    <p className="p3">the virtual is ones</p>
  </>,
  <>
    <p className="lgh4">Shop Jitana</p>
    <p className="p3">inspired by travel and culture</p>
  </>,
];

const OurPartnerships = () => {
  return (
    <div className="ourpartnerships">
      <p className="lgh4">Our partnerships</p>
      <div className="card-area">
        {cardPic.map((src, index) => (
          <div key={index} className="card">
            <div className="card-area-top">
              {src && <img src={src} alt={`Partnership ${index + 1}`} />}
            </div>
            <div className="card-area-bottom">{textElements[index]}</div>
          </div>
        ))}
      </div>
      <div className="scroll-rectangle-area">
        <div className="scroll-rectangle-left"></div>
        <div className="scroll-rectangle-right"></div>
      </div>
      <div className="see-more">
        <p className="p1">See more</p>
        <div className="right-arrow">
          <img src={RightArrow} alt="RightArrow" />
        </div>
      </div>
    </div>
  );
};

export default OurPartnerships;
