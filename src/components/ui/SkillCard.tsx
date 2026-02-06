import { motion } from 'framer-motion';
import type { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export const SkillCard = ({ skill, index }: SkillCardProps) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="skill-card"
    >
      <div className="skill-card-glow" />

      <div className="skill-card-content">
        <div className="skill-card-header">
          <div className="skill-card-icon-wrapper">
            <div className="skill-card-icon">
              <Icon />
            </div>
          </div>

          <div className="skill-card-info">
            <h3 className="skill-card-name">{skill.name}</h3>
            <p className="skill-card-description">{skill.description}</p>
          </div>
        </div>

        <div className="skill-card-proficiency">
          <div className="skill-card-proficiency-header">
            <span>Proficiency</span>
            <span className="skill-card-proficiency-value">{skill.proficiency}%</span>
          </div>
          <div className="skill-card-proficiency-bar">
            <motion.div
              className="skill-card-proficiency-fill"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.proficiency}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
