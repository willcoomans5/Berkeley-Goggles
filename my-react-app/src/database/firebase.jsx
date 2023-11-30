// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCneoIiRFXwDbD4VwlXcLovZtBELINdgMg",
  authDomain: "berkeley-goggles.firebaseapp.com",
  projectId: "berkeley-goggles",
  storageBucket: "berkeley-goggles.appspot.com",
  messagingSenderId: "219328628427",
  appId: "1:219328628427:web:364834630f212942e83d4e",
  measurementId: "G-C3MLLMMN7Q"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
