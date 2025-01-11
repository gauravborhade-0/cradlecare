// import  { useState } from 'react';
import Myimage from './assests/pregantwomen.png';
import './signup.css';

function Signup() {

  return (
    <>
      <form >
        <div className="Signup-page" id="signup-page">
          <img src={Myimage} alt="Signup Illustration" style={{ width: '300px', height: '200px' }} />
          <h1>Login/Signup</h1>
          <p>Enter your 10-digit phone number to get started</p>
          <label id='label-mobileno'>
            <h3>Mobile No.</h3>
            <input
              type="tel"
              name="Mobileno"
              id="Mobileno"
              placeholder="+91 Enter mobile number"
              maxLength={10}
              required
            />
          </label>
          <label>
            <button type="submit" id="Getotp" name="getotp">
              GET OTP
            </button>
          </label>
        </div>
      </form>
    </>
  );
}

export default Signup;
