import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { SkillCard } from './ui/SkillCard';

export const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="skills-header"
        >
          <h2 className="skills-title">
            <span className="text-gradient">
              Skills & Expertise
            </span>
          </h2>
          <p className="skills-subtitle">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div layout className="skills-grid">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="skills-stats"
        >
          {[
            { value: '4+', label: 'Years Experience' },
            { value: '7+', label: 'Projects Completed' },
            { value: '15+', label: 'Technologies' },
            { value: '20g', label: 'Coffee per day' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skills-stat-card"
            >
              <div className="skills-stat-value text-gradient">
                {stat.value}
              </div>
              <div className="skills-stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
