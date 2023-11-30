import UploadImages from './database/uploadImages.jsx'; 
import LogIn from './database/login.jsx'; 
import SignUp from './database/signup.jsx';
import AuthDetails from './database/authDetails.jsx';
import AddInfo from './database/addInfo.jsx';
import './App.css'

function App() {
  return (
    <>
      <div>
        <UploadImages/> 
        <LogIn/> 
        <SignUp/> 
        <AuthDetails/> 
        <AddInfo/> 
      </div>
    </>
  )
}

export default App
