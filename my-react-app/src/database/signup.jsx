import React, {useState} from "react"
import { firebaseApp as app } from "./firebase.jsx"
import { createUserWithEmailAndPassword, getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";
import { Link } from "react-router-dom";
import "../App.jsx"
import "../pages/LoginPage.css"
import logo from '../assets/logo2.svg';


const auth = getAuth(app); 
setPersistence(auth, browserSessionPersistence);

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordDupe, setPasswordDupe] = useState("");
    const [displayError, setDisplayError] = useState("");
  
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const handleRedirect = () => {
      setShouldRedirect(true);
    };
  
    const signUpUser = (e) => {
      e.preventDefault();
  
      if (password === passwordDupe) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log("Account creation success:", userCredential);
            handleRedirect();
          })
          .catch((error) => {
            console.error("Error during account creation:", error);
            if (error.code === "auth/email-already-in-use") {
              setDisplayError("An account is already registered under this email.");
            } else {
              setDisplayError("Minimum password length: 6 characters");
            }
          });
      } else {
        setDisplayError("Passwords do not match");
      }
    };
  
    return (
      <div className="background">
        <form onSubmit={signUpUser}>
          <div className="inputContainer">
            <h1 className="pageTitle">Create Account</h1>
            <input
              className="input"
              type="email"
              placeholder="Enter your Berkeley.edu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={passwordDupe}
              onChange={(e) => setPasswordDupe(e.target.value)}
            />
            <input
              className="input"
              type="password"
              placeholder="Re-enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br />
            <button className="submit" type="submit">Submit</button>
            <p>{displayError}</p>
            <p>{shouldRedirect && <Link to="/questions"><button>Continue</button></Link>}</p>
          </div>
        </form>
      </div>
    );
  };
  
  export default SignUp;
