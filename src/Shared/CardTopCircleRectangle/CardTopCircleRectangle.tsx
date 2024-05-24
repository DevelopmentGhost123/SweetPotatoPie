import "./styles.css";

const CardTopCircleRectangle = () => {
  return (
    <div className="card-top-circle-rectangle">
      <div className="yellowcircle-container">
        {[0, 1, 2].map((index) => (
          <div key={index} className="yellowcircle"></div>
        ))}
      </div>
      <div className="yellowrectangle-container"></div>
      {[0, 1, 2].map((index) => (
        <div key={index} className="yellowrectangle"></div>
      ))}
    </div>
  );
};

export default CardTopCircleRectangle;
