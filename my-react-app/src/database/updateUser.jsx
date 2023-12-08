import React, { useState, useRef } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "../pages/NewUserQs.css";
import { firebaseApp } from "./firebase";

const ChangeInfo = () => {
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp); 
  const userName = useRef(); 
    const userYear = useRef(); 
    const userBirthday = useRef(); 
    const userMajor = useRef(); 
    const userDescription = useRef(); 

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    // Update the user's data in Firestore
    try {
      const userDocRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userDocRef, {
        uid: auth.currentUser.uid, 
        name: userName.current.value, 
        year: userYear.current.value, 
        major: userMajor.current.value, 
        birthday: userBirthday.current.value,
        description: userDescription.current.value, 
        matches: [] 
      });
      console.log("User data in Firestore updated successfully!");
    } catch (error) {
      console.error("Error updating user data in Firestore:", error.message);
    }
  };

  return (
        <div className = "whiteBackground">
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