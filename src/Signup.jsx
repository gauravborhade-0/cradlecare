import Myimage from './assests/pregantwomen.png'; 
import { useState } from 'react';
import './signup.css';


function Signup() {
  
  const [showData, setShowData] = useState(false);

  // Function to handle button click
  const handleClick = () => {
    setShowData(true);
  };

  return (
    <form>
      <div className="Signup-page" id="signup-page">
        <img src={Myimage} alt="Signup Illustration" style={{ width: '300px', height: '200px' }} />
        <br />
        <h2>Login/Signup</h2>
        <br />
        <p className='mo-digit'>Enter your 10-digit phone number to get started</p>
        <br />

        <label id="label-mobileno">
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
        <br /><br />
        <button  id="Getotp" name="getotp" onClick={handleClick}>
          GET OTP
        </button>
        <br />
        {showData && (
<div className="">

          <label htmlFor="">
        <p className='Enter-otp'>Enter OTP</p>
        <br />

        <input type="text" maxLength={1} className="input-otp"/>
        <input type="text" maxLength={1} className="input-otp"/>
        <input type="text" maxLength={1} className="input-otp"/>
        <input type="text" maxLength={1} className="input-otp"/>
        <input type="text" maxLength={1} className="input-otp"/>
        <input type="text" maxLength={1} className="input-otp"/>
      </label>  

      <br />

      <button type='submit' className='verify'>Verify</button>
</div>
      )}

      </div>
    </form>
  );
}

export default Signup;
