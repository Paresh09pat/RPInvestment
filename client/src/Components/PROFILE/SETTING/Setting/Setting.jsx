import React, { useState } from 'react';
import "./Setting.css";
import UpLoginPass from '../UpLoginPass/UpLoginPass';
import UpTranspass from '../UpTranspass/UpTranspass';
import UpTwelve from '../UpTwelve/UpTwelve';


function Setting() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <>
      <div className='setting_outer_div'>

        <div className='main_setting_div'>
          <p className='head_passup'>Password Update</p>

          <div className='info_main_div'>
            <div className='info_sub_div'>
              <ul>
                <li>Have 8 to 12 characters </li>
                <li>Have uppercase (Minimum 1 is mandatory)</li>
                <li>Have lowercase (Minimum 1 is mandatory)</li>
                <li>Have numbers (Minimum 1 is mandatory)</li>
                <li>Have special characters (Allowed characters are *,@,#,$,!,~,^,(,),_,-,+,= ,?,;,:,',",`,[,].)</li>
              </ul>
            </div>
            <div className='info_sub_div'>
              <ul>
                <li>Not contain consecutive characters more than 5</li>
                <li>Not contain identical characters more than 5</li>
                <li>Not be same as Transaction Password</li>
                <li>Not be same as previous 3 password(s)</li>
              </ul>
            </div>
          </div>

          <div className='All_btn_div'>
            <button className='update_btns' onClick={() => handleButtonClick('UpLoginPass')}>
              Update Login Password
            </button>

            <button className='update_btns' onClick={() => handleButtonClick('UpTranspass')}>
              Update Transaction Password
            </button>

            <button className='update_btns' onClick={() => handleButtonClick('UpTwelve')}>
              Update Twelve Phrase Password
            </button>
          </div>
        </div>

        {activeComponent === 'UpLoginPass' && <UpLoginPass />}
        {activeComponent === 'Uptranspass' && <UpTranspass />}
        {activeComponent === 'UpTwelve' && <UpTwelve />}

      </div>
    </>
  );
}

export default Setting;
