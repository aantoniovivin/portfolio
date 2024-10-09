import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

  const handleClick = (e, menu) => {
    const link = e.target;

    // Add the sprinkle effect animation to all links
    link.classList.add('sprinkle-animation');

    // Add popup/bounce/wiggle animation based on the clicked menu
    if (menu === 'about') {
      link.classList.add('bounce');  // Add bounce effect
    } else if (menu === 'projects') {
      link.classList.add('popup');  // Add popup animation
    } else if (menu === 'contact') {
      link.classList.add('wiggle', 'pulse');  // Add both wiggle and pulse animation
    }

    // Remove animation classes after 1 second to reset for the next click
    setTimeout(() => {
      link.classList.remove('sprinkle-animation', 'bounce', 'popup', 'wiggle', 'pulse');
    }, 1000); // This matches the duration of the longest animation
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <div className={`nav-container ${isOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <a
              href="#about"
              className="link"
              onClick={(e) => handleClick(e, 'about')}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#projects"
              className="link"
              onClick={(e) => handleClick(e, 'projects')}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className="link"
              onClick={(e) => handleClick(e, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;




















