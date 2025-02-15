// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

// import PageA from "../authentication/auth";
import PageB from '../register/register';
import Homepage from '../Home-page/Home'
import Chatbot from '../chatbot/chatbot'
import KYC from '../Kyc/Kyc'
import Profile from '../profile_page/profile-page'
import SOS from '../sos_page/SOS'
import Motherhoodprime from '../motherhood-prime/mainpage'
import CheckoutApproval from '../motherhood-prime/prime-plan'
import PageA from '../email-authentication/auth'
import Pay from "../payment-gateway/razorpay"
function DebugRoute() {
  let location = useLocation();
  console.log("Current Route:", location.pathname);
  return null;
}

function App() {
  return (
    <Router>
      <DebugRoute/>
      <Routes>
        <Route path="/" element={<PageA />} />
        <Route path="/register" element={<PageB />} />
        <Route path="/Home-page" element={<Homepage />}/>
        <Route path ="/Chatbot" element={<Chatbot/>}/>
        <Route path="/KYC" element ={<KYC/>} />
        <Route path = "/profile" element = {<Profile/>} /> 
        <Route path = "/sos" element = {<SOS/>}/>
        <Route path = '/motherhood-prime' element={<Motherhoodprime/>}/>
        <Route path = '/checkoutApproval' element={<CheckoutApproval/>}/>
        <Route path = '/pay' element={<Pay/>}/>
      </Routes>
    </Router>
  );

}

export default App;