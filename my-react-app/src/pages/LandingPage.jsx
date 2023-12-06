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
            <p className = "aboutPara"> Welcome to Berkeley Goggles – where 
            connections go beyond the books! Created by UC Berkeley 
            students for UC Berkeley students, our dating app is 
            designed to bring together the brilliant minds and 
            diverse personalities that make up our unique campus community. </p>

        <h3 className = "aboutSubTitle"> 🌟 About Berkeley Goggles 🌟 </h3>
            <p className = "aboutPara"> At Berkeley Goggles, we believe that finding meaningful 
                connections should be as inspiring as a captivating lecture 
                or a stimulating lab experiment. Embrace the chance to 
                connect with fellow Bears who share your passions, 
                ambitions, and a love for the Berkeley experience.</p>

        <h3 className = "aboutSubTitle"> 🔍 See Beyond the Surface 🔍 </h3>
            <p className = "aboutPara">
                Ditch the superficial judgments and let Berkeley Goggles help you see 
                beyond the surface. Our app encourages authentic connections by highlighting 
                interests, hobbies, and shared experiences, 
                ensuring you match with someone who gets you on a deeper level.</p>

    <h3 className = "aboutSubTitle">📚 Exclusive to UC Berkeley 📚 </h3>
        <p className = "aboutPara"> 
        Created by students, for students – Berkeley Goggles 
        is exclusively tailored to the UC Berkeley community. 
        Whether you are studying at the Main Stacks, grabbing 
        a coffee at Free Speech Movement Café, or cheering on the 
        Golden Bears, our app is here to enhance your college dating experience.
        </p>
        <h3 className = "aboutSubTitle"> 🎓 Dating with Purpose 🎓 </h3>
            <p className = "aboutPara"> 
            Berkeley Goggles is more than just a dating app; 
            it's a platform for meaningful connections. Whether 
            you're looking for a study buddy, a partner-in-crime for 
            exploring the Bay Area, or someone to share deep conversations with, 
            find it all at Berkeley Goggles.

        Join us on this exciting journey of discovery, connection, 
        and love at UC Berkeley – where wearing Berkeley Goggles 
        opens your eyes to a world of incredible possibilities!</p>
        </div>
        <div className = "footer">
        <p> Contact Us!</p>
        <p> berkeleygoggles@gmail.com </p>
        </div>
        </>
    )
}

export default LandingPage;