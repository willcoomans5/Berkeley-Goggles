import React, {useRef} from "react";
import { firebaseApp as app } from "./firebase.jsx"
import { getFirestore, doc, setDoc  } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import "../pages/NewUserQs.css"
import logo from '../assets/logo2.svg';
import welcome from '../assets/frame_3.svg'


const auth = getAuth(app); 
const firestore = getFirestore(app); 


export default function AddInfo() {
    const user = auth.currentUser; 
    console.log(user); 

    const userName = useRef(); 
    const userYear = useRef(); 
    const userBirthday = useRef(); 
    const userMajor = useRef(); 
    const userDescription = useRef(); 


    const handleSave = async(e) => {
        e.preventDefault();

        await setDoc(doc(firestore, "users", `${auth.currentUser.uid}`), {
            name: userName.current.value, 
            year: userYear.current.value, 
            major: userMajor.current.value, 
            birthday: userBirthday.current.value,
            description: userDescription.current.value
          });
    }


    return (
        <div className = "whiteBackground">
            <img src={welcome} className = "welcomeBerkeleyGoggles" alt ="title"/>
            <img src={logo} className = "logoWelcome" alt="logo"/>
            <p className = "bodyText"> You're almost there! Fill out the questions below so we can create your profile and find the best matches for you!</p>
            <form onSubmit = {handleSave}>
                <div className = "inputContainer">
                
                <label className = "bodyText"> What's your name</label>
                <input className = "addInfoInput"
                type="text" 
                placeholder="First and Last"
                ref={userName}/>
            

                <label className = "bodyText"> What year are you</label>
                
                <select className = "addInfoInput" ref={userYear}>
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
    )
}