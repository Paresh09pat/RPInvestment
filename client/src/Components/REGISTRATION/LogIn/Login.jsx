import React, { useState, useRef } from "react";
import "./Login.css";
import { Icon } from "@iconify/react";
import eyeOutline from "@iconify/icons-mdi/eye-outline";
import eyeOffOutline from "@iconify/icons-mdi/eye-off-outline";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import Captcha from "../LogIn/Captcha/Captcha";
import { NavLink } from "react-router-dom";


function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [activeInputField, setActiveInputField] = useState("email");
  const keyboard = useRef();

  const toggleKeyboard = () => {
    setKeyboardVisible(!isKeyboardVisible);
  };

  const onChangeInput = (input, field) => {
    switch (field) {
      case "email":
        setEmailInput(input);
        break;
      case "password":
        setPasswordInput(input);
        break;
      case "captcha":
        setCaptchaInput(input);
        break;
      default:
        break;
    }

    if (keyboard.current) {
      keyboard.current.setInput(input);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const setActiveField = (field) => {
    setActiveInputField(field);
  };

  const handleShift = () => {
    if (keyboard.current) {
      const currentLayout = keyboard.current.options.layoutName;
      const newLayout = currentLayout === "default" ? "shift" : "default";

      keyboard.current.setOptions({
        layoutName: newLayout,
      });
    }
  };

  const handleCapsLock = () => {
    if (keyboard.current) {
      const currentLayout = keyboard.current.options.layoutName;
      const newLayout = currentLayout === "default" ? "shift" : "default";

      keyboard.current.setOptions({
        layoutName: newLayout,
      });
    }
  };

  return (
    <div className="Log_main_div">
      <div id="Main_container_div">
        <div className="innerDivLoginPage">
          <img
            src="https://th.bing.com/th/id/OIP.fko4E3j-Qy3RG74_puTHMwHaHa?w=219&h=219&c=7&r=0&o=5&pid=1.7"
            alt=""
            className="avatar-icon-signin"
          />

          <input
            type="text"
            name=""
            id=""
            className="input-text newani signInInp"
            placeholder=" Enter Your Email Address "
            value={emailInput}
            onClick={() => setActiveField("email")}
            onChange={(e) => onChangeInput(e.target.value, "email")}
          />

          <div className="passLogin-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              className="loginPassInp input_LPS input-text newani"
              value={passwordInput}
              onClick={() => setActiveField("password")}
              onChange={(e) => onChangeInput(e.target.value, "password")}
            />
            <span
              className="toggle-eye-btn"
              onClick={togglePasswordVisibility}
            >
              <Icon icon={showPassword ? eyeOutline : eyeOffOutline} />
            </span>
          </div>

          <div className="capKEyboard-mainDiv">
            <Captcha
              value={captchaInput}
              onClick={() => setActiveField("captcha")}
              onChange={(input) => onChangeInput(input, "captcha")}
            />

            <div className="All_cap_key_div">
              <button className="tog_btn" onClick={toggleKeyboard}>
                <Icon className="key_icon" icon="bi:keyboard" />
                Virtual Keyboard
              </button>
            </div>
          </div>

          <div className="main_remind_forgitPassDiv">
            <div className="remindMecheckBoxDiv">
              <label className="switch">
                <input
                  type="checkbox"
                  name="remember"
                  id="check_remember"
                  className="checked-inp"
                />
                <span className="slider"></span>
              </label>
              <label htmlFor="check_remember" style={{ cursor: 'pointer', fontSize: "18px" }}> Remember Me</label>
            </div>

            <div className='linkWrap'>
              <NavLink className='nnlink' to='/Login'>
                Forgot your password? We can help.
              </NavLink>
            </div>
          </div>
          <div className="buttonsDiv">
            <button type='submit' className='form-button button-fancy -black' >
              <span className="arrow"></span>
              <span className="text">Login</span>
            </button>

            <NavLink to='/Signup' className=" btnRegi">
              <button className="blackHoverAni btntry">New user Registration <Icon icon="basil:edit-outline" /></button>
            </NavLink>
          </div>
          {isKeyboardVisible && (
            <Keyboard
              keyboardRef={(r) => (keyboard.current = r)}
              inputName={activeInputField}
              onChange={(input) => onChangeInput(input, activeInputField)}
              onKeyPress={(button) => {
                if (button === "{shift}") {
                  handleShift();
                } else if (button === "{lock}") {
                  handleCapsLock();
                }
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
