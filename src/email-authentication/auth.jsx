import { useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import "./email-auth.css";
import "../../style.css";
import Myimage from "../assests/pregantwomen.png";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState(""); // New error state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (email === "" || password === "") {
      setError("Please enter both email and password.");
      return;
    }

    if (isSignUp) {
      if (password.length < 6) {
        setError("Password must be at least 6 characters long!");
        return;
      }

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up!");
        actionDone(); // Navigate only on success
      } catch (error) {
        setError(error.message);
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User signed in!");
        actionDone(); // Navigate only on success
      } catch (error) {
        setError("Invalid email or password! Please try again." + error); // Show error message
      }
    }
  };

  const actionDone = () => {
    setTimeout(() => {
      console.log("Navigating to Onboarding-page");
      navigate("/register");
    }, 500);
  };

  return (
    <div className="email-Container">
      <h1>CradleCare</h1>
      <img
        src={Myimage}
        className="img"
        alt="Signup Illustration"
        style={{ width: "300px", height: "200px" }}
      />

      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="enterEmail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <br />
        <input
          className="enterEmail"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <button className="button" id="signin" type="submit">
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>

      {/* Show error message if authentication fails */}
      {error && <p style={{ color: "red" }}>{error}</p>}
<br />
      <button
        className="button"
        id="signup"
        onClick={() => {
          setIsSignUp(!isSignUp);
          setError(""); // Clear error when switching forms
        }}
        >
        Switch to {isSignUp ? "Sign In" : "Sign Up"}
      </button>
        </form>
    </div>
  );
};

export default AuthPage;
