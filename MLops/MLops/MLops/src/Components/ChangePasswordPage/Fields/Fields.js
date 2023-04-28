import "./Fields.css";

function Fields() {
  return (
    <div className="Fields">
      <div className="TopField">
        <p>
          <label>Old Password</label>
        </p>
        <p>
          <input type={Text}></input>
        </p>
      </div>
      <div className="BottomFields">
        <div className="SpecificBottomField">
          <p>
            <label>New Password</label>
          </p>
          <p>
            <input type={Text}></input>
          </p>
        </div>
        <div className="SpecificBottomField">
          <p>
            <label>Confirm Password</label>
          </p>
          <p>
            <input type={Text}></input>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Fields;
