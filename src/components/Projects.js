import React from 'react';

const projects = [
  {
    title: "Student-class- Management",
    description: "A React-based app to manage daily tasks with CRUD operations and responsive UI.",
    live: "https://student-manag.netlify.app/",
    code: "https://github.com/nandinigupt/student-class-management"
  },
  {
    title: "Landing-Page",
    description: " Is a web page that's designed to get visitors to take a specific action.",
    live: "https://solidupage.netlify.app/",
    code: "https://github.com/nandinigupt/Landing-Page"
  },
  {
    title: "Google-Calendar",
    description: "Allows users to manage their schedule by creating, organizing, and sharing events, tasks, and reminders.",
    live: "https://calendar-google.netlify.app/",
    code: "https://github.com/nandinigupt/MERN-Calendar"
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
