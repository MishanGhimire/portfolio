import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, User } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="title-wrapper"
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="about-grid">
          {/* Left: Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-text glass-card"
          >
            <div className="about-icon-row">
              <User size={28} className="about-icon" />
              <h3>Who I Am</h3>
            </div>
            <p>
              I'm <strong>Mishan Ghimire</strong>, a passionate self-taught web developer 
              from Kapan, Kathmandu. I love building clean, dynamic, and user-friendly 
              web experiences using modern technologies.
            </p>
            <p>
              I don't have formal work experience yet but I make up for it through 
              constant learning, personal projects, and a deep love for problem solving. 
              Every project I build teaches me something new.
            </p>
            
            <div className="stats">
              <div className="stat-item">
                <span className="stat-number">Self</span>
                <span className="stat-label">Taught Developer</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Education */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="education-card glass-card"
          >
            <div className="about-icon-row">
              <GraduationCap size={28} className="about-icon" />
              <h3>Education</h3>
            </div>

            <div className="edu-item">
              <div className="edu-badge">Bachelor's</div>
              <h4>Deerwalk Institute of Technology</h4>
              <p>Sifal, Kathmandu</p>
              <span className="edu-sub">BSc. in Computer Science & Information Technology (BSc.CSIT)</span>
            </div>

            <div className="edu-divider"></div>

            <div className="edu-item">
              <div className="edu-badge">+2</div>
              <h4>Xavier International College</h4>
              <p>Kalopul, Kathmandu</p>
              <span className="edu-sub">Higher Secondary Education — Science</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
