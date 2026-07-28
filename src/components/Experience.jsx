import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const workItems = [
    {
      year: '2025 – Present',
      role: 'Frontend Developer',
      org: 'Freelance',
      desc: 'Building modern, responsive web apps for various clients using React and vanilla CSS.'
    },
    {
      year: '2024',
      role: 'Web Design Intern',
      org: 'Tech Startup, Kathmandu',
      desc: 'Worked on UI/UX design and frontend implementation for the company dashboard.'
    }
  ];

  const educationItems = [
    {
      year: '2023 – Present',
      degree: 'Bachelor of Computer Science',
      school: 'Tribhuvan University',
      desc: 'Studying core computer science fundamentals alongside modern web technologies.'
    },
    {
      year: '2021 – 2023',
      degree: 'Higher Secondary Education (+2)',
      school: 'Science Faculty',
      desc: 'Focused on computer science and mathematics as major subjects.'
    }
  ];

  const techStack = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Git & GitHub',
    'Node.js', 'Figma', 'Vite', 'Framer Motion', 'REST APIs'
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="title-wrapper"
        >
          <h2 className="section-title">Experience & Education</h2>
        </motion.div>

        <div className="exp-grid">
          {/* Work Column */}
          <div className="exp-column">
            <div className="column-header">
              <Briefcase size={22} className="column-icon" />
              <h3>Work Experience</h3>
            </div>
            <div className="timeline">
              {workItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="timeline-item glass-card"
                >
                  <span className="timeline-year">{item.year}</span>
                  <h4 className="timeline-title">{item.role}</h4>
                  <span className="timeline-org">{item.org}</span>
                  <p className="timeline-desc">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="exp-column">
            <div className="column-header">
              <GraduationCap size={22} className="column-icon" />
              <h3>Education</h3>
            </div>
            <div className="timeline">
              {educationItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="timeline-item glass-card"
                >
                  <span className="timeline-year">{item.year}</span>
                  <h4 className="timeline-title">{item.degree}</h4>
                  <span className="timeline-org">{item.school}</span>
                  <p className="timeline-desc">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="tech-stack"
        >
          <h3 className="tech-title">Tech Stack</h3>
          <div className="tech-tags">
            {techStack.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="tech-pill"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
