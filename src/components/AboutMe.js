import React from 'react';
import myImage from './myImage.jpeg'; // Adjust the file name if needed

// Inline styles for advanced design
const aboutMeStyle = {
  padding: '50px 20px',
  textAlign: 'center',
  backgroundColor: 'transparent', // Set background to transparent to show full image
  color: '#f5f5f5',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  borderRadius: '15px',
  maxWidth: '800px',
  margin: '50px auto',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const titleStyle = {
  fontSize: '2.5rem',
  marginBottom: '20px',
  color: '#76ff03',
};

const paragraphStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.8',
};

const imageStyle = {
  borderRadius: '50%', // Make the image circular, adjust as needed
  width: '150px', // Set width
  height: '150px', // Set height
  margin: '20px auto', // Center the image
};

const AboutMe = () => {
  return (
    <section id="about" style={aboutMeStyle}>
      <h2 style={titleStyle}>About Me</h2>
      <img src={myImage} alt="Aantonio Vivin" style={imageStyle} /> {/* Add the image here */}
      <p style={paragraphStyle}>
        Hi, I'm <strong>Aantonio Vivin</strong>, a passionate third-year Computer Science Engineering student 
        at Francis Xavier Engineering College. I have a deep interest in building web applications and exploring 
        new technologies. My focus is on writing clean, efficient code and creating dynamic user experiences 
        through modern web development techniques. I thrive in collaborative environments and love tackling challenging projects.
      </p>
      <h3 style={titleStyle}>Skills</h3>
      <ul style={{ textAlign: 'center', margin: '0 auto', display: 'inline-block', listStyleType: 'none', padding: 0 }}>
        <li>✔️ Web Development (HTML, CSS, JavaScript)</li>
        <li>✔️ React.js</li>
        <li>✔️ Node.js</li>
        <li>✔️ Python</li>
        <li>✔️ Git & GitHub</li>
        <li>✔️ Responsive Design</li>
        <li>✔️ API Development</li>
        <li>✔️ Database Management (MySQL, MongoDB)</li>
        <li>✔️ Agile Methodologies</li>
      </ul>
    </section>
  );
};

export default AboutMe;










