// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // For Firestore database

const firebaseConfig = {
    apiKey: "AIzaSyCoaIBxuGRLg9ausycmD06rxjE6eTajmfQ",
    authDomain: "signup-form-8980a.firebaseapp.com",
    databaseURL: "https://signup-form-8980a-default-rtdb.firebaseio.com",
    projectId: "signup-form-8980a",
    storageBucket: "signup-form-8980a.firebasestorage.app",
    messagingSenderId: "879615144400",
    appId: "1:879615144400:web:ef1f01f5d5fd4e922289d5"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
