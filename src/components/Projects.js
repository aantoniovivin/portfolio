import React from 'react';
import './Projects.css'; // Import the CSS file

const Projects = () => {
  // Sample project data
  const projectData = [
    {
      title: 'Project One',
      description: 'I am a passionate Computer Science Engineering student with a keen interest in web development and programming. I specialize in building interactive and responsive websites using React.js, and I love exploring new technologies and tools. With a solid understanding of front-end and back-end frameworks, I focus on creating user-friendly applications. I am constantly working on improving my skills in UI/UX design, problem-solving, and optimization. My curiosity and dedication drive me to stay up-to-date with industry trends. I strive to deliver innovative solutions and contribute to open-source communities.',
      link: 'https://github.com/aantoniovivin/portfolio',
    },
    {
      title: 'Project Two',
      description: 'Project Two is a web application that leverages modern JavaScript technologies and frameworks. It focuses on delivering a seamless user experience by integrating a dynamic UI with responsive design principles. The project features real-time data handling, ensuring smooth interactions and live updates. Built using React.js, it incorporates reusable components for modular development. Advanced state management techniques like Redux are utilized for efficient data flow. The application is optimized for performance and designed to scale, ensuring fast load times and reliability.',
      link: 'https://github.com/aantoniovivin/vivin',
    },
    {
      title: 'Project Three',
      description: 'Project Three is a fully responsive e-commerce web application that allows users to browse products, add them to the cart, and proceed to checkout. Built with React.js and Node.js, it supports secure payment processing and an intuitive admin dashboard for product management. The application is optimized for performance and designed for scalability to handle high traffic.',
      link: 'https://github.com/yourusername/project-three',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title typewriter">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

// Exporting Projects as default
export default Projects;

















