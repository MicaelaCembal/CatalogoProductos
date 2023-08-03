import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav nav_top">
      <div className="logo">
        <a href="index.html"><img src="images/logo.png" width="250" alt="Culinary King" /></a>
      </div>
      <div className="nav_side">
        <a href="about.html">ABOUT US</a>
        <a href="summer.html">SUMMER SALE</a>
        <a href="catering.html">CATERING</a>
        <a href="contact.html">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
