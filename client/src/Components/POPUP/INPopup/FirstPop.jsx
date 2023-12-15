import React from 'react'
import "./FirstPop.css"
import RightTick from "../RightTick/RightTick"
import WrongTick from '../WrongTick/WrongTick'

function FirstPop() {
  return (
<>
<div class="outer-container">
    <div id="overlay"></div>
    <div id="centeredDiv">
        <RightTick />
        {/* <WrongTick /> */}

        <p className='poptext'>Successfully . .</p>
        <button className='pop-button'>Close</button>
    </div>
  </div>
</>
  )
}

export default FirstPop