import Myimage from "./assests/pregantwomen.png"
import "./Onboarding-1.css"
import logo1 from "./assests/user.png"
function Onboarding1(){
    return (
        <>
        <div className="container">
            <form action="">
                <p id="detail">Onboarding</p>
                <img src={Myimage} alt="" style={{ width: "300px", height: "200px" }}/>

                <p id="detail0">Step 1/4</p><br /><br />
                <p id="detail1">Full Name</p><br />
                <input type="text"  className="name" placeholder="Enter Name Here"/>
                <span className="input-icon">
                    <img src={logo1} alt="" />
                </span>
                <button type="submit" className="next">Next</button>
            </form>
        </div>
        </>
    )
}

export default Onboarding1