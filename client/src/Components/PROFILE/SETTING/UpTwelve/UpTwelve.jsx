import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import downArrowIcon from '@iconify-icons/bx/bxs-down-arrow';
import "./UpTwelve.css"

function UpTwelve() {

  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const options = ['stolen', 'forget'];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <>
      <div className='UpTwelve_main_div'>

        <div className='UpTwelve_sub_div_first'>
          <h3 className='Before_up_tw'>Before Updating 12 Phrase Password Please read instructions carefully</h3>
          <div className='exinfo_ul_div_tw'>
            <ul>
              <li>A login password, also known as a password or passphrase.</li>
              <li>It is used to authenticate and verify the identity of a user.</li>
              <li>It acts as a security measure to authenticate the legal owner to access the account.</li>
            </ul>
          </div>
        </div>

        <div className='UpTwelve_sub_div_second'>
          <p className='head_12_phrase'>Update 12 Phrase Password</p>
          <form className='TW_update_form'>

            <div className='common_div_input_tw'>
              <input className='tw_four_input btgap' type='text' placeholder='Enter Your Name . .' />
              <input className='tw_four_input btgap' type='text' placeholder='Enter Your Email Address . .' />
              <input className='tw_four_input' type='text' placeholder='Enter Your Contact Number . .' />
              <input className='tw_four_input' type='text' placeholder='Enter Your Aadhar Card Number . .' />
            </div>

            <textarea className='tw_textarea' placeholder='Enter Your Message Here . .'></textarea>

            <div className="inp_btn_com_tw">
              <div className="TW_custom-dropdown">
                <div className="TW_selected-option" onClick={() => setDropdownOpen(!isDropdownOpen)}>
                  {selectedOption || 'Select an option'}
                  <Icon className='down_arr' icon={downArrowIcon} />
                </div>
                {isDropdownOpen && (
                  <div className="TW_options">
                    {options.map((option) => (
                      <div className='op_div' key={option} onClick={() => handleOptionClick(option)}>
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button className='form-button button-fancy -black' >
                <span className="arrow"></span>
                <span className="text">Update</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default UpTwelve