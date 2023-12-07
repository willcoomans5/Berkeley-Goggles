import React, { useState, useEffect } from "react";
import { firebaseApp as app } from "./firebase.jsx";
import { signInWithEmailAndPassword, getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";
import { Link } from "react-router-dom";
import "../pages/LoginPage.css";

const auth = getAuth(app);
setPersistence(auth, browserSessionPersistence);

const LogIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [displayError, setDisplayError] = useState();
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [isLockedOut, setIsLockedOut] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setShouldRedirect(true);
    }
  }, []);

  const handleRedirect = () => {
    setShouldRedirect(true);
  };

  const signIn = (e) => {
    e.preventDefault();

    if (isLockedOut) {
      setDisplayError("Too many failed attempts. Try again later.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        handleRedirect();
        console.log(userCredential);
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);

        if (error.code === "auth/invalid-credential") {
          setFailedAttempts((prevAttempts) => {
            const newAttempts = prevAttempts + 1;
            const remainingAttempts = 5 - newAttempts;

            if (newAttempts >= 5) {
              setIsLockedOut(true);

              // Set a timeout to unlock the account after 5 seconds
              setTimeout(() => {
                setIsLockedOut(false);
                setFailedAttempts(0);
              }, 5000);
            }

            setDisplayError(`Incorrect password. Remaining attempts: ${remainingAttempts}.`);
            return newAttempts;
          });
        } else {
          setDisplayError("Error signing in");
        }
      });
  };

  return (
    <div className="background">
      <form onSubmit={signIn}>
        <div className="inputContainer">
          <h1 className="pageTitle"> Log In </h1>
          <input
            className="input"
            type="email"
            placeholder="berkeley.edu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="submit" type="submit">
            {" "}
            Submit{" "}
          </button>
          <p>{displayError}</p>
          <p>{shouldRedirect && <Link to="/profile"><button>Continue</button></Link>}</p>
        </div>
      </form>
    </div>
  );
};

export default LogIn;