import React, { useState } from 'react'
import "./Signup.css"
import { NavLink } from "react-router-dom";



function Signup() {
 
  const [mobile, setMobile] = useState('');

  const handleMobileChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, '');

    if (numericValue.length <= 10) {
      const formattedValue =
        numericValue.slice(0, 5) + (numericValue.length > 5 ? '-' + numericValue.slice(5) : '');
      dispatch(setMobile(formattedValue));
    }
  };

  const handleSubmit = () => {
    console.log('Submitting:', { title, fullName, email, mobile });
  };

  return (
    <div className='Signup_main_div'>
      <div id='Main_container_div_signup'>
        <div className='SU_head_div'>Personal Information</div>
        <div className='SU_second_div'>
          <div className='form-container'>
            <div className='form-group'>
              <select
                id=''
                name=''
                className='form-input change1'
             
              >
                <option value='mr'>Mr</option>
                <option value='miss'>Miss</option>
              </select>

              <input
                type='text'
                id='fullName'
                name='fullName'
                className='form-input change2 input-text newani'
                placeholder='Enter your full name'
              />
            </div>

            <div className='form-group'>
              <input
                type='email'
                id='email'
                name='email'
                className='form-input input-text newani'
                placeholder='Enter your email address'
              />
            </div>

            <div className='form-group'>
              <div className='flag-container'>
                <div className='flad_div'>
                  <img className='change3 flag-image' src='./images/Flag.svg.png' alt='Indian Flag' />
                </div>

                <input
                  type='text'
                  id='countryCode'
                  name='countryCode'
                  className='form-input change4'
                  value='+91'
                  readOnly
                />

                <input
                  type='tel'
                  id='mobile'
                  name='mobile'
                  className='form-input change5 input-text newani'
                  placeholder='Enter your mobile number'
                  style={{borderRadius:"0 15px 15px 0"}}
                  maxLength={10}
                />
              </div>
            </div>

            <div className='btn_com_div_center'>
              <button type='submit' className='form-button button-fancy -black' onClick={handleSubmit}>
                <span className="arrow"></span>
                <span className="text">Sign Up</span>
              </button>
              <div className='Al_have_Acc'>
                Already have an Account ?
                <div className='linkWrap'>
                  <NavLink className='nnlink' to='/Login'>
                    Login
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

<a href="https://rpi.sectrage.io/rpis/member/partner/partner.php" className="knowMoreBtnRP button-fancy -black">
  <span className="arrow"></span>
  <span className="text">Know More</span>
</a>

export default Signup