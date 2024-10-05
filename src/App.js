// src/App.js
import React from 'react';
import Navbar from './components/Navbar'; // Adjust the path to './components/Navbar'
import AboutMe from './components/AboutMe'; // Adjust the path to './components/AboutMe'
import Projects from './components/Projects'; // Adjust the path to './components/Projects'
import Contact from './components/Contact'; // Adjust the path to './components/Contact'
import BackgroundVideo from './components/BackgroundVideo'; // Import the BackgroundVideo component

const App = () => {
  return (
    <>
      <BackgroundVideo /> {/* Add the BackgroundVideo component here */}
      <Navbar />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
};

export default App;











