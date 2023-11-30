import React, {useState} from "react"
import { firebaseApp as app} from "./firebase.jsx"
import {signInWithEmailAndPassword, getAuth} from "firebase/auth"

const auth = getAuth(app); 

const LogIn = () =>  {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState(); 

    const signIn = (e) => {
        e.preventDefault(); // prevent page from being reloaded
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        })
        .catch((error) => {
            console.log(error)
        }); 
    }

    return (
        <div>
            <form onSubmit={signIn}>
                <h4>Log In</h4>
                <input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                type="password" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
} 

export default LogIn; 