import LogIn from "../database/login";
import AuthDetails from "../database/authDetails";

function LoginPage() {
    return (
        <div>
            <LogIn/> 
            <AuthDetails/> 
        </div>
    )
}

export default LoginPage;