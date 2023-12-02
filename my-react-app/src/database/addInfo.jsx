import React, {useRef} from "react";
import { firebaseApp as app } from "./firebase.jsx"
import {getDatabase, ref as dataref, set} from "@firebase/database";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
const database = getDatabase(app);
const auth = getAuth(app); 


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
        writeUserEntry(
            userName.current.value, 
            userYear.current.value, 
            userMajor.current.value, 
            userBirthday.current.value, 
            userDescription.current.value)
    }

    function writeUserEntry(name, year, major, birthday, description) {
        const uid = auth.currentUser.uid; 
        set(dataref(database, 'users/' + uid), {       
            name, 
            year, 
            major, 
            birthday,               
            description
        }); 
    }

    return (
        <div>
            <form onSubmit = {handleSave}>
                <h4>Enter your information</h4>
                
                <label>What's your name</label><br/>
                <input type="text" ref={userName}/>
                <br/>

                <label>What year are you</label><br/>
                <select ref={userYear}>
                    <option value="freshman">Freshman</option>
                    <option value="sophomore">Sophomore</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                </select><br/>

                <label>What's your major</label><br/>
                <input type="text" ref={userMajor}/>
                <br/>

                <label>When's your birthday</label><br/>
                <input type="date" ref={userBirthday}/>
                <br/>

                <label>Describe yourself</label><br/>
                <input type="text" ref={userDescription}/>
                <br/>

                <button type="submit">Save</button>
                <p><Link to="/upload"><button>Continue</button></Link></p>
            </form>
        </div>
    )
}