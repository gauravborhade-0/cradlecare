import Myimage from "./assests/pregantwomen.png"
import './Onboarding-2.css'

function Onboarding2(){
    return (
        <>
        <div className="container">
            <form action="">
                <p id="detail">Onboarding</p>
                <img src={Myimage} alt="" style={{ width: "300px", height: "200px" }}/>

                <p id="detail0">Step 2/4</p><br /><br />

                <label>
        
                    <p id="detail1">Date Of Birth</p><br />
          <input
            type="date"
            className="name" 
            placeholder="Select Date Of Birth"
            required
          />                            
        </label>
                <br /><br />
                <button type="submit" className="next">Next</button>
            </form>
        </div>
        </>
    )
}

export default Onboarding2