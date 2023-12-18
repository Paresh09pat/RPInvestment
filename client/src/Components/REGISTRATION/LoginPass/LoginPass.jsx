import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import eyeOutline from '@iconify/icons-mdi/eye-outline';
import eyeOffOutline from '@iconify/icons-mdi/eye-off-outline';
import infoIcon from '@iconify-icons/bi/info';
import "./LoginPass.css"


function LoginPass() {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);



    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
            setShowPassword(!showPassword);
        } else if (field === 'confirmPassword') {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };

    return (
        <>
            <div className='Loginpass_main_div'>
                <div id='Main_container_div_LP'>
                    <div className="Head_main_loginPass">
                        Login Password Setup
                    </div>

                    <div className='whole_pass_main_container'>
                        <div className="password-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Password"
                                className='input_LPS input-text newani'
                            />
                            <span
                                className="toggle-eye-btn"
                                onClick={() => togglePasswordVisibility('password')}
                            >
                                <Icon icon={showPassword ? eyeOutline : eyeOffOutline} />
                            </span>
                        </div>

                        <div className='All_checkbox_comdiv'>
                            <ul className="pass_set_check">
                                <li className="arrange">
                                    <input type="checkbox" id="showPasswordLength" disabled />
                                    <label for="showPassword" className='label-info'> Let's start with at least 8 characters. The longer, the better!.</label>
                                </li>
                                <li className="arrange">
                                    <input type="checkbox" id="showPasswordUpperLowerNum" disabled />
                                    <label for="showPassword" className='label-info'> Mix it up! A combo of at least 1 uppercase letter, 1 lowercase letter, and number.</label>
                                </li>
                                <li className="">
                                    <input type="checkbox" id="showPasswordSpecialChars" disabled />
                                    <label for="showPassword" className='label-info'> Throw in a special character like @, #, $, or % to make it extra secure!</label>
                                </li>
                            </ul>
                        </div>

                        <div className="password-container">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm Password"
                                className='input_LPS input-text newani'
                            />
                            <span
                                className="toggle-eye-btn"
                                onClick={() => togglePasswordVisibility('confirmPassword')}
                            >
                                <Icon icon={showConfirmPassword ? eyeOutline : eyeOffOutline} />
                            </span>
                        </div>

                        <div className='btn_tip_comdiv'>
                            <button className='form-button button-fancy -black' >
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

export default LoginPass