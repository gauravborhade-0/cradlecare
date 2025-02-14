// src/components/SOSButton.js
import  { useState } from "react";
import axios from "axios";
import './sos.css'

const SOSButton = () => {
  const [isSending, setIsSending] = useState(false);
  const emergencyContacts = ["+91 9920532528"]; // Replace with actual numbers.

  const sendSOS = async () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
 
    setIsSending(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const message = `Emergency! I need help. My current location: https://www.google.com/maps?q=${latitude},${longitude}`;

        try {
          // Example API call for sending SMS (replace with actual API service)
          await Promise.all(
            emergencyContacts.map((contact) =>
              axios.post("https://your-sms-api.com/send", {
                to: contact,
                message: message,
              })
            )
          );
          alert("SOS alert sent successfully!");
        } catch (error) {
          console.error("Error sending SOS alert:", error);
          alert("Failed to send SOS alert. Please try again.");
        } finally {
          setIsSending(false);
        }
      },
      (error) => {
        console.error("Error getting location:", error);
        alert("Failed to get location.");
        setIsSending(false);
      }
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button className="sosbutton"
        onClick={sendSOS}
        disabled={isSending}
      >
        {isSending ? "Sending SOS..." : "Send SOS"}
      </button>
    </div>
  );
};

export default SOSButton;
