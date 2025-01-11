import Myimage from "./assests/pregantwomen.png";
import "./Onboarding-3.css";
import logo2 from "./assests/placeholder.png";
function Onboarding3() {
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

          <p id="detail0">Step 3/4</p>
          <br />
          <br />
          <p id="detail1">Resedential Pincode</p>
          <br />
          <input type="text" className="name" placeholder="Enter Your Pincode Here" />
          <span className="input-icon">
            <img src={logo2} alt="" />
          </span>

          <button type="submit" className="next">
            Next
          </button>
        </form>
      </div>
    </>
  );
}

export default Onboarding3;
