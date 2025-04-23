import React, { useState } from 'react';
import { Link } from 'react-scroll'; // If you're using scroll links
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false); // close menu after click
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Hena Kharwa</div>
      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="home" smooth duration={500} onClick={handleLinkClick}>Home</Link>
        <Link to="about" smooth duration={500} onClick={handleLinkClick}>About</Link>
        <Link to="experience" smooth duration={500} onClick={handleLinkClick}>Experience</Link>
        <Link to="leadership" smooth duration={500} onClick={handleLinkClick}>Leadership</Link>
        <Link to="projects" smooth duration={500} onClick={handleLinkClick}>Projects</Link>
        <Link to="contact" smooth duration={500} onClick={handleLinkClick}>Contact</Link>
      </div>
      <div className="hamburger" onClick={handleToggle}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
