import React from 'react'
import "./SecPopup.css"
import RightTick from '../RightTick/RightTick'
import WrongTick from '../WrongTick/WrongTick'

function SecPopup() {
  return (
    <>
    <div class="OP_outer-container">
    <div id="OP_overlay"></div>
    <div id="OP_centeredDiv">
        {/* <RightTick /> */}
        <WrongTick />

        <p className='OP_poptext'>Oops! The OTP you entered doesn't match what we sent to your Email: yash65mahalle@gmail.com Please re-check and try again.</p>
        <button className='pop_button_out'>Close</button>
    </div>
  </div>
    
    </>
  )
}

export default SecPopup