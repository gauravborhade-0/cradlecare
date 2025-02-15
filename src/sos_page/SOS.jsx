import  { useState } from "react";
import "./sos.css"; // Import the CSS file

const SosButton = () => {
  const ambulanceNumber = "+91102"; // Replace with actual emergency number
  const [isHovered, setIsHovered] = useState(false);

  const handleSOS = () => {
    window.location.href = `tel:${ambulanceNumber}`;
  };

  return (
    <div className="sos-wrapper">
      <button
        className={`sos-button ${isHovered ? "hovered" : ""}`}
        onClick={handleSOS}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        🚨 Call for Help
      </button>
    </div>
  );
};

export default SosButton;
