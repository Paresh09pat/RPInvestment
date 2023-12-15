import { useRef, useState, useEffect } from "react";
import React from 'react';
import "./MobileVerification.css"; 
import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';
import infoIcon from '@iconify-icons/bi/info';
import MV_Tooltip from "./MV_Tooltip";

function MobileVerification() {
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
            setShowResendButton(true);
            setTimer(10);
        }

        return () => {
            clearInterval(countdown);
        };
    }, [timer, showResendButton]);

    const handleResendClick = () => {
        setShowResendButton(false);
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className='MV_main_div'> 
            <div id='MV_Main_container_div'> 
                <div className="MV_Head_main"> 
                    Mobile Number Verification
                </div>
                <div className="MV_Second_main_div"> 
                    <div className='MV_sometext'>We sent you a six-digit code to <strong>1234567890</strong>. Enter that code to confirm your Mobile Number.</div>

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
                            <p className='nnlink' to='/MobileVerification' onClick={handleResendClick}> 
                                Resend OTP
                            </p>
                        ) : (
                            <span>Resend OTP in {timer} seconds</span>
                        )}
                    </div>

                    <div className="Btn_tool_common">
                        <button className='form-button button-fancy -black'>
                            <span className="arrow"></span>
                            <span className="text">Verify</span>
                        </button>

                        <p className="circle-icon" onClick={togglePopup}>
                            <Icon icon={infoIcon} style={{ color: 'black' }} width="40" height="40" />
                        </p>
                    </div>

                </div>
                {showPopup && <MV_Tooltip onClose={togglePopup} />}

            </div>
        </div>
    )
}

export default MobileVerification;
