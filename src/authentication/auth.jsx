import './auth.css';
import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Button, TextField } from '@mui/material';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from './firebase'; // Ensure this import is correct

import { useNavigate } from 'react-router-dom';  // Correct navigation for react-router-dom v6
import Myimage from '../assests/pregantwomen.png';

const Phone = () => {
    const [phone, setPhone] = useState('');
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();  // Using useNavigate for React Router v6

    useEffect(() => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', {
                size: 'invisible',
                callback: () => {
                    console.log('reCAPTCHA verified!');
                },
                'expired-callback':() => {
                    console.error('reCAPTCHA expired. Resetting...');
                    window.recaptchaVerifier=null
                }
            });
        }
    },[]);

    const sendOtp = async () => {
        if (!phone || phone.length < 10) {
            console.error('Please enter a valid phone number');
            return;
        }

        try {
            const appVerifier = window.recaptchaVerifier;
            const confirmation = await signInWithPhoneNumber(auth, phone, appVerifier);
            console.log('OTP Sent!', confirmation);
            setConfirmationResult(confirmation);
        } catch (err) {
            console.error('Error sending OTP:', err);
        }
    };

    const verifyOtp = async () => {
        if (!confirmationResult) {
            console.error('No OTP confirmation result available');
            return;
        }

        try {
            const result = await confirmationResult.confirm(otp); // Verify OTP
            console.log('User signed in successfully!', result.user);
            console.log('user signed in successfully');
            // window.location.herf = '/register'
                    setTimeout(()=> {
                        console.log("Navigating to Onboarding-page");
                        navigate('/register'); // Redirect to Onboarding page on successful OTP verification
                    },500);
                    
                    console.log('Navigating to Onboarding-page'); // Debug log         
        } catch (err) {
            console.error('Error verifying OTP:', err);
            alert("Verification failed. Please try again.");
        }
    };
    return (

        <div className="phone-signin">
            <img src={Myimage} className="img" alt="Signup Illustration" style={{ width: '300px', height: '200px' }} />
            <PhoneInput
                className="phoneNum"
                country={"in"}
                value={phone}
                onChange={(phone) => setPhone("+" + phone)}
            />
            <br />
            <div className="sendOtp">
                <Button onClick={sendOtp} sx={{ marginTop: "10px" }} variant="contained">Send OTP</Button>
            </div>

            <div id="recaptcha"></div>

            <br />
            {confirmationResult && (
                <div className="enterOtp">
                    <TextField
                        className="enterOtp"
                        sx={{ marginTop: "10px", width: "300px" }}
                        variant="outlined"
                        size="small"
                        label="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                </div>
            )}
            <br />
            <div className="Verify">
                
                <Button onClick={verifyOtp} sx={{ marginTop: "10px", width: "300px" }} variant="contained" color="success">Verify OTP</Button>
            </div>

        </div>
    );
};

export default Phone;
