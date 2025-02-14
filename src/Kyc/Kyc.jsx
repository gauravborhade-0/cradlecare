import { useState } from "react";
import "./kyc.css";
import { db, collection, addDoc } from "../firebase/firebase";

function PregnancyKYCForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    age: "",
    trimester: "",
    dueDate: "",
    medicalHistory: "",
  });

  const ref = collection(db, "userDetail"); // Corrected Firestore reference

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await addDoc(ref, formData);
      alert("Data saved successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        age: "",
        trimester: "",
        dueDate: "",
        medicalHistory: "",
      });
      // navigate("/Home-page"); // Navigate after successful save
    } catch (error) {
      console.error("Error saving data: ", error);
      alert("Error saving data!");
    }
  };

  return (
    <div className="container">
      <h1>Pregnancy KYC Form</h1>
      <form onSubmit={handleSave}>
        <label htmlFor="fullName">
          Full Name:
          <br />
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email">
          Email:
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="phone">
          Phone Number:
          <br />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="address">
          Address:
          <br />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="age">
          Age:
          <br />
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="trimester">
          Trimester:
          <br />
          <input
            type="text"
            name="trimester"
            value={formData.trimester}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="dueDate">
          Expected Due Date:
          <br />
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="medicalHistory">
          Medical History:
          <br />
          <textarea
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="consent">
          <input type="checkbox" name="consent" /> I consent to sharing my information for KYC purposes.
        </label>
        <br />
        <button className="submit">Submit</button>
      </form>
    </div>
  );
}

export default PregnancyKYCForm;
