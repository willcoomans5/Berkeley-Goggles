import React, { useState } from "react"
import { firebaseApp as app } from "./firebase.jsx"
import {ref as fileref, getStorage, uploadBytes} from "@firebase/storage"
import { v4 } from "uuid"; 
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";

const storage = getStorage(app); 
const auth = getAuth(app); 

export default function UploadImages() {

    const [images, setImages] = useState(); 

    const handleSave = async(e) => {
        e.preventDefault();
        upload(); 
    }

    function upload() {
        const imageArray = []; 
        const uid = auth.currentUser.uid; 
       
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
                <h4>Upload Images</h4>
                <input type="file" multiple onChange={displayImage} />
                <button type="submit">Save</button>
                <p><Link to="/questions"><button>Back</button></Link></p>
            </form>
        </div>
    )
}