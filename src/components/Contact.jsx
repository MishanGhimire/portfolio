import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="title-wrapper"
        >
          <h2 className="section-title">Get In Touch</h2>
        </motion.div>

        <div className="contact-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info glass-card"
          >
            <h3>Let's talk about everything!</h3>
            <p className="contact-desc">
              Have a project in mind or just want to say hi? My inbox is always open. 👋
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:mishanghimire2003@gmail.com" className="info-link">
                    mishanghimire2003@gmail.com
                  </a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Phone size={20} /></div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+9779844594654" className="info-link">
                    +977 9844594654
                  </a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Location</h4>
                  <p>Kapan, Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form glass-card"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input id="name" type="text" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" placeholder="Web Design Project" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
