import { motion } from 'framer-motion';
import { Contact } from '../components/Contact';

export const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      <Contact />
    </motion.div>
  );
};
