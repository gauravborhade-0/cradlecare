import { useState } from 'react';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../firebase/firebase';
import { useNavigate } from "react-router-dom";
import './email-auth.css'; // Ensure you import your CSS file here
import Myimage from '../assests/pregantwomen.png'

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email and password fields
    if (email === '' || password === '') {
      alert('Please enter both email and password.');
      return;
    }

    if (isSignUp) {
      // Check if password is at least 6 characters long
      if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        return;
      }

      // Sign Up
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('User signed up!');
      } catch (error) {
        console.error('Error during sign up:', error.message);
      }
    } else {
      // Sign In
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in!');
      } catch (error) {
        console.error('Error during sign in:', error.message);
      }
    }
  };

  // Moved the actionDone function outside of handleSubmit
  const actionDone = () => {
    setTimeout(()=> {
      console.log("Navigating to Onboarding-page");
      navigate('/register'); // Redirect to Onboarding page on successful OTP verification
  },500);
  };

  return (
    <div className="phone-signin">
      <h1>CradleCare</h1>
                  <img src={Myimage} className="img" alt="Signup Illustration" style={{ width: '300px', height: '200px' }} />
      
      <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      <form onSubmit={handleSubmit}>
        <input 
          className="phoneNum" // Applying class for styling
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
        />

        <br />
        <input 
          className="phoneNum" // Applying class for styling
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
        />
        <br />
        <button 
          className="sendOtp" // Applying class for styling
          type="submit" 
          onClick={actionDone}
        >
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
      <button 
        className="Verify" // Applying class for styling
        onClick={() => { setIsSignUp(!isSignUp) }}
      >
        Switch to {isSignUp ? 'Sign In' : 'Sign Up'}
      </button>
    </div>
  );
};

export default AuthPage;
