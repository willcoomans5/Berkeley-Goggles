// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
