import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/AliMortada-SE', label: 'GitHub' },
  { icon: FaInstagram, href: 'https://instagram.com/alimortada.se/', label: 'Instagram' },
  { icon: FaEnvelope, href: 'mailto:alimortada.se@gmail.com', label: 'Email' },
  //{ icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/skills', label: 'Skills' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gradient"
            >
              Ali Mortada
            </motion.h3>
            <p>
              Highlights of my professional journey, skills, and projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Quick Links
            </motion.h4>
            <ul className="footer-links">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={link.path}>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Connect
            </motion.h4>
            <div className="footer-socials">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="footer-social-link"
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="footer-bottom"
        >
          <p>
            © {currentYear} Ali Mortada. All rights reserved.
          </p>
          <p className="footer-made-with">
            {/* Made with <FaHeart className="footer-heart" /> using React & TypeScript */}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
