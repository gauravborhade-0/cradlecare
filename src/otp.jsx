import Myimage from "./assests/pregantwomen.png";
import "./OTP.css";

function OTP() {
  return (
    <>
    <div className="container">

      <form action="">
        <img src={Myimage} alt="" style={{ width: "300px", height: "200px" }} />
        <br /><br /><br />
        <label htmlFor="" id="label-otp">
          <h3>Verify OTP</h3>
          <br />
          <p>OTP</p>
          <br />          <input type="text" maxLength={1} className="input-otp"/>

          <input type="text" maxLength={1} className="input-otp"/>
          <input type="text" maxLength={1} className="input-otp"/>
          <input type="text" maxLength={1} className="input-otp"/>
          <input type="text" maxLength={1} className="input-otp"/>
          <input type="text" maxLength={1} className="input-otp"/>

        </label>
        <br />
        <button type="submit" className="verify">Verify</button>
      </form>
    </div>
    </>
  );
}

export default OTP;
