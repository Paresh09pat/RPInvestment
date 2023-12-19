/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import eyeOutline from '@iconify/icons-mdi/eye-outline';
import eyeOffOutline from '@iconify/icons-mdi/eye-off-outline';
import infoIcon from '@iconify-icons/bi/info';
import "./LoginPass.css"

function LoginPass() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [requirementsMet, setRequirementsMet] = useState({
    length: false,
    upperLowerNum: false,
    specialChars: false,
  });

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  useEffect(() => {
    // Check password requirements and update state
    const checkRequirements = () => {
      const lengthRequirement = password.length >= 8;
      const upperLowerNumRequirement =
        /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password);
      const specialCharsRequirement = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      setRequirementsMet({
        length: lengthRequirement,
        upperLowerNum: upperLowerNumRequirement,
        specialChars: specialCharsRequirement,
      });
    };

    checkRequirements();
  }, [password]);

  // Calculate the strength bar width and color
  const calculateStrengthBar = () => {
    const checkedCount = Object.values(requirementsMet).filter(Boolean).length;
    switch (checkedCount) {
      case 3:
        return { width: "100%", background: "green" };
      case 2:
        return { width: "60%", background: "orange" };
      case 1:
        return { width: "20%", background: "red" };
      default:
        return { width: "0%", background: "transparent" };
    }
  };

  const strengthBarStyle = calculateStrengthBar();

  return (
    <>
      <div className="Loginpass_main_div">
        <div id="Main_container_div_LP">
          <div className="Head_main_loginPass">Login Password Setup</div>

          <div className="whole_pass_main_container">
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="input_LPS input-text newani"
              />
              <span
                className="toggle-eye-btn"
                onClick={() => togglePasswordVisibility("password")}
              >
                <Icon icon={showPassword ? eyeOutline : eyeOffOutline} />
              </span>
              <div className="strength-container" >
                <div
                  className="strength-bar"
                  style={{
                    width: `${strengthBarStyle.width}`,
                    backgroundColor: `${strengthBarStyle.background}`,
                    height: "5px",
                    borderRadius: "2px",
                  }}
                ></div>
              </div>
            </div>

            <div className="All_checkbox_comdiv">
              <ul className="pass_set_check">
                <li className="arrange">
                  <input
                    type="checkbox"
                    id="showPasswordLength"
                    checked={requirementsMet.length}
                    disabled
                  />
                  <label htmlFor="showPassword" className="label-info">
                    {" "}
                    Let&apos;s start with at least 8 characters. The longer, the
                    better!.
                  </label>
                </li>
                <li className="arrange">
                  <input
                    type="checkbox"
                    id="showPasswordUpperLowerNum"
                    checked={requirementsMet.upperLowerNum}
                    disabled
                  />
                  <label htmlFor="showPassword" className="label-info">
                    {" "}
                    Mix it up! A combo of at least 1 uppercase letter, 1
                    lowercase letter, and number.
                  </label>
                </li>
                <li className="">
                  <input
                    type="checkbox"
                    id="showPasswordSpecialChars"
                    checked={requirementsMet.specialChars}
                    disabled
                  />
                  <label htmlFor="showPassword" className="label-info">
                    {" "}
                    Throw in a special character like @, #, $, or % to make it
                    extra secure!
                  </label>
                </li>
              </ul>
            </div>

            <div className="password-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="input_LPS input-text newani"
              />
              <span
                className="toggle-eye-btn"
                onClick={() => togglePasswordVisibility("confirmPassword")}
              >
                <Icon icon={showConfirmPassword ? eyeOutline : eyeOffOutline} />
              </span>
            </div>

            <div className="btn_tip_comdiv">
              <button className="form-button button-fancy -black">
                <span className="arrow"></span>
                <span className="text">Submit</span>
              </button>

                            <p className="circle-icon1" >
                                <Icon icon={infoIcon} style={{ color: 'black' }} width="40" height="40" />
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LoginPass;
