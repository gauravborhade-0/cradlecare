// import React from "react";
import "./motherhood-prime.css";  // Import external CSS file
import { useNavigate } from "react-router-dom";

const plans = [
  { count: 2, title: "Gynaecologist Visits" },
  { count: 4, title: "Nurse Home Visits" },
  { count: 4, title: "Pediatricians Live Session" },
];


const MotherhoodPrime = () => {
    const navigate = useNavigate();
  return (
    <div className="container">
      <div className="header">Motherhood Prime</div>
      <div className="content">
        <h2>About <span className="highlight">Motherhood Prime</span></h2>
        <h3>Monthly Plan</h3>
        <div className="plan-container desktop-layout">
          {plans.map((plan, index) => (
            <div key={index} className="plan-card">
              <p className="plan-count">{plan.count}</p>
              <p className="plan-title">{plan.title}</p>
            </div>
          ))}
        </div>
        <button className="checkout-button"  onClick={() => navigate("/checkoutApproval")}>
            Checkout ₹2,999</button>
      </div>
    </div>
  );
};

export default MotherhoodPrime;