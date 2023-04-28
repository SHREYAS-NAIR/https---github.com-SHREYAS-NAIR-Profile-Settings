import "./Heading.css";
import Lock from "../../../Icons/ChangePasswordPage/Lock.png";

function Heading() {
  return (
    <div>
      <div className="Heading">
        <div>
          <img className="icon" src={Lock}></img>
        </div>
        <div>Change Password</div>
      </div>
    </div>
  );
}

export default Heading;
