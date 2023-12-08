// Import React and necessary components
import React from 'react';
import { Link } from 'react-router-dom'; 
import './NavBar.css'
import logo from '../assets/logo2.svg';


// NavigationBar component
const NavigationBar = () => {
  return (
    <nav>
      <img src={logo} className = "logoNav" alt="logo"/>
      <ul className="list1">
        <li className ="list2">
          <Link to="/" className ="navLink"> About </Link> 
        </li>
        <li className ="list2">
          <Link to="/messages" className ="navLink"> Messages </Link> 
        </li>

        <li className ="list2">
          <Link to="/match" className ="navLink"> Match</Link> 
        </li>
        <li className ="list2">
          <Link to="/profile" className ="navLink">Profile</Link> 
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;