import "./TitleBar.css";
import A from "../../../Icons/ProfileSettings/A.png";
import M from "../../../Icons/ProfileSettings/M.png";
import L from "../../../Icons/ProfileSettings/L.png";
import N from "../../../Icons/ProfileSettings/N.png";
import G from "../../../Icons/ProfileSettings/G.png";
import E from "../../../Icons/ProfileSettings/E.png";
import S from "../../../Icons/ProfileSettings/S.png";
import Circle from "../../../Icons/ProfileSettings/Circle.png";
import QuestionMark from "../../../Icons/ProfileSettings/QuestionMark.png";
import User from "../../../Icons/ProfileSettings/User.png";
import UserBg from "../../../Icons/ProfileSettings/UserBg.png";
import DownwardArrow from "../../../Icons/ProfileSettings/DownwardArrow.png";

function TitleBar() {
  return (
    <div className="TitleBar">
      <div className="LeftSide">
        <div className="Logo">
          <img src={M}></img>
          <img src={L}></img>
          <img className="Signature" src={A}></img>
          <img src={N}></img>
          <img src={G}></img>
          <img src={L}></img>
          <img src={E}></img>
          <img src={S}></img>
        </div>
      </div>
      <div className="RightSide">
        <div className="HelpIcon">
          <div class="under">
            <img src={Circle} ></img>
          </div>
          <div class="over">
            <img src={QuestionMark} ></img>
          </div>
        </div>
        <div className="UserOptions">
          <div className='under1'>
            <img src={UserBg}></img>
          </div>
          <div className='over1'>
            <img src={User}></img>
          </div>
        </div>
        <div className='Arrow'>
          <img src={DownwardArrow}></img>
        </div>
      </div>
    </div>
  );
}

export default TitleBar;
