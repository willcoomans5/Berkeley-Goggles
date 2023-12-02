import { Link } from "react-router-dom";
function LandingPage() {
    return (
        <>
        <h1 className = "landingTitle"> BERKELEY GOGGLES </h1>
        <p><Link to="/login">Log in to your account</Link></p>
        <p><Link to="/signup">Sign up for Berkeley Goggles</Link></p>
        </>
    )
}

export default LandingPage;