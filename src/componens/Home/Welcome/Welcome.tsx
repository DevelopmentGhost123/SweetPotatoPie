import Group940 from "../../../assets/Group 940.svg";
import Group1 from "../../../assets/Group 1.svg";
import Underline04 from "../../../assets/Underline_04.svg";
import Group941 from "../../../assets/Group 941.svg";
import "./style.css";

export function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome_left">
        {Group940 && <img src={Group940} alt="Group940" />}
      </div>

      <div className="welcome_middle">
        <h2>
          Welcome to <br />
          Sweet Potato Pie
        </h2>
        <div className="welcome_bottom">
          <div className="underline04">
            {Underline04 && <img src={Underline04} alt="Underline04" />}
          </div>
          <div className="group1">
            {Group1 && <img src={Group1} alt="Group1" />}
          </div>
        </div>
        <p className="p1">
          We're digital venture studio that builds innovative <br />
          companies focusing on culture beyond borders.
        </p>
      </div>
      <div className="welcome_right">
        {Group941 && <img src={Group941} alt="Group941" />}
      </div>
    </div>
  );
}
