import { Link } from "react-router-dom";
import background from '../assets/IMG_3232.svg';
import logo from '../assets/berk-goggles-logo.svg';
import './LandingPage.css';
function LandingPage() {
    return (
        <>
            <img src={background} className = "backgroundImage" alt="backgound-landing" />
            <div>
                <h1  className = "landingTitle"> BERKELEY GOGGLES </h1>
        </div>
        {/* <img src={background} alt="background-landing" /> */}
        {/* <h1 className = "landingTitle"> BERKELEY GOGGLES </h1> */}
        <p className = "login"> <Link to="/login">Log in</Link></p>
        <p className = "signup"> <Link to="/signup">Sign up</Link></p>
        <div className = "about">
        <img src={logo} className = "logoImage" alt="logo" />
        <h2 className = "aboutTitle"> Who needs rose colored glasses when you have Berkeley Goggles? </h2>
        <p className = "aboutPara"> Welcome to Berkeley Goggles, the #1 Dating App for UC Berkeley Students. </p>
        </div>
        </>
    )
}

export default LandingPage;