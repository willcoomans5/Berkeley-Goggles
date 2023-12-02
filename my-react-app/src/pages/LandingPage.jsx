import { Link } from "react-router-dom";
import './LandingPage.css'
function LandingPage() {
    return (
        <>
        <h1 className = "landingTitle"> BERKELEY GOGGLES </h1>
        <p className = "signInButton"> <Link to="/login">Log in</Link></p>
        <p className = "signUpButton"> <Link to="/signup">Sign up</Link></p>
        </>
    )
}

export default LandingPage;