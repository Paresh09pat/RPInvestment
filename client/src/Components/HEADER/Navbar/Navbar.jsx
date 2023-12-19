import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
   <>
   <div style={{display:"flex",justifyContent:"space-evenly", padding:"10px 0px 10px 0px",position:"fixed",width:"100%",background:"aqua", top:"0px",zIndex:"1"}}>
   <NavLink to="/Signup">Signup</NavLink>
   <NavLink to="/Login">Login</NavLink>
   <NavLink to="/EmailVerification">EmailVerification</NavLink>
   <NavLink to="/MobileVerification">MV</NavLink>
   <NavLink to="/LoginPass">LoginPass</NavLink>
   {/* <NavLink to="/Chatbot">Chatbot</NavLink> */}
   {/* <NavLink to="/UpLoginPass">UpLoginPass</NavLink> */}
   {/* <NavLink to="/FirstPopup">FirstPopup</NavLink> */}
   {/* <NavLink to="/SecPopup">SecPopup</NavLink> */}
   {/* <NavLink to="/Table">Table</NavLink>  */}
  
   </div>
   
   </>
  )
}

export default Navbar