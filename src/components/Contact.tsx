import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import { Button } from './ui/Button';
import type { ContactFormData } from '../types';
import { Card } from './ui/Card';

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    // This is where you would integrate with your C++ backend
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/yourusername',
      link: 'https://github.com/yourusername',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      link: 'https://linkedin.com/in/yourprofile',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Your City, Country',
      link: null,
    },
  ];

  return (
    <section className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-header"
        >
          <h2 className="contact-title">
            <span className="text-gradient">
              Get In Touch
            </span>
          </h2>
          <p className="contact-subtitle">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="contact-form-wrapper">
              <form onSubmit={handleSubmit(onSubmit)} className="contact-form space-y-6">
                <div>
                  <label htmlFor="name" className="contact-form-label">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="contact-form-input"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="contact-form-error">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="contact-form-label">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="contact-form-input"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="contact-form-error">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="contact-form-label">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    {...register('subject', { required: 'Subject is required' })}
                    className="contact-form-input"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="contact-form-error">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="contact-form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message', { required: 'Message is required' })}
                    className="contact-form-input contact-form-textarea"
                    placeholder="Your message here..."
                  />
                  {errors.message && (
                    <p className="contact-form-error">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="contact-form-success"
                  >
                    Message received! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-info space-y-6"
          >
            <div>
              <h3 className="contact-info-title">Contact Information</h3>
              <p className="contact-info-description">
                Feel free to reach out through any of these channels. I'm always open to
                discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            <div className="contact-info-cards space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card hover={!!item.link}>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-info-item flex items-center gap-4"
                      >
                        <div className="contact-info-icon">
                          <item.icon />
                        </div>
                        <div>
                          <p className="contact-info-label">{item.label}</p>
                          <p className="contact-info-value">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 contact-info-item-static">
                        <div className="contact-info-icon">
                          <item.icon />
                        </div>
                        <div>
                          <p className="contact-info-label">{item.label}</p>
                          <p className="contact-info-value-static">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
