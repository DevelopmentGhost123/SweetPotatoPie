import CardTopStraightCircle from "../../../Shared/CardTopStraightCircle/CardTopStraightCircle";
import VistSite from "../../../Shared/VisitSite/VisitSite";
import Group7 from "../../../assets/Group7.svg";
import "./styles.css";

const Realm = () => {
  return (
    <div className="realm">
      <div className="realm-left">
        <div className="straight-circle-cardarea">
          <CardTopStraightCircle />
          {Group7 && <img src={Group7} alt="Group7" />}
        </div>
      </div>
      <div className="realm-right">
        <p className="p2">Product Strategy & UI/UX</p>
        <h4>Realm</h4>
        <p className="p2">
          Realm chose Sweet Potato Pie to revolutionize their digital footprint.
          Collaborating closely with their creative and technical teams, we took
          charge of designing, building, and refining their mobile application
          platform. This included orchestrating a recent redesign, introducing a
          fresh brand identity, and enhancing the overall user experience.
        </p>
        <p className="p2">
          Focused on maximizing engagement and optimizing user retention, we
          devised a growth strategy centered on cutting-edge UX, CRO, and mobile
          development principles. Leveraging advanced technologies like React
          Native and Firebase, we've empowered Realm to stand out in the
          competitive music industry landscape.{" "}
        </p>
        <VistSite />
      </div>
    </div>
  );
};

export default Realm;
