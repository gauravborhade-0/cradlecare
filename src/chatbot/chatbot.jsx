import { useState } from "react";
import './chatbot.css'


const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const API_KEY = "AIzaSyCsjECZb2vjiXLugDrcWLd9nuXO7MX8GXs"; // Securely store in .env

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ role: "user", parts: [{ text: input }] }],
          }),
        }
      );

      const data = await response.json();

      // Extract bot's response properly
      const botReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.";

      setMessages([...messages, userMessage, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([...messages, userMessage, { sender: "bot", text: "Error retrieving response." }]);
    }

    setInput("");
  };
 
  return (
    <div className="chat-container" style={{ maxWidth: "400px", margin: "auto", textAlign: "center", marginTop:"20px" }}>
      <h2 className="Mums">Mums Mate</h2>
      <div className="Message-body" style={{ border: "1px solid gray", padding: "10px", height: "300px", overflowY: "auto" }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left", margin: "5px" }}>
            <b>{msg.sender === "user" ? "You" : "Mums-Mate"}:</b> {msg.text}
          </div>
        ))}
      </div>
      <input
      className="input-message"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        style={{ width: "80%", padding: "5px" }}
      />
      <button onClick={sendMessage} className="sendBtn" style={{ padding: "5px 10px", marginLeft: "5px" }}>Send</button>

      {/* <button
        onClick={() => navigate("/auth")}
        style={{ padding: "5px 10px", marginLeft: "5px" }}
      >
        Go To Authentication
      </button> */}
    </div>
  );
};
export default Chatbot;