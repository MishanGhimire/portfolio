import React from 'react';
import { motion } from 'framer-motion';
import {
  SiMongodb, SiExpress, SiReact, SiNodedotjs,
  SiMysql, SiPython, SiJavascript, SiHtml5,
  SiCss, SiGit, SiGithub, SiFigma, SiPostman,
  SiTailwindcss, SiVite, SiFirebase
} from 'react-icons/si';
import './Skills.css';

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { icon: <SiHtml5 />, name: 'HTML5', color: '#e34c26' },
      { icon: <SiCss />, name: 'CSS3', color: '#264de4' },
      { icon: <SiJavascript />, name: 'JavaScript', color: '#f0db4f' },
      { icon: <SiReact />, name: 'React', color: '#61dbfb' },
      { icon: <SiTailwindcss />, name: 'Tailwind', color: '#38bdf8' },
    ]
  },
  {
    category: 'Backend & Database',
    skills: [
      { icon: <SiNodedotjs />, name: 'Node.js', color: '#3c873a' },
      { icon: <SiExpress />, name: 'Express', color: '#a0a0a0' },
      { icon: <SiMongodb />, name: 'MongoDB', color: '#4db33d' },
      { icon: <SiMysql />, name: 'MySQL', color: '#00758f' },
      { icon: <SiFirebase />, name: 'Firebase', color: '#ffca28' },
    ]
  },
  {
    category: 'Languages & Tools',
    skills: [
      { icon: <SiPython />, name: 'Python', color: '#3572A5' },
      { icon: <SiGit />, name: 'Git', color: '#f34f29' },
      { icon: <SiGithub />, name: 'GitHub', color: '#a0a0a0' },
      { icon: <SiVite />, name: 'Vite', color: '#646cff' },
      { icon: <SiFigma />, name: 'Figma', color: '#a259ff' },
      { icon: <SiPostman />, name: 'Postman', color: '#ff6c37' },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="title-wrapper"
        >
          <h2 className="section-title">Skills & Tools</h2>
        </motion.div>

        <div className="skill-groups">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.15 }}
              className="skill-group glass-card"
            >
              <h3 className="group-title">{group.category}</h3>
              <div className="skills-row">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={si}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + si * 0.07 }}
                    whileHover={{ y: -6, scale: 1.1 }}
                    className="skill-item"
                    style={{ '--skill-color': skill.color }}
                  >
                    <div className="skill-icon-wrap">
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
