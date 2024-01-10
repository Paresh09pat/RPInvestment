import React, {useState} from 'react';
import "./DontHaveKeyComponent.css";
import FillForm from './FillForm/FillForm';

function DontHaveKeyComponent() {

  const [showForm, setShowForm] = useState(false);

  const handleFormButtonClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className='DN_first_main '>
        <h2 className='DN_Adjust_head'>Contact To Support</h2>
        <h3 className='DN_Adjust_head'>Lost Your 12-Phrase Key? Don't Worry, We're Here to Help!</h3>

        <p className='in_text_added'>
        We understand that things happen, and that's why we've got a robust system in place to help you recover your account or retrieve your 12-phrase key. Follow the steps below to get the assistance you need.
        </p>

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

      <buttom className="Fill_out_form form-button" onClick={handleFormButtonClick}>Fill Out The Form</buttom>

      {showForm && <FillForm onClose={handleFormClose} />}
    </>
  );
}

export default DontHaveKeyComponent;
