import RetrieveImages from "../database/retrieveImages";
import RetrieveInfo from "../database/retrieveInfo";
import NavigationBar from "../components/NavigationBar";
import './Profile.css'

function Profile() {
    return (
        <>
        <div className = "whiteBackground">
        <NavigationBar/>
        <RetrieveImages/> 
        <RetrieveInfo/> 

        </div>
        </>
    )
}

export default Profile;


