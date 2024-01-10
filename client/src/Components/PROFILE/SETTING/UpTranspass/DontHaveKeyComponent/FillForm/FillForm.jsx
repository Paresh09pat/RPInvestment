import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Icon } from '@iconify/react';
import "./FillForm.css";

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

    // Perform form validation
    const fullName = e.target.fullName.value.trim();
    const email = e.target.email.value.trim();
    const contact = e.target.contact.value.trim();
    const message = e.target.message.value.trim();
    const fileInput = e.target.SetF_document;
    const checkbox1 = e.target.checkbox1.checked;
    const checkbox2 = e.target.checkbox2.checked;

    if (!fullName || !email || !contact || !message || !fileInput.files.length) {
      toast.error('All fields are required to fill ');
      return;
    }

    if (!checkbox1 && !checkbox2) {
      toast.error('At least check one checkbox');
      return;
    }

    toast.success('Form submitted successfully!');
  };

  return (
    <>
      <div className="form_container_main">
        <form className='form_inner_div' onSubmit={handleSubmit}>
          <input type="text" id="fullName" name="fullName" placeholder="Full Name"  className='input-text newani ad_wid' />

          <input type="email" id="email" name="email" placeholder="Email"  className='input-text newani ad_wid' />

          <input type="text" id="contact" name="contact" placeholder="Contact"  className='input-text newani ad_wid' />

          <textarea id="message" name="message" rows="4" placeholder="Message"  className='input-text1 newani ad_wid ad_wid1'></textarea>

          <div className='space_for_checkbox'>
            <ul className="pass_set_check">
              <li className="arrange">
                <input type="checkbox" id="checkbox1" name="checkbox1" />
                <label htmlFor="checkbox1" className='label-info'> Check this box if you've lost your 12-Phrase Key*</label>
              </li>
              <li>
                <input type="checkbox" id="checkbox2" name="checkbox2" />
                <label htmlFor="checkbox2" className='label-info'> Check this box if you're having trouble accessing your account</label>
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

          <button className='form-button button-fancy -black' style={{ marginInline: "auto", marginTop: "25px", marginBottom: "10px" }}>
            <span className="arrow"></span>
            <span className="text">Submit</span>
          </button>

          <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"/>

        </form>

      </div>
    </>
  );
}

export default FillForm;
