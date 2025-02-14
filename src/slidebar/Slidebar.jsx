import { useState } from "react";
import './slidebar.css'; // Assuming this is where your styles are
import InterIcon from '../assests/showInterface.png'; // Correct image path
import Homelogo from '../assests/home.png'
import Chatbot from '../assests/chatbot.png'
import SOS from '../assests/sos.png'
import Userprofile from '../assests/user.png'
import { useNavigate } from "react-router-dom";


const ToggleContent = () => {
  // State to manage visibility of the content
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate()

  // Function to toggle visibility
  const toggleContent = () => {
    setIsVisible((prev) => !prev);
  };
 
  return (
    <div>
      {/* Clickable div with image (this will toggle visibility) */}
      <div onClick={toggleContent} style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
        <img src={InterIcon} alt="Show/Hide Content" className="InterIcon" />
      </div>

      {/* Content to show/hide */}
      {isVisible && (
        <div className="menu">
          <div className="mainHeader">
            <a href="#" className="header1" >
              <img src={Homelogo} alt="" className="Homelogo"/> 
                Home</a>
            <a href="#" className="header1" onClick={() => navigate("/Chatbot")}>
              <img src={Chatbot} alt="" className="Chatbot" />
              Mums Mate</a>
            <a href="#" className="header1" onClick={() => navigate("/sos")}>
              <img src={SOS} alt="" className="SOS"/>
              SOS</a>
            <a href="#" className="header1" onClick={() => navigate("/profile")}>
              <img src={Userprofile} alt="" className="Userprofile"/>
              Profile</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToggleContent;
