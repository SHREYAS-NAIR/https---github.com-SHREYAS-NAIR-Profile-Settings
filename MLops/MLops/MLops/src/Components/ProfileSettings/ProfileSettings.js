import TitleBar from "./TitleBar/TitleBar";
import "./ProfileSettings.css";
import BackArrow from "../../Icons/ProfileSettings/BackArrow.png";
import SettingsIcon from "../../Icons/ProfileSettings/SettingsIcon.png";
import ConfigurationsIcon from "../../Icons/ProfileSettings/ConfigurationsIcon.png";
import PipelinesIcon from "../../Icons/ProfileSettings/PipelinesIcon.png";
import ExperimentsIcon from "../../Icons/ProfileSettings/ExperimentsIcon.png";
import Button from "./Button/Button"

function ProfileSettings() {
  return (
    <div>
      <TitleBar />
      <div className="MainScreen">
        <div className="Sub-TitleBar">
          <div className="BackButton">
            <div>
              <img src={BackArrow}></img>
            </div>
            <div className="BackButtonText">
              <label>Back</label>
            </div>
          </div>
          <div className="SettingsTitle">
            <div>
              <img src={SettingsIcon}></img>
            </div>
            <div>
              <label>Settings</label>
            </div>
          </div>
        </div>
        <div className="SettingsPage">
          <div className="Menu">
            <div className="Tabs">
              <img src={ExperimentsIcon}></img>
            </div>
            <div className="Tabs">
              <img src={PipelinesIcon}></img>
            </div>
            <div className="Tabs">
              <img src={ConfigurationsIcon}></img>
            </div>
          </div>
          <div className="Sub-Menu">
            <div className="Sub-Menu-Items">
              <label>Profile Stettings</label>
            </div>
            <div className="Sub-Menu-Items">
              <label>Configurations</label>
            </div>
            <div className="Sub-Menu-Items">
              <label>User & Group</label>
            </div>
            <div className="Sub-Menu-Items">
              <label>Billing and Plans</label>
            </div>
            <div className="Sub-Menu-Items">
              <label>Server</label>
            </div>
          </div>
          <div className="ProfileSettingsPage">
            <div className="Profile-Info">
              <div className="Title">
                <label>Profile Info</label>
              </div>
              <div className="Profile-Info-Fields">
                <div className="Name">
                  <div className="FirstName">
                    <div className='NameofFields'>
                      <label>First Name</label>
                    </div>
                    <div>
                      <input type={Text}></input>
                    </div>
                  </div>
                  <div className="MiddleName">
                    <div className='NameofFields'>
                      <label>Middle Name</label>
                    </div>
                    <div>
                      <input type={Text}></input>
                    </div>
                  </div>
                  <div className="LastName">
                    <div>
                      <label className='NameofFields'>Last Name</label>
                    </div>
                    <div>
                      <input type={Text}></input>
                    </div>
                  </div>
                </div>
                <div className="Email">
                  <div className='NameofFields'>
                    <label>Organization Email</label>
                  </div>
                  <div className="EmailInput">
                    <input type={Text}></input>
                  </div>
                </div>
                <div className='Organization'>
                <div className="OrganizationName">
                    <div className='NameofFields'>
                      <label>Organization</label>
                    </div>
                    <div>
                      <input type={Text}></input>
                    </div>
                  </div>
                  <div className="MobileNumber">
                    <div className='NameofFields'>
                      <label>Mobile Number</label>
                    </div>
                    <div>
                      <input type={Text}></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className='Clickables'>
                  <div>
                    <a className='ChangePassword' href="">Change Password?</a>
                  </div>
                  <div>
                    <Button/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;
