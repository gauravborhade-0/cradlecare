// import React from "react";
import { useEffect ,useState } from "react";
import "../../src/profile_page/profile-page.css";
import ProfileImg from "../assests/user.png"
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";



const ProfilePage = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Register"));
        const usersData = [];
        querySnapshot.forEach((doc) => {
          usersData.push({ id: doc.id, ...doc.data() });
        });
        setUsers(usersData);
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
          src= {ProfileImg} /* Replace with actual profile image */
          alt="Profile"
          className="profile-pic"
        />
        <h2 className="profile-name"> <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul> </h2>
        <p className="profile-info">Pregnancy: 24 Weeks (2nd Trimester)</p>
        <p className="due-date">Due Date: June 15, 2025 | Baby: Girl 👶</p>
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

      <button className="logout-btn" onClick={()=> navigate("/")}>Logout</button>
    </div>
  );
};

export default ProfilePage;
