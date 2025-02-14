// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9BuEy-erbPOXSVnqW-RSIyr-l2iAzrbk",
  authDomain: "cradle-care.firebaseapp.com",
  projectId: "cradle-care",
  storageBucket: "cradle-care.firebasestorage.app",
  messagingSenderId: "761517635593",
  appId: "1:761517635593:web:2de5ba6de7abdd42db60d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app, auth };
// export const auth = getAuth(app);