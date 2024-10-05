import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

  const handleClick = (e) => {
    // Add a class to create the sprinkle effect on click
    const link = e.target;
    link.classList.add('sprinkle-animation');

    // Remove the class after the animation duration
    setTimeout(() => {
      link.classList.remove('sprinkle-animation');
    }, 1000); // Adjust duration based on your CSS animation length
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <nav style={navbarStyle} className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav-list ${isOpen ? 'active' : ''}`} style={navListStyle}>
        <li style={navItemStyle}>
          <a href="#about" className="link" onClick={handleClick}>About Me</a>
        </li>
        <li style={navItemStyle}>
          <a href="#projects" className="link" onClick={handleClick}>Projects</a>
        </li>
        <li style={navItemStyle}>
          <a href="#contact" className="link" onClick={handleClick}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

// Navbar styles
const navbarStyle = {
  backgroundColor: 'transparent',
  color: '#fff',
  padding: '10px',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  display: 'flex', // Ensure the navbar is flexible
  justifyContent: 'space-between', // Adjust to space between logo and menu
  alignItems: 'center', // Center items vertically
};

const navListStyle = {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'space-around', // Distribute space evenly
  margin: 0, // Remove default margin
  padding: 0, // Remove default padding
};

const navItemStyle = {
  margin: '0 15px',
};

export default Navbar;










