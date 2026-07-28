import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Social Links Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-socials"
        >
          <span className="social-text">Follow On</span>
          <div className="social-line"></div>
          <div className="social-icons">
            <a href="https://github.com/MishanGhimire" target="_blank" rel="noreferrer" className="social-icon"><FaGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/mishan-ghimire/" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin size={20} /></a>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="hero-text-area"
          >
            {/* "Hello, I'm" — letter by letter typing effect */}
            <h4 className="hello-text">
              {"Hello, I'm".split('').map((char, i) => (
                <motion.span
                  key={`hello-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.05, delay: 0.2 + i * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </h4>

            {/* "Mishan Ghimire" — letter by letter typing effect */}
            <h1 className="name-text">
              {'Mishan'.split('').map((char, i) => (
                <motion.span
                  key={`first-${i}`}
                  className="gradient-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.05, delay: 0.8 + i * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05, delay: 1.1 }}
              >
                &nbsp;
              </motion.span>
              {'Ghimire'.split('').map((char, i) => (
                <motion.span
                  key={`last-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.05, delay: 1.15 + i * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            {/* "A Student & Web Developer" — letter by letter typing effect */}
            <p className="role-text">
              {'A Student & Web Developer'.split('').map((char, i) => (
                <motion.span
                  key={`role-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.05, delay: 1.6 + i * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span 
                className="typing-cursor"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: 2.8, duration: 0.8, repeat: Infinity }}
              />
            </p>

            <motion.p 
              className="bio-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              A self-taught developer passionate about building interactive, 
              responsive, and beautiful web experiences with the MERN stack.
            </motion.p>
            
            <motion.div 
              className="hero-btns"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="#projects" className="btn btn-primary">View Work</a>
              <a href="/MishanGhimire_CV.pdf" download className="btn btn-outline"><Download size={16} /> Download Resume</a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image-area"
          >
            <div className="image-wrapper">
              <div className="glow-effect"></div>
              <img src="/avatar.jpg" alt="Mishan Ghimire" className="avatar-img" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="scroll-down"
        >
          <a href="#about">
            <span className="scroll-text">Scroll Down</span>
            <ArrowDown size={20} className="bounce-icon" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
