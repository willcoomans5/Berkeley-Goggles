import React, {useRef, useState} from "react";
import { firebaseApp as app } from "./firebase.jsx"
import {ref as fileref, getStorage, uploadBytes} from "@firebase/storage";
import { v4 } from "uuid"; 

const storage = getStorage(app); 

export default function UploadImages() {
    const [images, setImages] = useState(); 
    const username = useRef(); 

    const handleSave = async(e) => {
        e.preventDefault();
        upload(username.current.value)
    }

    function upload(name) {
        const imageArray = []; 
       
        for (let i = 0; i < images.length; i++) {
            var path = `users/` + name + `/${v4()}`; 
            uploadBytes(fileref(storage, path), images[i]); 
            imageArray.push(path); 
        }

        console.log(imageArray); 
        
        set(dataref(database, 'users/' + name), {                      
            description, 
            imagePath: imageArray 
        }, 
        ); 
    }

    return (
        <div>
            <form onSubmit = {handleSave}>
                <h4>Upload Images</h4>
                <label>name</label><br/>
                <input type="text" ref={username}/>
                <br/>
                <input type="file" multiple onChange={(e)=>setImages(e.target.files)} />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}