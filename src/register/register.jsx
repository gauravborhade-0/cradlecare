import { useState } from "react";
import Myimage from "../assests/pregantwomen.png";
import "./register.css";
import logo1 from "../assests/user.png";
import logo2 from "../assests/placeholder.png";
import logo3 from "../assests/blood-donation.png";
import Contact_NO from "../assests/contactno.png";
import { useNavigate } from "react-router-dom";
import { db, collection, addDoc } from "../firebase/firebase";

function Onboarding1() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    PregnancyDate: "",
    DOB: "",
    pincode: "",
    bloodGroup: "",
    Contact_NO: "",
  });

  const ref = collection(db, "Register"); // Corrected Firestore reference

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await addDoc(ref, formData);
      alert("Data saved successfully!");
      setFormData({ 
        name: "",
        email: "",
        phone: "",
        PregnancyDate: "",
        DOB: "",
        pincode: "",
        bloodGroup: "",
        Contact_NO: "",
      });
      navigate("/Home-page"); // Navigate after successful save
    } catch (error) {
      console.error("Error saving data: ", error);
      alert("Error saving data!");
    }
  };

  return (
    <div className="container">
      <p className="detail">Onboarding</p> <br />
      <img
        src={Myimage}
        alt="Pregnant Woman"
        className="Myimage"
        style={{ width: "150px", height: "150px" }}
      />
      <form onSubmit={handleSave}> {/* Use handleSave instead of handleSubmit */}
        <label className="label">
          <p id="userName">Full Name:</p>
          <input
            type="text"
            className="name"
            id="Fullname"
            placeholder="Enter name here"
             name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <span className="input-icon1">
            <img src={logo1} alt="" />
          </span>
        </label>

        <label className="label">
          <p id="detail1">Expected Pregnancy Date:</p>
          <input
            type="date"
            className="name"
            id="Pregdate"
            name="PregnancyDate"
            value={formData.PregnancyDate}
            onChange={handleChange}
          />
        </label>

        <label className="label">
          <p id="detail1">Date Of Birth:</p>
          <input
            type="date"
            className="name"
            id="dob"
            name="DOB"
            value={formData.DOB}
            onChange={handleChange}
            required
          />
        </label>

        <label className="label">
          <p id="detail1">Residential Pincode:</p>
          <input
            type="text"
            className="name"
            id="pincode"
            placeholder="Enter Your Pincode Here"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
          <span className="input-icon2">
            <img src={logo2} alt="" />
          </span>
        </label>

        <label className="label">
          <p id="detail1">Blood Group (A +ve):</p>
          <input
            type="text"
            className="name"
            id="bloodgroup"
            placeholder="Enter blood group"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
          />
          <span className="input-icon3">
            <img src={logo3} alt="" />
          </span>
        </label>

        <label className="label">
          <p>Emergency Contact Information:</p>
          <input
            type="text"
            className="name"
            id="contact"
            placeholder="Emergency Contact Information"
            name="Contact_NO"
            value={formData.Contact_NO}
            onChange={handleChange}
          />
          <span className="input-icon4">
            <img src={Contact_NO} alt="" />
          </span>
        </label>

        <button type="submit" className="next">
          Next
        </button>
      </form>
    </div>
  );
}

export default Onboarding1;
