// Header.js

import React, { useState } from 'react';
import '../style/header.css';
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="brand">
        <h1>XYZ</h1>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <Link to={'/'} style={{textDecoration:"none",color:"white"}} ><li>Home</li></Link>
          <Link to={'/user'} style={{textDecoration:"none",color:"white"}} ><li>User</li></Link>
          <Link to={'/post'} style={{textDecoration:"none",color:"white"}} ><li>Post</li></Link>
          <Link to={'/signup'} style={{textDecoration:"none",color:"white"}} ><li>Sign Up</li></Link>
          
          {/* <li>User</li>
          <li>Post</li>
          <li>Sign Up</li> */}
        </ul>
      </nav>
      <div className={`menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        <div className="menu-btn__burger">
        <Hamburger />
        </div>
      </div>
      
    </header>
  );
};

export default Header;
