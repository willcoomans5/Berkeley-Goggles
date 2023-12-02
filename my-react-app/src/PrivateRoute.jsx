import React, { useContext } from "react"; 
import { Navigate, Route, useNavigate } from "react-router-dom"
import { firebaseApp as app } from "./database/firebase.jsx"
import { getAuth } from "firebase/auth";

const auth = getAuth(app); 

const PrivateRoute = ({ children }) => {
    console.log(auth.currentUser); 

    if (!auth.currentUser) {
        return <Navigate to="/"/>;
    }
    return children;
};


export default PrivateRoute 