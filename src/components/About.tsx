import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaLightbulb, FaUsers } from 'react-icons/fa';

const highlights = [
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'Writing maintainable and efficient code following best practices',
  },
  {
    icon: FaRocket,
    title: 'Performance',
    description: 'Optimizing systems for maximum speed and reliability',
  },
  {
    icon: FaLightbulb,
    title: 'Innovation',
    description: 'Exploring cutting-edge technologies and creative solutions',
  },
  {
    icon: FaUsers,
    title: 'Collaboration',
    description: 'Working effectively in teams and contributing to open source',
  },
];

const skills = ['C++', 'Low-Level Networking', '', 'WebSockets', '', 'System Design'];

export const About = () => {
  return (
    <section className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-header"
        >
          <h2 className="about-title">
            <span className="text-gradient">
              About Me
            </span>
          </h2>
          <p className="about-subtitle">
            Passionate about building robust systems and creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="about-grid">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image-wrapper">
              <div className="about-image-glow" />
              <div className="about-image-container">
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&h=600&fit=crop"
                  alt="Profile"
                  className="about-image"
                />
                <div className="about-image-overlay" />
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-content"
          >
            <h3>
              Building the Future, One Line at a Time
            </h3>
            <p>
              I'm a passionate developer specializing in high-performance network systems and
              modern web applications. With expertise in C++, React, and network programming,
              I create solutions that are both powerful and elegant.
            </p>
            <p>
              My journey in software development has led me to work on diverse projects ranging
              from low-level system programming to full-stack web development. I thrive on
              solving complex problems and continuously learning new technologies.
            </p>
            <div className="about-tags">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="about-tag"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="about-highlights">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="about-highlight-card"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="about-highlight-icon"
              >
                <item.icon />
              </motion.div>
              <h4 className="about-highlight-title">{item.title}</h4>
              <p className="about-highlight-description">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
