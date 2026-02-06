import { motion } from 'framer-motion';
import { Skills } from '../components/Skills';

export const SkillsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      <Skills />
    </motion.div>
  );
};
