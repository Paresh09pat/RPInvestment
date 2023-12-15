import { useRef, useState, useEffect } from "react"
import React from 'react'
import "./EmailVerification.css"
import { NavLink } from "react-router-dom"
import { Icon } from '@iconify/react';
import infoIcon from '@iconify-icons/bi/info';
import Tooltip from "./Tooltip/Tooltip";

function EmailVerification() {
    const inputRefs = Array(6).fill(0).map(() => useRef(null));
    const [filledFields, setFilledFields] = useState([]);
    const [activeInput, setActiveInput] = useState(0);
    const [showResendButton, setShowResendButton] = useState(true);
    const [timer, setTimer] = useState(10);
    const [showPopup, setShowPopup] = useState(false);

    const handleInputChange = (index, e) => {
        const value = e.target.value;

        if (!filledFields.includes(index)) {
            if (value) {
                if (index < inputRefs.length - 1) {
                    setActiveInput(index + 1);
                }
                setFilledFields([...filledFields, index]);
            }
        } else {
            setFilledFields(filledFields.filter((filledIndex) => filledIndex !== index));
        }
    };

    const handleBackspace = (index, e) => {
        if (e.key === 'Backspace') {
            if (filledFields.includes(index)) {
                inputRefs[index].current.value = '';

                if (index > 0) {
                    setActiveInput(index - 1);
                }
                setFilledFields(filledFields.filter((filledIndex) => filledIndex !== index));

            } else {
                if (index > 0) {
                    setActiveInput(index - 1);
                }
            }
        }
    };

    useEffect(() => {
        inputRefs[activeInput].current.focus();
    }, [activeInput]);

    useEffect(() => {
        let countdown;
        if (timer > 0 && !showResendButton) {
            countdown = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0 && !showResendButton) {
            clearInterval(countdown);
            setShowResendButton(true);
            setTimer(10);
        }

        return () => {
            clearInterval(countdown);
        };
    }, [timer, showResendButton, activeInput]);

    const handleResendClick = () => {
        setShowResendButton(false);

        sendNewOTP();
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className='EV_main_div'>
            <div id='EV_Main_container_div'>
                <div className="EV_Head_main">
                    Email Address Verifiaction
                </div>
                <div className="EV_Second_main_div">
                    <div className='EV_sometext'>We emailed you a six-digit code to <strong>1234@gmail.com</strong> . Enter that code to confirm your Email Address.</div>

                    <div className='Common_pass_input_div'>
                        {inputRefs.map((ref, index) => (
                            <input
                                key={index}
                                ref={ref}
                                className='pass_input_box'
                                type="password"
                                placeholder='-'
                                maxLength={1}
                                onChange={(e) => handleInputChange(index, e)}
                                onKeyDown={(e) => handleBackspace(index, e)}
                                readOnly={filledFields.includes(index)}
                            />
                        ))}
                    </div>

                    <div className='linkWrap'>
                        {showResendButton ? (
                            <p className='nnlink' onClick={handleResendClick}>
                                Resend OTP
                            </p>
                        ) : (
                            <span>Resend OTP in {timer} seconds</span>
                        )}
                    </div>

                    <div className="Btn_tool_common">
                        <button className='form-button button-fancy -black' >
                            <span className="arrow"></span>
                            <span className="text">Verify</span>
                        </button>

                        <p className="circle-icon" onClick={togglePopup}>
                            <Icon icon={infoIcon} style={{ color: 'black' }} width="40" height="40" />
                        </p>
                    </div>

                </div>
                {showPopup && <Tooltip onClose={togglePopup} />}

            </div>
        </div>
    )
}

export default EmailVerification