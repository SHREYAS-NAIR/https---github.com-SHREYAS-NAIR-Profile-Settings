import "./ChangePassword.css";
import Heading from "./Heading/Heading";
import Fields from "./Fields/Fields";
import Button from "./Button/Button";

function ChangePassword() {
  return (
    <div className="OuterBox">
      <div className="InnerBox">
        <form action="cloudangles.com">
          <Heading />
          <Fields />
          <Button />
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
