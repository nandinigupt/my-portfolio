import React from 'react';

const projects = [
  {
    title: "Task Management App",
    description: "A React-based app to manage daily tasks with CRUD operations and responsive UI.",
    live: "https://your-task-app.netlify.app",
    code: "https://github.com/yourgithub/task-manager"
  },
  {
    title: "E-commerce Website",
    description: "Frontend for an online store with product filters, cart, and responsive design.",
    live: "https://your-ecom-site.netlify.app",
    code: "https://github.com/yourgithub/ecommerce-site"
  },
  {
    title: "Portfolio Website",
    description: "Responsive personal portfolio built with React, showcasing projects and skills.",
    live: "https://nandini-portfolio.netlify.app",
    code: "https://github.com/yourgithub/portfolio"
  },
];

const Projects = () => {
  return (
    <section id="projects" data-aos="fade-up">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index} data-aos="zoom-in">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="project-links">
              <a href={proj.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={proj.code} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
