import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Signup from './Signup.jsx'
import Onboarding1 from './Onboarding-1'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Signup/> */}
    {<Onboarding1/>}

  </StrictMode>,
)
