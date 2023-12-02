import React, {useState, useEffect} from "react"
import { firebaseApp as app} from "./firebase.jsx"
import {signInWithEmailAndPassword, getAuth, setPersistence, browserSessionPersistence} from "firebase/auth"
import { Link } from "react-router-dom";

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
        <div>
            <form onSubmit={signIn}>
                <div id="inputContainer">
                    <h1>Log In</h1>
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
                </div>
                <p>{shouldRedirect && <Link to="/profile"><button>Continue</button></Link>}</p>
            </form>
        </div>
    )
} 

export default LogIn; 