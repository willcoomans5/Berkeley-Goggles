import React, {useState, useEffect} from "react"
import { firebaseApp as app} from "./firebase.jsx"
import {signInWithEmailAndPassword, getAuth, setPersistence, browserSessionPersistence} from "firebase/auth"
import { Link } from "react-router-dom";
import '../pages/LoginPage.css'

const auth = getAuth(app); 
setPersistence(auth, browserSessionPersistence); 

const LogIn = () =>  {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState(); 

    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        const user = auth.currentUser; 
        if (user) {
            setShouldRedirect(true); 
        }
    }, [])

    const handleRedirect = () => {
        setShouldRedirect(true);
      };

    const signIn = (e) => {
        e.preventDefault(); // prevent page from being reloaded
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            handleRedirect(); 
            console.log(userCredential); 
        })
        .catch((error) => {
            console.log(error); 
        }); 
    }

    return (
        <div className = "background">
            <form onSubmit={signIn}>
                <div className="inputContainer">
                    <h1 className = "pageTitle"> Log In </h1>
                    <input 
                        className = "input"
                        type="email" 
                        placeholder="Berkeley.edu Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className = "input"
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className = "submit" type="submit"> Submit </button>
                    <p>{shouldRedirect && <Link to="/profile"><button>Continue</button></Link>}</p>
                </div>
            </form>
        </div>
    )
} 

export default LogIn; 