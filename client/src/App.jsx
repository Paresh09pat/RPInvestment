import React from 'react'
import Login from "./Components/REGISTRATION/LogIn/Login.jsx"
import Signup from './Components/REGISTRATION/Signup/Signup.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/HEADER/Navbar/Navbar.jsx';
import Sidebar from './Components/HEADER/Sidebar/Sidebar.jsx';
import Dashboard from './Components/DASHBOARDS/Dashboard/Dashboard.jsx';
import Ledger from './Components/DASHBOARDS/Ledger/Ledger.jsx';
import Portfolio from './Components/DASHBOARDS/Portfolio/Portfolio.jsx';
import Deposit from './Components/DEPOSITES/Deposit/Deposit.jsx';
import DepositRecord from './Components/DEPOSITES/DepositRecord/DepositRecord.jsx';
import FundTransfer from './Components/INTERNAL_FUND_TRANSFER/FundTransfer/FundTransfer.jsx';
import FundTransferRecord from './Components/INTERNAL_FUND_TRANSFER/FundTransferRecord/FundTransferRecord.jsx';
import InvestmentForm from './Components/INVESTMENT/InvestmentForm/InvestmentForm.jsx';
import InvestmentRecords from './Components/INVESTMENT/InvestmentRecords/InvestmentRecords.jsx';
import ApplyForLoan from './Components/LOAN/Apply_For_Loan/ApplyForLoan.jsx';
import AddUser from './Components/NETWORK/AddUser/AddUser.jsx';
import MyUser from './Components/NETWORK/MyUser/MyUser.jsx';
import PartnerPortfolio from "./Components/PARTNER/PartnerPortfolio/PartnerPortfolio.jsx"
import InvestmentRequest from "./Components/PARTNER/InvestmentRequest/InvestmentRequest.jsx"
import WithdrawalRequest from "./Components/PARTNER/WithdrawalRequest/WithdrawalRequest.jsx"
import PartnerDeposite from "./Components/PARTNER/PartnerDeposite/PartnerDeposite.jsx"
import P_Deposite from "./Components/PARTNER/P_Deposite/P_Deposite.jsx"
import P_Withdrawal from "./Components/PARTNER/P_Withdrawal/P_Withdrawal.jsx"
import PartnerRecords from "./Components/PARTNER/PartnerRecords/PartnerRecords.jsx"
import MyProfile from "./Components/PROFILE/MyProfile/MyProfile.jsx"
import Setting from "./Components/PROFILE/SETTING/Setting/Setting.jsx"
import Withdrawal from "./Components/WITHDRAWALS/Withdrawal/Withdrawal.jsx"
import WithdrawalRecords from "./Components/WITHDRAWALS/WithdrawalRecord/WithdrawalRecord.jsx"
import EmailVerification from './Components/REGISTRATION/EmailVerification/EmailVerification.jsx';
import Tooltip from './Components/REGISTRATION/EmailVerification/Tooltip/Tooltip.jsx';
import MobileVerification from './Components/REGISTRATION/MobileVerification/MobileVerification.jsx';
import LoginPass from './Components/REGISTRATION/LoginPass/LoginPass.jsx';
import FirstPop from './Components/POPUP/INPopup/FirstPop.jsx';
import SecPopup from './Components/POPUP/OutPopup/SecPopup.jsx';
import Table from './Sample_Of_Comp/Table.jsx';
import UpLoginPass from './Components/PROFILE/SETTING/UpLoginPass/UpLoginPass.jsx';
import Chatbot from './Chatbot/Chatbot.jsx';
import LoanForm from './Components/LOAN/Apply_For_Loan/LoanForm/LoanForm.jsx';


function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar />
     <Sidebar />
      <Routes>
   
       <Route path='/EmailVerification' element={<EmailVerification />}> </Route>
       <Route path='/Signup' element={<Signup />}> </Route>
       <Route path='/Login' element={<Login />}> </Route>
       <Route path='/Dashboard' element={<Dashboard />}></Route>
       <Route path="/Ledger" element={<Ledger />}></Route>
       <Route path="/Portfolio" element={<Portfolio />}></Route>
       <Route path="/Deposit" element={<Deposit />}></Route>
       <Route path="/DepositRecords" element={<DepositRecord />}></Route>
       <Route path="/FundTransefer" element={<FundTransfer />}></Route>
       <Route path="/FundTranseferRecords" element={<FundTransferRecord />}></Route>
       <Route path="/InvestmentForm" element={<InvestmentForm />}></Route>
       <Route path="/InvestmentFormRecords" element={<InvestmentRecords />}></Route>
       <Route path="/ApplyLoan" element={<ApplyForLoan />}></Route>
       <Route path="/Adduser" element={<AddUser />}></Route>
       <Route path="/Myuser" element={<MyUser />}></Route>
       <Route path="/PartnerPortfolio" element={<PartnerPortfolio />}></Route>
       <Route path="/PartnerRecords" element={<PartnerRecords />}></Route>
       <Route path="/InvestmentRequest" element={<InvestmentRequest />}></Route>
       <Route path="/WithdrawalRequest" element={<WithdrawalRequest />}></Route>
       <Route path="/PartnerDeposite" element={<PartnerDeposite />}></Route>
       <Route path="/P_Deposite" element={<P_Deposite />}></Route>
       <Route path="/P_Withdrawal" element={<P_Withdrawal />}></Route>
       <Route path="/MyProfile" element={<MyProfile />}></Route>
       <Route path="/Setting" element={<Setting />}></Route>
       <Route path="/Withdrawal" element={<Withdrawal />}></Route>
       <Route path="/WithdrawalRecords" element={<WithdrawalRecords />}></Route>      
       <Route path="/Tooltip" element={<Tooltip />}></Route>      
       <Route path="/MobileVerification" element={<MobileVerification />}></Route>      
       <Route path="/LoginPass" element={<LoginPass />}></Route>      
       <Route path="/FirstPopup" element={<FirstPop />}></Route>      
       <Route path="/SecPopup" element={<SecPopup />}></Route>      
       <Route path="/Table" element={<Table />}></Route>      
       <Route path="/UpLoginPass" element={<UpLoginPass />}></Route>      
       {/* <Route path="/Chatbot" element={<Chatbot />}></Route>       */}
       <Route path="/LoanForm" element={<LoanForm />}></Route>      
         
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App;
