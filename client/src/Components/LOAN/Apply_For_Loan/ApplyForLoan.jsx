import React, { useState } from 'react';
import "./ApplyForLoan.css"
import { NavLink } from "react-router-dom"
import Footer from "../../Footer/Footer"

const ApplyForLoan = () => {
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [totalPayment, setTotalPayment] = useState('');
  const [totalInterest, setTotalInterest] = useState('');

  const calculateLoan = (e) => {
    e.preventDefault();

    // Get user inputs
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const annualInterestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
    const loanTerm = parseFloat(document.getElementById('loan-term').value);

    // Calculate monthly payment
    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfPayments = loanTerm * 12;
    const calculatedMonthlyPayment =
      (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    // Calculate total payment and total interest
    const calculatedTotalPayment = calculatedMonthlyPayment * numberOfPayments;
    const calculatedTotalInterest = calculatedTotalPayment - loanAmount;

    // Update state
    setMonthlyPayment(calculatedMonthlyPayment.toFixed(2));
    setTotalPayment(calculatedTotalPayment.toFixed(2));
    setTotalInterest(calculatedTotalInterest.toFixed(2));
  };

  const limitInputLength = (input, maxLength) => {
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  };

  return (
   <>
    <div>
      <div id="a_mainallcarddiv">
        <div className="a_mainallcarddiv_subdiv1">

          <h3 className="a_invDetTitle main-heading-inv">Loan Information</h3>

          <div className="a_text_and_ulmaindiv">

            <div id="div_for_img">

              <NavLink to="/LoanForm" style={{ textDecoration: "none" }}>
                <div className="Apply_loan_btn">
                  Apply Loan
                </div>
              </NavLink>

            </div>

            <div id="div_for_text">
              <h2 className="loadtexthead">Loan Application Information</h2>

              <p className="para">Welcome to RedPhantom Investment Pvt. Ltd. Loan Application Center ! Applying
                for a loan has never been easier. Whether you need a personal loan, a business loan, a
                mortgage, or an auto loan,
                we are here to assist you. Below, you'll find comprehensive information on how to apply and
                what you need to know to get started.</p><br />


              <div>
                <h3>Loan Types</h3>

                <p className="sub_text_under">We offer a range of loan options to suit your needs :</p>

                <ul className="ponted_text">
                  <li>Personal Loans: Unsecured loans for various personal expenses. </li>
                  <li> Business Loans: Financing solutions to support your business growth.</li>
                  <li>Mortgage Loans: For home purchases or refinancing. </li>
                  <li>Auto Loans: Get the vehicle you've been dreaming of. </li>

                </ul>
              </div><br />

              <div>
                <h3>Eligibility Criteria</h3>

                <p className="sub_text_under">Each loan type has specific eligibility requirements. To apply for
                  a loan, you must meet certain criteria, including:</p>

                <ul className="ponted_text">
                  <li>Minimum credit score </li>
                  <li>Income requirements</li>
                  <li>Employment status </li>
                </ul>

                <p className="sub_text_under">Please review the eligibility criteria for your specific loan type
                  to ensure you meet the qualifications.</p>
              </div><br />

              <div>
                <h3>Interest Rates and Terms</h3>

                <p className="sub_text_under">Our loans come with competitive interest rates and flexible terms.
                  You can find detailed information on interest rates,
                  loan terms, and repayment options for each loan type on our website.</p>
              </div><br />

              <div>
                <h3>Application Process</h3>

                <p className="sub_text_under">Applying for a loan is simple and straightforward. Here are the
                  steps:</p>

                <ul className="ponted_text">
                  <li>Start your application: Fill out our online application form, which is designed to
                    collect essential information about you.</li>
                  <li>Document submission: We'll require certain documents to process your application.
                    Please check our document checklist for guidance.</li>
                  <li>Review and approval: Our team will review your application and may conduct a credit
                    check (if required).</li>
                  <li>Loan approval: Upon approval, you will receive an offer detailing the terms and
                    conditions of your loan.</li>
                  <li>Disbursement: Once you accept the offer, your funds will be disbursed to you as per
                    your chosen disbursement method. </li>
                </ul>
              </div><br />

              <div>
                <h3>Online Application Form</h3>

                <p className="sub_text_under">Our secure online application form is designed for your
                  convenience. It will guide you through the application process,
                  step by step, and ensure that you provide all the necessary information.</p>
              </div><br />

              <div>
                <h3>Document Checklist</h3>

                <p className="sub_text_under">To facilitate a smooth application process, please prepare the
                  following documents:</p>

                <ul className="ponted_text">
                  <li>Proof of identity</li>
                  <li>Proof of income</li>
                  <li>Bank statements</li>
                  <li>Tax returns</li>
                  <li>Other documentation, as required for your specific loan type</li>
                </ul>
              </div><br />

              <div>
                <h3>Application Fees</h3>

                <p className="sub_text_under">Please note that there may be application fees associated with
                  your loan application. Details about these fees can be found in our terms and
                  conditions.</p>
              </div><br />

              <div>
                <h3>Security and Privacy</h3>

                <p className="sub_text_under">At Redphantom Investment Pvt. Ltd., we take your security and
                  privacy seriously. Your personal and financial information is protected by
                  state-of-the-art security measures and will remain confidential.</p>
              </div><br />

              <div>
                <h3>Estimated Timeframes</h3>

                <p className="sub_text_under">The time it takes to process your loan application may vary
                  depending on the type of loan and the completeness of your application. On average, you
                  can expect to receive a decision within [X days/weeks].</p>
              </div><br />

              <div>
                <h3>Terms and Conditions</h3>

                <p className="sub_text_under">We recommend that you review our terms and conditions and privacy
                  policy to understand the complete terms of your loan agreement.</p>
              </div><br />

              <div>
                <h3>FAQ Section</h3>

                <p className="sub_text_under">Check our frequently asked questions for answers to common
                  inquiries about the application process, eligibility, and loan terms.</p>
              </div><br />

              <div>
                <h3>Ready to Get Started?</h3>

                <p className="sub_text_under">To begin your loan application, click the "Apply Now" button
                  below. Our team is here to support you throughout the entire process, from application
                  to disbursement.</p>
              </div><br />

              <div>
                <h3>Mobile Optimization</h3>

                <p className="sub_text_under">Our website is optimized for mobile devices, ensuring a seamless
                  experience regardless of the device you use.</p>
              </div><br />

              <div>
                <h3>Testimonials and Trust Signals</h3>

                <p className="sub_text_under">Read what our satisfied customers have to say about their
                  experience with us. We are proud of our industry affiliations and certifications, which
                  demonstrate our commitment to high standards and professionalism.</p>
              </div><br />
              <div>
                <h3>Legal Compliance</h3>

                <p className="sub_text_under">We are fully compliant with all relevant legal and regulatory
                  requirements, ensuring your peace of mind when applying for a loan with us.</p>
              </div>


              <div>
                <h3>Customer Support</h3>

                <p className="sub_text_under">If you have any questions or require assistance during the
                  application process, our dedicated customer support team is here to help. <br />
                  You can reach us at</p>

                <ul className="ponted_text">
                  <li><b><a className="blackLink" href="tel:8600892622">Call Us On : 8600892622</a></b></li>
                  <li style={{ textAlign: "start" }}><b><a className="blackLink" href="mailto:contact@rptechnovelty.com" >Mail Us On : contact@rptechnovelty.com</a></b></li>
                </ul>
              </div><br />

              <button className='form-button button-fancy -black' style={{ marginInline: "auto" }}>
                <span className="arrow"></span>
                <span className="text">Back</span>
              </button>

            </div>

          </div>

        </div>
      </div>

      <div className="calculator-div">
        <div className="inner_calculator_div">
          <h1 className="LC_head">Loan Calculator</h1>

          <form onSubmit={calculateLoan} id="loan-form">
            <div className="div1">
              <label htmlFor="loan-amount" className="lables_main">
                Loan Amount (₹) :
              </label>
              <input type="number" id="loan-amount" className="input_sec" required />
            </div>

            <div className="div1">
              <label htmlFor="interest-rate" className="lables_main">
                Annual Interest Rate (%) :
              </label>
              <input
                type="number"
                id="interest-rate"
                className="input_sec"
                required
                onInput={() => limitInputLength(this, 2)}
              />
            </div>

            <div className="div1">
              <label htmlFor="loan-term" className="lables_main">
                Loan Term (years) :
              </label>
              <input type="number" id="loan-term" className="input_sec" required />
            </div>

            <input type="submit" value="Calculate" className="calculate" />
          </form>

          <div id="results">
            <h2 className="LC_head">Loan Details</h2>

            <div className="div1">
              <p className="MONPay">Monthly Payment:</p>
              <p id="monthly-payment" className="input_sec oth">
                {monthlyPayment}
              </p>
            </div>

            <div className="div1">
              <p className="MONPay">Total Payment: </p>
              <p id="total-payment" className="input_sec oth">
                {totalPayment}
              </p>
            </div>

            <div className="div1">
              <p className="MONPay">Total Interest:</p>
              <p id="total-interest" className="input_sec oth">
                {totalInterest}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
   
   <Footer />
   </>
  );
};

export default ApplyForLoan;
