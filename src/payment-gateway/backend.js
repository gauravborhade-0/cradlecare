import express from "express";
import Razorpay from "razorpay";

const app = express();
app.use(express.json());

const razorpay = new Razorpay({
  key_id: "rzp_test_DziyEguOdZPEa5"
  // key_secret: "YOUR_RAZORPAY_SECRET",
});

app.post("/create-order", async (req, res) => {
  try {
    const options = {
      amount: 50000, 
      currency: "INR",
    };
    const order = await razorpay.orders.create(options);
    res.json({ order_id: order.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => console.log("Server running on port 3001"));
