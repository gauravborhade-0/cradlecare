import Myimage from "./assests/pregantwomen.png";
import "./Onboarding-4.css";
import logo3 from './assests/blood-donation.png'
function Onboarding4() {
  return (
    <>
      <div className="container">
        <form action="">
          <p id="detail">Onboarding</p>
          <img
            src={Myimage}
            alt=""
            style={{ width: "300px", height: "200px" }}
          />

          <p id="detail0">Step 4/4</p>
          <br />
          <br />
          <p id="detail1">Expected Pregnancy Date</p>
          <br />
          <input type="Date" className="name" placeholder="Enter Your Pincode Here" />
          
            <br /><br />

          <p id="detail1">Blood Group (A +ve)</p>
          <br />
          <input type="text" className="name" placeholder="Enter Your Pincode Here" />
          <span className="input-icon">
                      <img src={logo3} alt="" />
                    </span>

          <button type="submit" className="next">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Onboarding4