import LogIn from "../database/login";
import AuthDetails from "../database/authDetails";
import "./LoginPage.css";

function LoginPage() {
    return (
        <div>
            <LogIn/> 
            <AuthDetails/> 
        </div>
    )
}

export default LoginPage;