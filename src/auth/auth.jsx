// import Myimage from '../assests/pregantwomen.png'; // Fixed typo in 'assets'
// import { useState } from 'react';
// import './auth.css';
// import { useNavigate } from "react-router-dom";


// function SignUp() {
//   const [showData, setShowData] = useState(false);
//   const navigate = useNavigate()

//   // Function to handle button click
//   const handleClick = (event) => {
//     event.preventDefault(); // Prevent default form submission
//     setShowData(true);
//   };

//   return (
//     <form className='Form'>
//       <div className="signup-page" id="signup-page">
//         <img src={Myimage} className='img'  alt="Signup Illustration" style={{ width: '300px', height: '200px' }} />
//         <br />
//         <h2>Login/Signup</h2>
//         <br />
//         <p className="mo-digit">Enter your 10-digit phone number to get started</p>
//         <br />

//         <label htmlFor="mobileno" id="label-mobileno" required>
//           <h3>Mobile No.</h3>
//           <input
//             type="tel"
//             className="mobileno"
//             id="mobileno"
//             placeholder="+91 Enter mobile number"
//             maxLength={10}
//             required
//           />
//         </label>
//         <br />
//         <br />
//         <button id="get-otp" className="getotp" onClick={handleClick}>
//           GET OTP
//         </button>
//         <br />
//         {showData && (
//           <div className="otp-section">
//             <label htmlFor="otp-inputs">
//               <p className="enter-otp">Enter OTP</p>
//               <br />
//               <div id="otp-inputs">
//                 <input type="text"  className="input-otp" />
//                 {/* <input type="text" maxLength={1} className="input-otp" />
//                 <input type="text" maxLength={1} className="input-otp" />
//                 <input type="text" maxLength={1} className="input-otp" />
//                 <input type="text" maxLength={1} className="input-otp" />
//                 <input type="text" maxLength={1} className="input-otp" /> */}
//               </div>
//             </label>
//             <br />
           
//             <button type="submit" className="verify" 
//              onClick={() => navigate("/Onboarding-page")}>
//               Verify
//             </button>
            
//           </div>
//         )}
//       </div>
//     </form>
//   );
// }

// export default SignUp;