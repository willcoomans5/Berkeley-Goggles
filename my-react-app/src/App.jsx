import UploadImages from './database/uploadImages.jsx'; 
import LogIn from './database/login.jsx'; 
import SignUp from './database/signup.jsx';
import AuthDetails from './database/authDetails.jsx';
import AddInfo from './database/addInfo.jsx';

import React, {Fragment} from 'react'
import PrivateRoute from './PrivateRoute.jsx';

import LandingPage from './pages/LandingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import Profile from './pages/Profile.jsx'
import NewUserQs from './pages/NewUserQs.jsx'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path = "/" element = {<LandingPage/>}>  </Route>
            <Route exact path = "/login" element = {<LoginPage/>}> </Route>
            <Route exact path = "/signup" element = {<SignUpPage/>}> </Route>
            <Route 
              exact path = "/profile" 
              element = {
              <PrivateRoute>
                <Profile/>
              </PrivateRoute>
              }> 
            </Route>
            <Route 
              exact path = "/questions" 
              element = {
              <PrivateRoute>
                <NewUserQs/>
              </PrivateRoute>
              }> 
            </Route>
        </Routes>
    </Router>
  )
}

export default App
