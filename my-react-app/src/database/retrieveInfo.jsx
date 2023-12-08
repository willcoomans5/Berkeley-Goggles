import { firebaseApp } from "./firebase";
import { getAuth } from "firebase/auth";
import { get, child, ref, getDatabase } from "@firebase/database";
import { useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const auth = getAuth(firebaseApp); 
const database = getDatabase(firebaseApp); 
const db = getFirestore(firebaseApp); 


function RetrieveInfo() {
    const uid = auth.currentUser.uid; 
    const dbRef = ref(database); 
    const [username, setUsername] = useState(); 
    const [birthday, setBirthday] = useState(); 
    const [description, setDescription] = useState(); 
    const [year, setYear] = useState(); 

    var docRef = doc(db, "users", `${auth.currentUser.uid}`);
    getDoc(docRef).then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        const userData = doc.data(); 
        setUsername(userData.name); 
        setBirthday(userData.birthday); 
        setDescription(userData.description); 
        setYear(userData.year); 
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
      
      return (
        <>
        <p className = "profileName">{username}</p>
        <div className = "profileInfo">
            <p className = "profileBio"> Birthday: {birthday}</p>
            <p className = "profileBio"> Bio: {description}</p>
            <p className = "profileBio"> Year: {year}</p>
        </div>
        </>
      ); 
    
}

export default RetrieveInfo; 