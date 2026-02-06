import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="project-card"
    >
      <div className="project-card-glow" />

      <div className="project-card-content">
        {/* Image */}
        <div className="project-card-image-wrapper">
          <img
            src={project.image}
            alt={project.title}
            className="project-card-image"
          />
          <div className="project-card-image-overlay" />

          {project.featured && (
            <div className="project-card-featured-wrapper">
              <span className="project-card-featured">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="project-card-body">
          <h3 className="project-card-title">
            {project.title}
          </h3>
          <p className="project-card-description">{project.description}</p>

          {/* Technologies */}
          <div className="project-card-tags">
            {project.technologies.map((tech, i) => (
              <span key={i} className="project-card-tag">
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="project-card-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link project-card-link-github"
              >
                <FaGithub />
                <span>Code</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link project-card-link-live"
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
