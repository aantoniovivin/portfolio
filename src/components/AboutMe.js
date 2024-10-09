import React, { useState, useEffect } from 'react';
import myImage from './myImage.jpeg'; // Adjust the path to your image
import './Typewriter.css'; // Import the typewriter CSS

const AboutMe = () => {
  const [nameTyped, setNameTyped] = useState(''); // State to control the typewriter effect for the name
  const fullName = "Aantonio Vivin"; // Your name to display with typewriter effect
  const [nameCompleted, setNameCompleted] = useState(false); // Track if name typing is completed

  // Typewriter effect for name
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setNameTyped((prev) => prev + fullName[index]);
      index++;
      if (index >= fullName.length) {
        clearInterval(interval); // Stop the interval when the full name is typed
        setNameCompleted(true); // Mark typing as completed
      }
    }, 100); // Adjust typing speed for the name
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [fullName]);

  return (
    <section id="about" style={{ padding: '50px 20px', textAlign: 'center', color: '#f5f5f5' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#76ff03' }}>About Me</h2>
      <img
        src={myImage}
        alt="Aantonio Vivin"
        style={{
          borderRadius: '50%',
          width: '250px',
          height: '250px',
          margin: '20px auto',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
        }}
      />
      
      {/* Typewriter effect for the name below the image */}
      <h3 style={{ fontSize: '2rem', color: '#76ff03', margin: '20px 0' }}>
        <span className="typewriter-name">{nameTyped}</span>
      </h3>
      
      {/* Show the paragraph only when the name typing completes */}
      {nameCompleted && (
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginTop: '20px' }}>
          Hi, I'm <strong>Aantonio Vivin</strong>, a passionate third-year Computer Science Engineering student 
          at Francis Xavier Engineering College. I have a deep interest in building web applications and exploring 
          new technologies. My focus is on writing clean, efficient code and creating dynamic user experiences 
          through modern web development techniques. I thrive in collaborative environments and love tackling challenging projects.
        </p>
      )}
    </section>
  );
};

export default AboutMe;















