import { motion } from 'framer-motion';
import { Projects } from '../components/Projects';

export const PortfolioPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      <Projects />
    </motion.div>
  );
};
