import Myimage from "./assests/pregantwomen.png";
import "./Onboarding-1.css";
import logo1 from "./assests/user.png";
import logo2 from "./assests/placeholder.png";
import logo3 from "./assests/blood-donation.png";

function Onboarding1() {
  return (
    <>
      
      <p id="detail">Onboarding</p> <br />
      <img
        src={Myimage}
        alt=""
        className="Myimage"
        style={{ width: "150px", height: "150px" }}
      />
      <div className="container">
        <form action="">
                    {/* Full Name */}
                    <label htmlFor="" className="label">

          <p id="detail1">Full Name:-</p>
          <input type="text" className="name"  id="Fullname" placeholder="Enter name here" />          
          <span className="input-icon1">
            <img src={logo1} alt="" />
          </span>
                    </label>

          {/* Pregnancy Date */}
          <label htmlFor="" className="label">

          <p id="detail1">Expected Pregnancy Date:-</p>
          <input
            type="Date"
            className="name"
            id="Pregdate"
            />
            </label>

            {/* Date of Birth */}
          <label className="label">
            <p id="detail1">Date Of Birth:-</p>
            <input
              type="date"
              className="name"
              id="dob"
              placeholder="Select Date Of Birth"
              required
            />
          </label>

          {/* Resedentail Pincode */}
          <label htmlFor="" className="label">

          <p id="detail1">Resedential Pincode:-</p>
          <input
            type="text"
            className="name"
            id="pincode"
            placeholder="Enter Your Pincode Here"
            />
            </label>
          <span className="input-icon2">
            <img src={logo2} alt="" />
          </span>


                  {/* Blood Group  */}
                  <label htmlFor="" className="label">

          <p id="detail1">Blood Group (A +ve)</p>
          
          <input
            type="text"
            className="name"
            id="bloodgroup"
            placeholder="Enter blood gruoup"
            />
          <span className="input-icon3">
            <img src={logo3} alt="" />
            </span>

            </label>

                  {/* Contact Number */}
          <label htmlFor="" className="label">
           <p>
             Emergency Contact Information:-
            </p>
          <input
            type="text"
            className="name"
            id="contact"
            placeholder="Emergency Contact Information"
            />
            </label>

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
