import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './route/App'
// import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter from react-router-dom

// import Appp from './Kyc/Kyc'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    <App/>
    {/* </BrowserRouter> */}

  </StrictMode>
)
