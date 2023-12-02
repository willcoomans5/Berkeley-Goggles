
import React, {Fragment} from 'react'
import PrivateRoute from './PrivateRoute.jsx';

import LandingPage from './pages/LandingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import Profile from './pages/Profile.jsx'
import NewUserQs from './pages/NewUserQs.jsx'
import UploadImages from './database/uploadImages.jsx'; 

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
            <Route
              exact path = "/upload"
              element = {
                <PrivateRoute>
                  <UploadImages/>
                </PrivateRoute>
              }
            />
        </Routes>
    </Router>
  )
}

export default App
