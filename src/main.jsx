import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Signup from './Signup.jsx'
// import OTP from './otp.jsx'
// import Onboarding1 from './Onboarding-1'
// import Onboarding2 from './Onboarding-2'
// import Onboarding3 from './Onboarding-3'
import Onboarding4 from './Onboarding-4'
// import Firstpage from './first-page'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Signup/> */}
    {/* {<OTP/>} */}
    {/* {<Onboarding1/>} */}
    {/* {<Onboarding2/>} */}
    {/* {<Onboarding3/>} */}
    {<Onboarding4/>}
    {/* {<Firstpage/>} */}


  </StrictMode>,
)
