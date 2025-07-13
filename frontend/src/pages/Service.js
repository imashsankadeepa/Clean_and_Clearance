// Service.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaRegFileAlt,
  FaBroom,
  FaCouch,
  FaCalendarAlt,
  FaLeaf,
  FaSmile,
} from 'react-icons/fa';
import './Service.css';
import ss1 from '../assets/ss1.webp';
import ss2 from '../assets/ss2.webp';
import ss3 from '../assets/ss3.webp';
import backgroundImg from '../assets/background4.webp';

const Service = () => {
  const navigate = useNavigate();

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      title: 'Free Quote',
      description: 'Instant pricing and transparent process.',
      icon: <FaRegFileAlt size={40} color="#22c55e" />,
    },
    {
      title: 'Clean',
      description: 'Our expert team performs high-quality cleaning.',
      icon: <FaBroom size={40} color="#22c55e" />,
    },
    {
      title: 'Relax',
      description: 'Enjoy your spotless space with peace of mind.',
      icon: <FaCouch size={40} color="#22c55e" />,
    },
    {
      title: 'Schedule Flexibly',
      description: 'Choose the time that suits your schedule.',
      icon: <FaCalendarAlt size={40} color="#22c55e" />,
    },
    {
      title: 'Eco-friendly Products',
      description: 'We use safe and sustainable cleaning supplies.',
      icon: <FaLeaf size={40} color="#22c55e" />,
    },
    {
      title: 'Satisfaction Guaranteed',
      description: 'Your happiness is our priority.',
      icon: <FaSmile size={40} color="#22c55e" />,
    },
  ];

  const stats = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Trained Staff', value: '500+' },
    { label: 'Client Satisfaction', value: '95%' },
    { label: 'Repeat Clients', value: '85%' },
  ];

  const services = [
    { id: 1, title: 'Office Cleaning', image: ss1 },
    { id: 2, title: 'School Cleaning', image: ss2 },
    { id: 3, title: 'Home Cleaning', image: ss3 },
  ];

  const pathMap = {
    'Office Cleaning': '/services/office-cleaning',
    'School Cleaning': '/services/school-cleaning',
    'Home Cleaning': '/services/home-cleaning',
  };

  return (
    <div className="service-container">
      {/* Hero Section */}
      <section className="service-hero">
        <div
          className="hero-bg-image"
          style={{ backgroundImage: `url(${backgroundImg})` }}
          aria-hidden="true"
        />
        <div className="hero-overlay">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-title3"
          >
            Expert Cleaning Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="hero-subtitle"
          >
            Delivering reliable, professional and eco-friendly cleaning across the UK.
          </motion.p>
          <div className="hero-buttons">

             <Link to="/booking" className="primary-btn">Get a Quote</Link>

          </div>
        </div>
        
      </section>

      {/* Stats Section */}
      <section className="why-stats">
        <h2>We Are Experienced & Have Expert Teams</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-box"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <p>{stat.value}</p>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="service-categories">
        <h2>Here's What We Can Do for You</h2>
        <div className="service-cards-grid">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 15px 30px rgba(0,0,0,0.12)',
              }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate(pathMap[service.title])}
              style={{ cursor: 'pointer' }}
            >
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="quote-section">
        <h2>Book a Cleaning Today</h2>
        <p>
          We’re ready to help you maintain a clean and healthy space. Schedule a cleaning in just a few clicks.
        </p>

         <Link to="/booking" className="primary-btn">Request a Quote</Link>
      </section>

      {/* Process Steps */}
      <section className="process-steps">
        <h2>Quick and Easy</h2>
        <p className="process-intro">
          Our streamlined process ensures your cleaning needs are met smoothly and efficiently.
        </p>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Clean and Clear</h3>
            <p>Professional cleaning services for schools and educational facilities.</p>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>School Cleaning</li>
              <li>Office Cleaning</li>
              <li>Commercial Cleaning</li>
              <li>Special Services</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>
              123 Cleaning Street<br />
              London, UK<br />
              info@cleanandclear.com<br />
              +44 123 456 7890
            </p>
          </div>
          <div className="footer-section">
            <h4>Hours</h4>
            <p>
              Monday - Friday: 8am - 8pm<br />
              Saturday: 9am - 5pm<br />
              Sunday: Closed
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Clean and Clear. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Service;
