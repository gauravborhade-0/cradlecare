import { useEffect, useState } from "react";

const PaymentComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRazorpayScript = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => setIsLoading(false);
      script.onerror = () => setError("Failed to load Razorpay.");
      document.body.appendChild(script);
    };
    loadRazorpayScript();
  }, []);

  const handlePayment = async () => {
    try {
      const response = await fetch("http://localhost:3001/create-order", {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch order details");
      }
      const { order_id } = await response.json();
      
      const options = {
        key: "rzp_test_DziyEguOdZPEa5",
        amount: 50000, // Amount in paise
        currency: "INR",
        order_id, // Use dynamically generated order_id
        handler: (response) => {
          console.log(response);
          alert("Payment Successful!");
        },
      };
  
      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      setError(error.message);
      alert("Payment initialization failed.");
    }
  };
  
  

  return (
    <div>
      <h1>Payment Page</h1>
      {isLoading && <p>Loading Razorpay...</p>}
      {error && <p>Error loading Razorpay: {error}</p>}
      <button onClick={handlePayment} disabled={isLoading}>
        Pay Now
      </button>
    </div>
  );
};

export default PaymentComponent;
