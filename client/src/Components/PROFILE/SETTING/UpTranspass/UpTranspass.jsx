import React, { useState } from 'react';
import "./UpTranspass.css";
import Footer from '../../../Footer/Footer';
import HaveKeyComponent from "./HaveKeyComponent/HaveKeyComponent";
import DontHaveKeyComponent from "./DontHaveKeyComponent/DontHaveKeyComponent";

function UpTranspass() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className='UpTranspass_main_div'>

        <div className='Tran_extrainfo_div'>
          <h2 className='Tran_Before_up'>Do You Have Your 12-Phrase Key?</h2>
          <div className='Tran_exinfo_ul_div'>
            <ul>
              <li>The 12-phrase key is a unique set of words that acts as your cryptographic password in our blockchain-secured system.</li>
              <li>It's essential for verifying your identity and safeguarding your account.</li>
            </ul>
          </div>
        </div>

        <div className='Tran_seecond_main_div'>
          <h3 className='Tran_Before_up'>Please indicate whether you have your 12-phrase key.</h3>

          <div className="radio-input-wrapper">
            <label className="label">
              <input
                value="Have12phrase"
                name="value-radio"
                id="Have12phrase"
                className="radio-input"
                type="radio"
                onChange={handleRadioChange}
              />
              <div className="radio-design"></div>
              <div className="label-text">Yes, I Have It</div>
            </label>
            <label className="label">
              <input
                value="DontHave12phrase"
                name="value-radio"
                id="DontHave12phrase"
                className="radio-input"
                type="radio"
                onChange={handleRadioChange}
              />
              <div className="radio-design"></div>
              <div className="label-text">No, I Don't Have It</div>
            </label>
          </div>
        </div>

       
        {selectedOption === 'Have12phrase' && (
          <div className="new-component-container">
            <HaveKeyComponent />
          </div>
        )}
        {selectedOption === 'DontHave12phrase' && (
          <div className="new-component-container">
            <DontHaveKeyComponent />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default UpTranspass;
