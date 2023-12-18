import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './captcha.css';

const Captcha = ({ keyboard, activeInputField }) => {
  const [captchaCode, setCaptchaCode] = useState(generateCaptchaCode());
  const [captchaInput, setCaptchaInput] = useState('');

  function generateCaptchaCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  }

  const onChangeInput = (input) => {
    setCaptchaInput(input);

    if (keyboard.current) {
      keyboard.current.setInput(input, activeInputField); // Set input for the active field
    }
  };

  const handleRefreshClick = () => {
    const newCaptchaCode = generateCaptchaCode();
    setCaptchaCode(newCaptchaCode);
    setCaptchaInput('');

    if (keyboard.current) {
      keyboard.current.setInput('', activeInputField); // Clear input for the active field
    }
  };

  return (
    <>
      <div className="captcha-div-signin">
        <input
          type="text"
          name="captchaInput"
          id="captchaInput"
          className="captcha inp-signin input-text newani"
          placeholder="Enter the code shown"
          value={captchaInput}
          onClick={() => setActiveInputField('captcha')}
          onChange={(e) => onChangeInput(e.target.value)}
          required
          title="Enter Captcha Code *"
        />
      </div>
      <div className="captcha-img-div">
        <div id="captchaText">
          <a id="captchaCodeLink" href="#" onClick={handleRefreshClick} style={{ color: 'black' }}>
            <span id="captchaCodeSpan">{captchaCode}</span>
          </a>
        </div>
        <a
          className="refresh-cap"
          href="#"
          style={{ border: 'none', outline: 'none', cursor: 'pointer', marginTop: '3%' }}
          title="Refresh Captcha?"
          onClick={handleRefreshClick}
        >
          <Icon icon="material-symbols:refresh" className="captchRefreshIcon" />
        </a>
      </div>
    </>
  );
};

export default Captcha;
