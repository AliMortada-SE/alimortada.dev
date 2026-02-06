import { motion } from 'framer-motion';
import { FaCode, FaRocket,  FaUsers, FaLock } from 'react-icons/fa';

const highlights = [
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'Readable, maintainable code with clear ownership of resources and system behavior.',
  },
  {
    icon: FaRocket,
    title: 'Performance',
    description: 'Low-latency, high-throughput systems optimized for concurrency and efficiency.',
  },
  {
    icon: FaLock,
    title: 'Security',
    description: 'Design secure systems and fully encrypted databases from scratch, with the ability to create custom encryption algorithms for specialized needs.',
  },
  {
    icon: FaUsers,
    title: 'Collaboration',
    description: 'Working effectively in teams,Seamless team collaboration with clear communication,fluent in English and German.',
  },
];

const skills = ['C++', 'C', 'Go', 'POSIX','Kernel & Core Concept','IPC','Event-Driven Architecture','Concurrency','Encryption & Secure Communication','Databases', 'System Design','Web Interfaces (HTML/CSS/JS)'];

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
            Code is written. Systems are built.
            
          </p>
        </motion.div>

        <div className="about-grid">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-content"
          >
            <h3>
              Link You to Lowest Level
            </h3>
            <p>
              I specialize in backend and systems engineering, building secure, 
              high-performance, and scalable software from the ground up.

              I design Linux systems, network protocols, and databases created from scratch,
              fully encrypted for secure communication.

              Servers and tools are built using C++, C, and Go  with event-driven architectures,
              non-blocking I/O, IPC, and encryption-aware protocols.

            </p>
            <p>
              Web technologies are used  as an interface layer to visualize system state and control backend services.
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
          {highlights.map((item, index) => {
            // Map each card to its color theme
            const colorClass =
              item.title === 'Clean Code' ? 'about-highlight-card--code' :
              item.title === 'Performance' ? 'about-highlight-card--performance' :
              item.title === 'Security' ? 'about-highlight-card--security' :
              item.title === 'Collaboration' ? 'about-highlight-card--collaboration' : '';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`about-highlight-card ${colorClass}`}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
