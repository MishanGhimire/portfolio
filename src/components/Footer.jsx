import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">
          Mishan<span>.</span>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Mishan Ghimire. Designed & Built with ❤️ in Kathmandu, Nepal
        </p>
        <div className="footer-socials">
          <a href="https://github.com/MishanGhimire" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/mishan-ghimire/" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
