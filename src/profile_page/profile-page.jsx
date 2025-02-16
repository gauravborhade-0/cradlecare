import  { useEffect, useState } from "react";
import "../../src/profile_page/profile-page.css";
import ProfileImg from "../assests/user.png";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase"; // Adjust the import according to your file structure
import { collection, getDocs } from "firebase/firestore";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: "", trimester: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "userDetail"));
        const usersData = [];
        querySnapshot.forEach((doc) => {
          usersData.push({ id: doc.id, ...doc.data() });
        });

        // Assuming you want the data of the first user
        if (usersData.length > 0) {
          const { fullName, trimester,dueDate } = usersData[0]; // Destructure name and trimester
          setUserData({ fullName, trimester,dueDate }); // Set state with both values
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <img
          src={ProfileImg} /* Replace with actual profile image */
          alt="Profile"
          className="profile-pic"
        />
        <h2 className="profile-name">{userData.fullName || "Loading..."}</h2> {/* Display username */}
        <p className="profile-info">Pregnancy: {userData.trimester || "Loading..."}</p> {/* Display trimester */}
        <p className="due-date">Due Date: {userData.dueDate ||"Loading..."} </p>
      </div>

      {/* Grid Layout for Content Sections */}
      <div className="profile-content">
        <div className="section">
          <h2>Personal Details</h2>
          <div className="item">Medical Records</div>
          <div className="item">Doctor Appointments</div>
          <div className="item">Pregnancy Journal</div>
        </div>

        <div className="section">
          <h2>Health & Wellness</h2>
          <div className="item">Daily Health Tips</div>
          <div className="item">Nutrition Guide</div>
          <div className="item">Prenatal Yoga & Exercises</div>
        </div>
<br />
        <div className="section">
          <h2>Privacy & Security</h2>
          <div className="item">Privacy Settings</div>
          <div className="item">Terms & Conditions</div>
        </div>

        <div className="section">
          <h2>Customer Support</h2>
          <div className="item">FAQs</div>
          <div className="item">Contact Support</div>
        </div>
      </div>

      <button className="logout-btn" onClick={() => navigate("/")}>Logout</button>
    </div>
  );
};

export default ProfilePage;
