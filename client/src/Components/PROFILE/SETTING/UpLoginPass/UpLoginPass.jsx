import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import eyeOutline from '@iconify/icons-mdi/eye-outline';
import eyeOffOutline from '@iconify/icons-mdi/eye-off-outline';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./UpLoginPass.css";
import Footer from '../../../Footer/Footer';

function UpLoginPass() {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const togglePasswordVisibility = (field) => {
        switch (field) {
            case 'oldPassword':
                setShowOldPassword(!showOldPassword);
                break;
            case 'newPassword':
                setShowNewPassword(!showNewPassword);
                break;
            case 'confirmPassword':
                setShowConfirmPassword(!showConfirmPassword);
                break;
            default:
                break;
        }
    };

    const handleOldPasswordChange = (e) => {
        setOldPassword(e.target.value);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleUpdateButtonClick = () => {
        if (newPassword === '' || confirmPassword === '') {
            if (!toast.isActive('emptyFields')) {
                toast.error("Please fill in both New Password and Confirm Password fields.", {
                    toastId: 'emptyFields',
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        } else if (newPassword !== confirmPassword) {
            if (!toast.isActive('passwordMismatch')) {
                toast.error("New password does not match the confirm password.", {
                    toastId: 'passwordMismatch',
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        } else {
            if (!toast.isActive('passwordSuccess')) {
                toast.success("Password updated successfully!", {
                    toastId: 'passwordSuccess',
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleUpdateButtonClick();
        }
    };

    return (
        <>
            <div className='outer_main'>
                <div className='main_logpass_div'>
                    <ToastContainer />
                    <div className='extrainfo_div'>
                        <h2 className='Before_up'>Before Updating Login Password Please read instructions carefully</h2>
                        <div className='exinfo_ul_div'>
                            <ul>
                                <li>A login password, also known as a password or passphrase.</li>
                                <li>It is used to authenticate and verify the identity of a user.</li>
                                <li>It acts as a security measure to authenticate the legal owner to access the account.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='pass_update_fields'>
                        <p className='head_three_inpfields'>Update Your Login Password</p>
                        <div className='common_three_inpfields'>
                            <div className='input-container-main'>
                                <input
                                    type={showOldPassword ? 'text' : 'password'}
                                    placeholder='Enter Old Login Password'
                                    className='input-text newani ad_width'
                                    value={oldPassword}
                                    onChange={handleOldPasswordChange}
                                    onKeyPress={handleKeyPress}
                                />
                                <Icon className='eye_icon_ULP' onClick={() => togglePasswordVisibility('oldPassword')} icon={showOldPassword ? eyeOutline : eyeOffOutline} />
                            </div>

                            <div className='input-container-main1'>
                                <input
                                    type={showNewPassword ? 'text' : 'password'}
                                    placeholder='Enter New Login Password'
                                    className='input-text newani ad_width'
                                    value={newPassword}
                                    onChange={handleNewPasswordChange}
                                    onKeyPress={handleKeyPress}
                                />
                                <Icon className='eye_icon_ULP' onClick={() => togglePasswordVisibility('newPassword')} icon={showNewPassword ? eyeOutline : eyeOffOutline} />
                            </div>

                            <div className='space_for_checkbox'>
                                <ul className="pass_set_check">
                                    <li className="arrange">
                                        <input type="checkbox" id="" disabled />
                                        <label htmlFor="showPassword" className='label-info'> Let's start with at least 8 characters. The longer, the better!.</label>
                                    </li>
                                    <li className="arrange">
                                        <input type="checkbox" id="" disabled />
                                        <label htmlFor="showPassword" className='label-info'> Mix it up! A combo of at least 1 uppercase letter, 1 lowercase letter, and number.</label>
                                    </li>
                                    <li className="">
                                        <input type="checkbox" id="" disabled />
                                        <label htmlFor="showPassword" className='label-info'> Throw in a special character like @, #, $, or % to make it extra secure!</label>
                                    </li>
                                </ul>
                            </div>

                            <div className='input-container-main1'>
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder='Confirm New Login Password'
                                    className='input-text newani ad_width'
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    onKeyPress={handleKeyPress}
                                />
                                <Icon className='eye_icon_ULP' onClick={() => togglePasswordVisibility('confirmPassword')} icon={showConfirmPassword ? eyeOutline : eyeOffOutline} />
                            </div>

                            <button className='form-button button-fancy -black BtnAdjust' onClick={handleUpdateButtonClick}>
                                <span className="arrow"></span>
                                <span className="text">Update</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    );
}

export default UpLoginPass;
