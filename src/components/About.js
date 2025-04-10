import React from 'react';
import profileImg from '../assets/profile.jpg'; // make sure this image exists

const About = () => {
  return (
    <section id="about" data-aos="fade-up">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={profileImg} alt="Profile" />
        </div>
        <div className="about-text">
          <p>
            Hi, I'm <strong>Nandini Gupta</strong> — a passionate frontend developer focused on building responsive,
            clean, and interactive web interfaces using modern technologies.
          </p>
          <p>
            I specialize in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React</strong>. I enjoy learning new tools, designing user-friendly
            layouts, and building real-world projects that make an impact.
          </p>
          <p>
            Apart from coding, I love UI/UX design, reading tech blogs, and staying updated with the latest web trends.
          </p>

          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Git</span>
            <span>Figma</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
