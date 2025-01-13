import Myimage from "./assests/pregantwomen.png";
import "./Onboarding-1.css";
import logo1 from "./assests/user.png";
import logo2 from "./assests/placeholder.png";
import logo3 from "./assests/blood-donation.png";

function Onboarding1() {
  return (
    <>
      <p id="detail">Onboarding</p>
      <img
        src={Myimage}
        alt=""
        className="Myimage"
        style={{ width: "150px", height: "150px" }}
      />
      <br />
      <div className="container">
        <form action="">
          <p id="detail1">Full Name</p>
          <input type="text" className="name" placeholder="Enter Name Here" />
          <span className="input-icon">
            <img src={logo1} alt="" />
          </span>

          {/* On boarding process 2/4 */}
          {/* Date of Birth */}

          <label>
            <p id="detail1">Date Of Birth</p>
            <input
              type="date"
              className="name"
              placeholder="Select Date Of Birth"
              required
            />
          </label>

          {/* On boarding process 2/4 */}
          {/* Resedentail Pincode */}

          <p id="detail1">Resedential Pincode</p>
          <br />
          <input
            type="text"
            className="name"
            placeholder="Enter Your Pincode Here"
          />
          <span className="input-icon">
            <img src={logo2} alt="" />
          </span>

          {/* On boarding process 3/4 */}

          <p id="detail1">Expected Pregnancy Date</p>
          <br />
          <input
            type="Date"
            className="name"
            placeholder="Enter Your Pincode Here"
          />

          <br />
          <br />

          <p id="detail1">Blood Group (A +ve)</p>
          <br />
          <input
            type="text"
            className="name"
            placeholder="Enter Your Pincode Here"
          />
          <span className="input-icon">
            <img src={logo3} alt="" />
          </span>

          <br />
          <button type="submit" className="next">
            Next
          </button>
        </form>
      </div>
    </>
  );
}

export default Onboarding1;
