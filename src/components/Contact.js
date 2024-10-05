import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to your email or API)
    console.log('Form submitted:', { name, email, message });
    // Clear the form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" style={contactStyle}>
      <h2 style={titleStyle}>Contact Me</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={textareaStyle}
          required
        ></textarea>
        <button type="submit" style={buttonStyle}>
          Send Message
        </button>
      </form>
    </section>
  );
};

// Styles for the Contact section
const contactStyle = {
  padding: '50px 20px',
  textAlign: 'center',
  backgroundColor: 'transparent', // Remove the black blur
  color: '#f5f5f5',
  position: 'relative',
  zIndex: 1, // Ensure this is above the background
};

const titleStyle = {
  fontSize: '2.5rem',
  color: '#76ff03', // Lime color for title
  marginBottom: '30px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputStyle = {
  padding: '10px',
  margin: '10px 0',
  borderRadius: '5px',
  border: '1px solid #ccc',
  width: '100%',
  maxWidth: '400px', // Max width for input fields
};

const textareaStyle = {
  padding: '10px',
  margin: '10px 0',
  borderRadius: '5px',
  border: '1px solid #ccc',
  width: '100%',
  maxWidth: '400px', // Max width for textarea
  height: '100px',
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#76ff03', // Lime color for button
  color: '#333',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default Contact;




