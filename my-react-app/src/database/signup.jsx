import React, {useState, useEffect} from "react"
import { firebaseApp as app } from "./firebase.jsx"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import { redirect } from "react-router-dom";
import "../App.jsx"

const auth = getAuth(app); 

const SignUp = () =>  {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState(); 
    const [passwordDupe, setPasswordDupe] = useState();
    const [displayError, setDisplayError] = useState(); 

    const [shouldRedirect, setShouldRedirect] = useState(false);
    const handleRedirect = () => {
        setShouldRedirect(true);
      };

    const signUpUser = (e) => {
        e.preventDefault(); // prevent page from being reloaded
        if (password == passwordDupe) {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential); 
                handleRedirect(); 
            })
            .catch((error) => {
                console.log(error)
                setDisplayError("Already registered"); 
            }); 
        } else {
            setDisplayError("Passwords do not match"); 
        }
    }

    return (
        <div>
            <form onSubmit={signUpUser}>
                <h4>Create Account</h4>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                /><br/>
                <input 
                  type="password" 
                  placeholder="Enter your password"
                  value={passwordDupe}
                  onChange={(e) => setPasswordDupe(e.target.value)}
                /><br/>
                <input 
                  type="password" 
                  placeholder="Re-enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                /><br/>
                <button type="submit">Sign Up</button>
                <p>{displayError}</p>
                <p>{shouldRedirect && <Link to="/questions"><button>Continue</button></Link>}</p>
            </form>
        </div>
    )
} 

export default SignUp; 