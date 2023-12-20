import React, { useState } from 'react';
import "./FillForm.css";
import { Icon } from '@iconify/react';

function FillForm({ onClose }) {
  const [selectedFileName, setSelectedFileName] = useState('No file chosen');

  const handleChange = (e) => {
    const fileInput = e.target;
    if (fileInput.files.length > 0) {
      setSelectedFileName(fileInput.files[0].name);
    } else {
      setSelectedFileName('No file chosen');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <>
      <div className="form_container_main">
        <form className='form_inner_div' onSubmit={handleSubmit}>
          <input type="text" id="fullName" name="fullName" placeholder="Full Name" required className='input-text newani ad_wid' />

          <input type="email" id="email" name="email" placeholder="Email" required className='input-text newani ad_wid' />

          <input type="text" id="contact" name="contact" placeholder="Contact" required className='input-text newani ad_wid' />

          <textarea id="message" name="message" rows="4" placeholder="Message" required className='input-text1 newani ad_wid ad_wid1'></textarea>

          <div className='space_for_checkbox'>
            <ul className="pass_set_check">
              <li className="arrange">
                <input type="checkbox" id="" disabled />
                <label htmlFor="showPassword" className='label-info'> Check this box if you've lost your 12-Phrase Key*</label>
              </li>
              <li>
                <input type="checkbox" id="" disabled />
                <label htmlFor="showPassword" className='label-info'> Check this box if you're having trouble accessing your account</label>
              </li>
            </ul>
          </div>

          <div className="SetF_file-input-container">
            <label className="SetF_file-label" htmlFor="fileInput">
              <input
                id="fileInput"
                type="file"
                name="SetF_document"
                onChange={handleChange}
                className="SetF_form-input SetF_file-input"
                accept=".pdf, .doc, .docx"
              />
              <div className="name_fetch_div_form">{selectedFileName}</div>
              <p className="SetF_choose_file">
                Choose File <Icon icon="material-symbols:upload" className='upload_icon' />
              </p>
            </label>
          </div>

          <div>
            <button className='form-button button-fancy -black' >
              <span className="arrow"></span>
              <span className="text">Submit</span>
            </button>
            <button onClick={onClose} className='form-button button-fancy -black' >
              <span className="arrow"></span>
              <span className="text">Back</span>
            </button>
          </div>

        </form>

      </div>
    </>
  );
}

export default FillForm;
