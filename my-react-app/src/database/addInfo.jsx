import React, {useRef, useState} from "react";
import { firebaseApp as app } from "./firebase.jsx"
import {getDatabase, ref as dataref, set} from "@firebase/database";
import {ref as fileref, getStorage, uploadBytes} from "@firebase/storage"
import { getAuth } from "firebase/auth";
import { v4 } from "uuid"; 
import { redirect, useNavigate } from "react-router";

const database = getDatabase(app);
const storage = getStorage(app); 
const auth = getAuth(app); 


export default function AddInfo() {
    const user = auth.currentUser; 
    console.log(user); 

    if (user) {
       const uid = user.uid;
    } else {
       redirect("/login"); 
    }

    const [images, setImages] = useState(); 
    const userName = useRef(); 
    const userYear = useRef(); 
    const userBirthday = useRef(); 
    const userMajor = useRef(); 
    const userDescription = useRef(); 


    const handleSave = async(e) => {
        e.preventDefault();
        upload();
        writeUserEntry(
            userName.current.value, 
            userYear.current.value, 
            userMajor.current.value, 
            userBirthday.current.value, 
            userDescription.current.value)
    }

    function writeUserEntry(name, year, major, birthday, description) {
        set(dataref(database, 'users/' + uid), {       
            name, 
            year, 
            major, 
            birthday,               
            description
        }); 
    }

    function upload() {
        const imageArray = []; 
        for (let i = 0; i < images.length; i++) {
            var path = `users/` + uid + `/${v4()}`; 
            uploadBytes(fileref(storage, path), images[i]); 
            imageArray.push(path); 
        }
    }


    function displayImage(e) {
        setImages(e.target.files)
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

                <h4>Upload Images</h4>
                <input type="file" multiple onChange={displayImage} />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}