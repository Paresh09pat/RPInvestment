import React, { useState, useEffect } from 'react';
import '../EmailVerification/Tooltip/Tooltip.css';

const Tooltip = ({ onClose }) => {
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        if (closing) {
            const closeTimeout = setTimeout(() => {
                onClose();
            }, 500);

            return () => clearTimeout(closeTimeout);
        }
    }, [closing, onClose]);

    const handleClose = () => {
        setClosing(true);
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('popup-overlay')) {
            handleClose();
        }
    };

    return (
        <div className='popup-overlay'  onClick={handleOverlayClick}>
            <div className={`popup-content ${closing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className='info_sec_head'>
                    Mobile OTP Verification Guide
                </div>
                <div className='Info_sec1'>
                    <div className='Info_sec1_maindiv'>

                        <h4>What is OTP?</h4>
                        <p>OTP stands for "One-Time Password." It is a unique, temporary code that adds an extra layer of security to your account.
                            The OTP is sent to your registered email address and is valid for a limited period.
                        </p>
                        <br />
                        <h4>How to Retrieve Your OTP</h4>
                        <ul className="unorder_pdleft">
                            <li>Check your email inbox for an email containing the OTP.</li>
                            <li>If you don't see the email, please check your Spam or Junk folder.</li>
                            <li>Still can't find it? Click on the 'Resend OTP' button to get a new code.</li>
                        </ul>
                        <br />
                        <h4>Entering Your OTP</h4>
                        <ul className="unorder_pdleft">
                            <li>Enter the OTP in the designated field on this page.</li>
                            <li>Make sure to enter it exactly as it appears in the email, paying attention to any capital letters or special characters.</li>
                            <li>Click on 'Verify' to complete the process.</li>
                        </ul>
                        <br />
                        <h4>Commom Issues </h4>
                        <ul className="unorder_pdleft">
                            <li>OTPs are case-sensitive.</li>
                            <li>Each OTP is valid for a limited time. Check the email for the expiration time.</li>
                            <li>If you enter the OTP incorrectly multiple times, your account may be temporarily locked.</li>
                        </ul>
                        <br />
                        <h4>Resending OTP</h4>
                        <p>If the OTP has expired or if you've not received it, you can click 'Resend OTP' to get a new code. Please note, requesting a new OTP will invalidate the previous one.</p>
                        <br />
                        <h4>Need Further Assistance</h4>
                        <p>If you're encountering issues or have any questions, feel free to reach out to our support team at <b>support@rpi.money</b> or call us at <b>+91 86008-92622</b>.</p>

                    </div>
                </div>

                <div className='Info_sec2'>
                    <button className=" form-button" onClick={handleClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tooltip;
