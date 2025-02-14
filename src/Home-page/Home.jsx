import "./home.css"; // Import the updated CSS file
import Slidebar from '../slidebar/Slidebar'
import { useNavigate } from "react-router-dom";
export default function CradleCare() {
  const navigate = useNavigate();

  return (
    <div className="desktop-container">
      {/* Header */}
      <div className="header">
      <Slidebar/>
        <h1>Cradle Care 💕</h1>
        <p>Baby&aposs Arrival Countdown</p>
        <p className="countdown">365 Days Left</p>
      </div>

      {/* KYC & Subscription */}
      <div className="info-section">
        <div className="kyc-status">
          <a className="kyc-title" onClick={() => navigate("/KYC")}>KYC Status:</a>
          <p className="pending">Pending</p>
        </div>
        <div className="motherhood-prime">
          <p className="prime-title">Motherhood Prime</p>
          <p>Elevate your pregnancy experience</p>
          <button className="start-btn" onClick={()=>navigate("/motherhood-prime")}>Start Now</button>
        </div>
      </div>

      {/* Expert Tips */}
      <h2 className="tips-heading">Baby Bump Insights: Expert Tips</h2>
      <div className="tips-grid">
        {[ 
          { title: "Nutritious Diet", text: "Fuel your baby's growth with a balanced diet rich in vitamins and minerals." },
          { title: "Prenatal Vitamins", text: "Ensure optimal nutrition with prenatal vitamins recommended by your doctor." },
          { title: "Regular Prenatal Visits", text: "Monitor your baby’s growth and well-being through regular check-ups." },
          { title: "Stay Hydrated", text: "Drink plenty of water to support circulation and amniotic fluid levels." },
        ].map((tip, index) => (
          <div key={index} className="tip-box">
            <h3>{tip.title}</h3>
            <p>{tip.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
