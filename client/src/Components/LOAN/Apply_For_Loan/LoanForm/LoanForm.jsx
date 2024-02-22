import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Icon } from '@iconify/react';
import './LoanForm.css';

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

    const [selectedFileName, setSelectedFileName] = useState('No file chosen');

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        const inputValue = type === 'file' ? files[0] : value;

        if (type === 'file') {
            if (files.length > 0) {
                setSelectedFileName(files[0].name);
            } else {
                setSelectedFileName('No file chosen');
            }
        }

        setFormData({ ...formData, [name]: inputValue });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emptyFields = Object.keys(formData).filter((key) => !formData[key]);

        if (emptyFields.length > 0) {
            toast.error(`Please fill all fields`);
            return;
        }

        toast.success('Form submitted successfully!');
    };

    const getFileInputLabel = () => {
        return formData.LF_document ? formData.LF_document.name : 'Upload Last Six Month Bank Statement';
    };

    return (
        <>
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
                theme="dark" />

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
                            placeholder='Enter Your First Name . .'
                        />

                        <br />

                        <input
                            type="text"
                            name="LF_lastName"
                            value={formData.LF_lastName}
                            onChange={handleChange}
                            className="input-text newani"
                            placeholder='Enter Your Last Name . .'
                        />

                        <br />

                        <input
                            type="email"
                            name="LF_email"
                            value={formData.LF_email}
                            onChange={handleChange}
                            className="input-text newani"
                            placeholder='Enter Your Email Address . .'
                        />

                        <br />

                        <input
                            type="tel"
                            name="LF_phone"
                            value={formData.LF_phone}
                            onChange={handleChange}
                            className="input-text newani"
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
                            placeholder='Enter Your Loan Amount . .'
                        />

                        <br />

                        <textarea
                            name="LF_purpose"
                            value={formData.LF_purpose}
                            onChange={handleChange}
                            className="input-text1 newani tw_textarea"
                            placeholder='Reason for Apply Loan . .'
                        />

                        <br />

                        <div className="SetF_file-input-container">
                            <label className="SetF_file-label" htmlFor="fileInput">
                                <input
                                    id="fileInput"
                                    type="file"
                                    name="LF_document"
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

                        <br />

                        <button type="submit" className='form-button button-fancy -black' style={{ marginInline: "auto", outline: "none" }} >
                            <span className="arrow"></span>
                            <span className="text">Submit</span>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoanForm;
