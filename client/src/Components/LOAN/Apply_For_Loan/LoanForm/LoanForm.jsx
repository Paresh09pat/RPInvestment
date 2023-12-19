import React, { useState } from 'react';
import './LoanForm.css';
import { Icon } from '@iconify/react';

const LoanForm = () => {
    const [formData, setFormData] = useState({
        LF_firstName: '',
        LF_lastName: '',
        LF_email: '',
        LF_phone: '',
        LF_amount: '',
        LF_purpose: '',
        LF_document: null,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        const inputValue = type === 'file' ? files[0] : value;
        setFormData({ ...formData, [name]: inputValue });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const getFileInputLabel = () => {
        return formData.LF_document ? formData.LF_document.name : 'Upload Last Six Month Bank Statement';
    };
    return (
        <>
            <div className='LF_Main_Outer'>
                <div className="LF_container">
                    <h1 className='head_loan_apply'>Loan Application Form</h1>
                    <form onSubmit={handleSubmit} className="LF_form">

                        <input
                            type="text"
                            name="LF_firstName"
                            value={formData.LF_firstName}
                            onChange={handleChange}
                            className="input-text newani"
                            required
                            placeholder='Enter Your First Name . .'
                        />

                        <br />
                        <input
                            type="text"
                            name="LF_lastName"
                            value={formData.LF_lastName}
                            onChange={handleChange}
                            className="input-text newani"
                            required
                            placeholder='Enter Your Last Name . .'
                        />

                        <br />

                        <input
                            type="email"
                            name="LF_email"
                            value={formData.LF_email}
                            onChange={handleChange}
                            className="input-text newani"
                            required
                            placeholder='Enter Your Email Address . .'
                        />

                        <br />

                        <input
                            type="tel"
                            name="LF_phone"
                            value={formData.LF_phone}
                            onChange={handleChange}
                            className="input-text newani"
                            required
                            maxLength={10}
                            placeholder='Enter Your Contact Number . .'
                        />

                        <br />

                        <input
                            type="number"
                            name="LF_amount"
                            value={formData.LF_amount}
                            onChange={handleChange}
                            className="input-text newani"
                            required
                            placeholder='Enter Your Loan Amount . .'
                        />

                        <br />

                        <textarea
                            name="LF_purpose"
                            value={formData.LF_purpose}
                            onChange={handleChange}
                            className="input-text1 newani tw_textarea"
                            required
                            placeholder='Reason for Apply Loan . .'
                        />

                        <br />
                        <div className="LF_file-input-container">
                            <input
                                type="file"
                                name="LF_document"
                                onChange={handleChange}
                                className="LF_form-input LF_file-input"
                                accept=".pdf, .doc, .docx"
                                required
                            />
                            <div className="LF_file-label">
                                <div className='name_fetch_div'>{getFileInputLabel()}</div>
                                <button className='choose_file'>Choose File  <Icon icon="material-symbols:upload" className='upload_icon' /></button>
                            </div>
                        </div>

                        <br />
                        <button className='form-button button-fancy -black' style={{marginInline:"auto"}} >
                            <span className="arrow"></span>
                            <span className="text">Sign Up</span>
                        </button>
                    </form>
                </div>
            </div>

        </>
    );
};

export default LoanForm;
