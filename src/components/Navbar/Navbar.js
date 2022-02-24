import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <>
          <div className="navbarWrapper">
           <div className="logo">
           {/* <img /> */}
           <h1>LOGO</h1>
           </div>
           <div className="options">
                <ul className="optionwrap">
                  <li className="optionElement">Home</li>
                  <li className="optionElement">Services</li>
                  <li className="optionElement">Contact Us</li>
                  <li className="optionElement">About Us</li>
                  {/* <Link to="/profile"><li className="optionElement">Profile</li> </Link> */}
                </ul> 
           </div>
          </div>  
        </>
    )
}

export default Navbar
