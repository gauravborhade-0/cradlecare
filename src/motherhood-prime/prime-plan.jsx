import React from "react";
import "./checkoutApproval.css"; // Import external CSS file

const CheckoutApproval = () => {
  return (
    <div className="checkout-container desktop-view">
      <div className="header">Checkout Approval</div>
      <div className="payment-section">
        <h2>Payment Confirmation</h2>
        <p className="amount-text">
          Total Amount Payable <br />
          (inc. GST): <span className="amount-highlight">₹2,999/-</span>
        </p>
      </div>

      <div className="breakdown-card">
        <h3>View Breakdown</h3>
        <div className="breakdown-item">
          <span>Cradle Care Service</span>
          <span>₹2,849.5/-</span>
        </div>
        <div className="breakdown-item">
          <span>GST (5%)</span>
          <span>₹149.5/-</span>
        </div>
        <div className="breakdown-item total">
          <span>TOTAL</span>
          <span>₹2,999/-</span>
        </div>
      </div>

      <button className="pay-button">Pay Now</button>
    </div>
  );
};

export default CheckoutApproval;
