import { useEffect } from 'react';
import './razorpay.css'
const Payment = () => {

  useEffect(() => {
    // Dynamically loading the Razorpay script
    const script = document.createElement('script');
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Razorpay payment handler function
  const makePayment = (amount, plan) => {
    let options = {
      key: "rzp_test_DziyEguOdZPEa5", // Replace with your Razorpay Key ID
      amount: amount * 100, // Amount in paise (₹999 = 99900 paise)
      currency: "INR",
      name: "Cradle Care",
      description: `Subscription Plan: ${plan}`,
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        window.location.href = "../Home-page/Home.jsx"; // Redirect after successful payment
      },
      prefill: {
        name: "User Name", // Fetch user's name dynamically
        email: "user@example.com", // Fetch user's email dynamically
        contact: "9999999999" // Fetch user's phone dynamically
      },
      theme: {
        color: "#FF6B6B" // Static primary button color
      }
    };

    // Open Razorpay checkout modal
    const paymentGateway = new window.Razorpay(options);
    paymentGateway.open();
  };

  return (
    <div className="pay-Container">
      <h1>Motherhood Prime</h1>
      <br />
      <p>Select a plan and proceed with the payment.</p>
      <br />
      <div className="plan">
        <h3>Gynaecologist Visits</h3>
        <p>Doctor who specializes in women's health specifically the reproductive system</p>
        <p><strong>₹1999/month</strong></p>
        <button className="btn" onClick={() => makePayment(1999, 'Physiotherapy')}>Pay ₹1999</button>
      </div>

      <div className="plan">
        <h3>Nurse Home Visits</h3>
        <p>visits a mothersa home to provide medical care, assistance, and support .</p>
        <p><strong>₹1499/month</strong></p>
        <button className="btn" onClick={() => makePayment(1499, 'Gynecology')}>Pay ₹1499</button>
      </div>

      <div className="plan">
        <h3>Pediatricians Live Session</h3>
        <p>Live session with a pediatrician, a medical doctor who specializes in the health and care of children.</p>
        <p><strong>₹999/month</strong></p>
        <button className="btn" onClick={() => makePayment(1499, 'Gynecology')}>Pay ₹999</button>
      </div>
    </div>
  );
};

export default Payment;
