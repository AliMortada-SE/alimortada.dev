import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Button } from './ui/Button';
import { useNavigate } from 'react-router-dom';

// Mark which words should use encryption effect (true = encrypted, false = normal typing)
const titles = [
  { text: 'Backend & Systems Engineer', encrypted: false },
  { text: 'Security First', encrypted: true },
  { text: 'Low-level Networking', encrypted: false },
  { text: 'Event-Driven Servers', encrypted: false },
  { text: 'Linux Systems Programming', encrypted: true },
  { text: '|C++ | C | Go', encrypted: false }
];

const ENCRYPTED_CHARS = '!@#$%^&*()_+-=[]{}|;:\'",.&lt;&gt;?/~`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [scrambledVersion, setScrambledVersion] = useState('');
  const [decryptIndex, setDecryptIndex] = useState(0);
  const [phase, setPhase] = useState<'building' | 'decrypting' | 'holding' | 'deleting'>('building');
  const navigate = useNavigate();

  const getRandomChar = (): string => {
    return ENCRYPTED_CHARS[Math.floor(Math.random() * ENCRYPTED_CHARS.length)];
  };

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const isEncrypted = currentTitle.encrypted;
    const text = currentTitle.text;

    const timeout = setTimeout(() => {
      if (isEncrypted) {
        // ENCRYPTED MODE: Build scrambled → decrypt letter by letter
        if (phase === 'building') {
          // Build up scrambled text character by character
          if (displayText.length < text.length) {
            const newChar = getRandomChar();
            const newText = displayText + newChar;
            setDisplayText(newText);
            setScrambledVersion(newText); // Save the full scrambled version
          } else {
            // Finished building scrambled text, start decrypting
            setDecryptIndex(0);
            setPhase('decrypting');
          }
        }
        else if (phase === 'decrypting') {
          // Decrypt letter by letter from left to right
          if (decryptIndex < text.length) {
            const decrypted = text.slice(0, decryptIndex + 1);
            const stillScrambled = scrambledVersion.slice(decryptIndex + 1);
            setDisplayText(decrypted + stillScrambled);
            setDecryptIndex(decryptIndex + 1);
          } else {
            setPhase('holding');
          }
        }
        else if (phase === 'holding') {
          setPhase('deleting');
        }
        else if (phase === 'deleting') {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setTitleIndex((prev) => (prev + 1) % titles.length);
            setPhase('building');
            setDecryptIndex(0);
            setScrambledVersion('');
          }
        }
      } else {
        // NORMAL MODE: Regular typing effect
        if (phase === 'building') {
          // Normal typing
          if (displayText.length < text.length) {
            setDisplayText(text.slice(0, displayText.length + 1));
          } else {
            setPhase('holding');
          }
        }
        else if (phase === 'holding') {
          setPhase('deleting');
        }
        else if (phase === 'deleting') {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setTitleIndex((prev) => (prev + 1) % titles.length);
            setPhase('building');
            setDisplayText('');
          }
        }
      }
    }, getTimeout());

    return () => clearTimeout(timeout);
  }, [displayText, scrambledVersion, decryptIndex, phase, titleIndex]);

  const getTimeout = (): number => {
    const isEncrypted = titles[titleIndex].encrypted;

    if (isEncrypted) {
      if (phase === 'building') return 80;      // Build scrambled speed
      if (phase === 'decrypting') return 50;     // Decrypt speed
      if (phase === 'holding') return 1800;      // Hold before delete
      if (phase === 'deleting') return 50;       // Delete speed
    } else {
      if (phase === 'building') return 80;      // Normal typing speed
      if (phase === 'holding') return 1800;      // Hold before delete
      if (phase === 'deleting') return 50;       // Delete speed
    }
    return 100;
  };

  return (
    <section className="hero">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="hero-gradient" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="hero-circle-1"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="hero-circle-2"
        />
      </div>

      {/* Content */}
      <div className="hero-content">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="hero-greeting">
              Hello, I'm
            </h2>
            <h1 className="hero-title">
              <span className="text-gradient">
                Ali Mortada
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-typing"
          >
            <h2>
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-description"
          >
            I engineer backend systems close to the metal,  where performance and control matter.
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-buttons"
          >
            <Button onClick={() => navigate('/portfolio')} size="lg">
              View My Work
            </Button>
            <Button onClick={() => navigate('/contact')} variant="outline" size="lg">
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-socials"
          >
            {[
              { icon: FaGithub, href: 'https://github.com' },
              { icon: FaLinkedin, href: 'https://linkedin.com' },
              { icon: FaEnvelope, href: 'mailto:your.email@example.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="hero-social-link"
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hero-scroll"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="hero-scroll-indicator"
        >
          <motion.div className="hero-scroll-dot" />
        </motion.div>
      </motion.div>
    </section>
  );
};
