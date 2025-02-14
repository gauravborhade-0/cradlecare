// Import the functions you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9BuEy-erbPOXSVnqW-RSIyr-l2iAzrbk",
  authDomain: "cradle-care.firebaseapp.com",
  databaseURL: "https://cradle-care-default-rtdb.firebaseio.com",
  projectId: "cradle-care",
  storageBucket: "cradle-care.firebasestorage.app",
  messagingSenderId: "761517635593",
  appId: "1:761517635593:web:2de5ba6de7abdd42db60d8"
};

// Ensure Firebase is only initialized once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app); // Export Firebase Auth
export const db = getFirestore(app); // Export Firestore

export { collection, addDoc }; // Export Firestore functions
export default app; // Export Firebase app
