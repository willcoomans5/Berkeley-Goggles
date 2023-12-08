import React, { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { db } from "./firebase.jsx";
import { doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "../pages/NewUserQs.css";

const ChangeInfo = () => {
  const auth = getAuth();
  const [name, setName] = useState(auth.currentUser.displayName || "");
  const [year, setYear] = useState(auth.currentUser.year || "");
  const [major, setMajor] = useState(auth.currentUser.major || "");
  const [birthday, setBirthday] = useState(auth.currentUser.birthday || "");
  const [description, setDescription] = useState(auth.currentUser.description || "");

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    // Update the user's profile in Firebase Authentication
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      console.log("User profile updated successfully!");
    } catch (error) {
      console.error("Error updating user profile:", error.message);
      return;
    }

    // Update the user's data in Firestore
    try {
      const userDocRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userDocRef, {
        name,
        year,
        major,
        birthday,
        description,
      });
      console.log("User data in Firestore updated successfully!");
    } catch (error) {
      console.error("Error updating user data in Firestore:", error.message);
    }
  };

  return (
        <div className = "whiteBackground">
            <img src={welcome} className = "welcomeBerkeleyGoggles" alt ="title"/>
            <img src={logo} className = "logoWelcome" alt="logo"/>
            <p className = "bodyText"> Update your profile information here!</p>
            <form onSubmit = {handleUpdateProfile}>
                <div className = "inputContainer">
                <label className = "bodyText"> Name</label>
                <input className = "addInfoInput"
                type="text" 
                placeholder="First and Last"
                ref={userName}/>
            

                <label className = "bodyText"> What year are you</label>
                
                <select id="dropdown" className = "addInfoInput" ref={userYear}>
                    <option value="freshman">Freshman</option>
                    <option value="sophomore">Sophomore</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                </select>

                <label className = "bodyText">What's your major</label>
                <input className = "addInfoInput" 
                placeholder="Answer Here"
                type="text" ref={userMajor}/>

                <label className = "bodyText">When's your birthday</label>
                <input className = "addInfoInput" type="date" ref={userBirthday}/>
          

                <label className = "bodyText">Describe yourself</label>
                <input 
                className = "addInfoInput" 
                placeholder="Answer Here"
                type="text" ref={userDescription}/>
             

                <button className = "addInfoSubmit" type="submit">Save Info</button>
                <p><Link to="/upload"><button>Continue</button></Link></p>
                </div>
            </form>
        </div>
  );
};

export default ChangeInfo;



// import { getAuth, updateProfile } from "firebase/auth";
// const auth = getAuth();


// updateProfile(auth.currentUser, {
//   displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
// }).then(() => {
//   // Profile updated!
//   // ...
// }).catch((error) => {
//   // An error occurred
//   // ...
// });