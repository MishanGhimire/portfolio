import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'Final Year Project',
    desc: 'A comprehensive full-stack web application built as my final year project, showcasing real-world problem solving using modern web technologies including the MERN stack.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/MishanGhimire/Final-Year-Project-',
    live: null,
    featured: true,
  },
  {
    title: 'Portfolio Website',
    desc: 'This very portfolio — designed and developed from scratch in React with Framer Motion animations, dark/light theme, and a premium glassmorphism design system.',
    tech: ['React', 'Vite', 'Framer Motion', 'CSS3'],
    github: 'https://github.com/MishanGhimire',
    live: null,
  },
  {
    title: 'More Projects',
    desc: 'Explore all of my open-source work, experiments, and learning projects on GitHub. I\'m constantly building and pushing new code.',
    tech: ['Various', 'Technologies'],
    github: 'https://github.com/MishanGhimire',
    live: null,
    isMore: true,
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="title-wrapper"
        >
          <h2 className="section-title">Projects</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`project-card glass-card ${project.featured ? 'featured' : ''} ${project.isMore ? 'more-card' : ''}`}
            >
              {project.featured && (
                <span className="featured-badge">⭐ Featured</span>
              )}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" className="proj-link-btn">
                  <FaGithub size={16} /> View on GitHub
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="proj-link-btn live">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
