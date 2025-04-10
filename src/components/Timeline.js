import React from 'react';

const Timeline = () => {
  return (
    <section id="timeline" data-aos="fade-up">
      <h2>My Journey</h2>
      <div className="timeline">
        <div className="timeline-item" data-aos="fade-left">
          <h4>2020 - 2024</h4>
          <p>Bachelor's in Computer Science - XYZ University</p>
        </div>
        <div className="timeline-item" data-aos="fade-left">
          <h4>2023 - Present</h4>
          <p>Frontend Developer Intern - CloudCredits</p>
        </div>
        <div className="timeline-item" data-aos="fade-left">
          <h4>2022</h4>
          <p>Built my first full-stack MERN project</p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
