import React from 'react';

const Projects = () => {
  // Sample project data (replace with your actual project details)
  const projectData = [
    {
      title: 'Project One',
      description: 'This is a brief description of Project One. It showcases various features and technologies used.',
      link: 'https://github.com/yourusername/project-one', // Link to GitHub or demo
    },
    {
      title: 'Project Two',
      description: 'This is a brief description of Project Two. It highlights key functionalities and innovations.',
      link: 'https://github.com/yourusername/project-two', // Link to GitHub or demo
    },
    {
      title: 'Project Three',
      description: 'This is a brief description of Project Three. It demonstrates your skills and creativity.',
      link: 'https://github.com/yourusername/project-three', // Link to GitHub or demo
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" style={projectsStyle}>
      <h2 style={titleStyle}>Projects</h2>
      <div style={projectsContainerStyle}>
        {projectData.map((project, index) => (
          <div key={index} style={projectCardStyle}>
            <h3 style={projectTitleStyle}>{project.title}</h3>
            <p style={projectDescriptionStyle}>{project.description}</p>
            <a href={project.link} style={linkStyle} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

// Styles for the Projects section
const projectsStyle = {
  padding: '50px 20px',
  textAlign: 'center',
  backgroundColor: 'transparent', // Change to transparent to remove the black blur
  color: '#f5f5f5',
};

const titleStyle = {
  fontSize: '2.5rem',
  color: '#76ff03', // Lime color for title
  marginBottom: '30px',
};

// Container for project cards
const projectsContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

// Individual project card styles
const projectCardStyle = {
  backgroundColor: '#444', // Card background color
  borderRadius: '10px',
  padding: '20px',
  margin: '15px 0',
  maxWidth: '600px',
  width: '100%',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.3s ease',
};

// Styles for project titles and descriptions
const projectTitleStyle = {
  fontSize: '1.8rem',
  color: '#76ff03', // Lime color for project titles
};

const projectDescriptionStyle = {
  fontSize: '1.1rem',
  margin: '10px 0',
};

// Link styles
const linkStyle = {
  color: '#76ff03',
  textDecoration: 'none',
  fontWeight: 'bold',
  border: '2px solid #76ff03',
  padding: '10px 15px',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
};

export default Projects;











