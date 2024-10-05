import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Aantonio Vivin. All Rights Reserved.</p>
      <div style={socialIconsStyle}>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub</a> | 
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn</a>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
};

const socialIconsStyle = {
  marginTop: '5px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

export default Footer;
