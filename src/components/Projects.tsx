import { motion } from 'framer-motion';
import { useState } from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ui/ProjectCard';

const technologies = ['All', 'C++', 'React', 'TypeScript', 'WebSockets', 'Node.js'];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) =>
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(activeFilter.toLowerCase())
          )
        );

  return (
    <section className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="projects-header"
        >
          <h2 className="projects-title">
            <span className="text-gradient">
              Featured Projects
            </span>
          </h2>
          <p className="projects-subtitle">
            A collection of my recent work showcasing various technologies and solutions
          </p>
        </motion.div>

        {/* Technology Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="projects-filter"
        >
          {technologies.map((tech) => (
            <motion.button
              key={tech}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(tech)}
              className={`projects-filter-btn ${activeFilter === tech ? 'active' : ''}`}
            >
              {tech}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="projects-empty"
          >
            <p>
              No projects found with the selected filter.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
