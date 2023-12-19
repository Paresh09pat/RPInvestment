import React from 'react';
import "./DontHaveKeyComponent.css";

function DontHaveKeyComponent() {
  return (
    <>
      <div className='DN_first_main '>
        <h2 className='DN_Adjust_head'>Contact To Support</h2>
        <h3 className='DN_Adjust_head'>Lost Your 12-Phrase Key? Don't Worry, We're Here to Help!</h3>

        <div className='DN_NUMMail_main'>
          <div className='DN_NUMMail_sub'>
            <div className='sub_div_1'>Write an Email to :</div>

            <div className='sub_div_2'>
              <div className='linkWrap'>
                <a href='mailto:support@rpi.money' className='nnlink'>
                  support@rpi.money
                </a>
              </div>
            </div>

          </div>

          <div className='DN_NUMMail_sub'>
            <div className='sub_div_1'>Call us on :</div>

            <div className='sub_div_2'>
              <div className='linkWrap'>
                <a href='tel:8600892622' className='nnlink'>
                  8600892622
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='or'>OR</div>

      <buttom className="Fill_out_form form-button">Fill Out The Form</buttom>
    </>
  );
}

export default DontHaveKeyComponent;
