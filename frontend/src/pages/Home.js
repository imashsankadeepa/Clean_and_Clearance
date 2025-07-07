
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Home.css';
 // Import the separate Team Section CSS
 import { Link } from 'react-router-dom';

import background4 from '../assets/background4.webp';
import logo2 from '../assets/Logo2.png';
import office1 from '../assets/office1.webp';
import home1 from '../assets/home1.webp';
import kichen from '../assets/kichen.webp';
import cleaning2 from '../assets/cleaning2.webp';
import p1 from '../assets/p1.webp';
import tip1 from '../assets/tip1.webp';
import tip2 from '../assets/tip2.webp';
import tip3 from '../assets/tip3.webp';
import p2 from '../assets/p2.webp';
import p3 from '../assets/p3.webp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setContactForm({ name: '', email: '', message: '' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    setNewsletterEmail('');
  };

  const handleBookNow = (service) => {
    alert(`Booking request for ${service} has been submitted!`);
  };

  const handleGetQuote = () => {
    alert('Quote request submitted! We will contact you shortly.');
  };

  // GSAP Animations for Why Choose Us Section
  useEffect(() => {
    gsap.fromTo(
      '.why-choose-text',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.why-choose-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.why-choose-images img',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.why-choose-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const services = [
    { id: 1, title: 'Office Cleaning', description: 'Professional office cleaning tailored to your schedule.', image: office1, buttonStyle: 'outline' },
    { id: 2, title: 'School Cleaning', description: 'Deep cleaning for a fresh start every season.', image:home1 , buttonStyle: 'filled' },
    { id: 3, title: 'House Cleaning', description: 'Comprehensive home cleaning services.', image: kichen, buttonStyle: 'outline' },
  ];

  const teamMembers = [
    { id: 1, name: 'Amashi', image: p1, description: 'Expert in residential cleaning.', socialLinks: [{ icon: '/images/img_instagram.svg', url: '#' }] },
    { id: 2, name: 'Sanka', image: p2, description: 'Specialist in office hygiene.', socialLinks: [{ icon: '/images/img_linkedin.svg', url: '#' }] },
    { id: 3, name: 'Sathisma', image: p3, description: 'Pro in deep cleaning.', socialLinks: [{ icon: '/images/img_behance.svg', url: '#' }] },
  ];

  const pricingPlans = [
    { id: 1, name: 'Basic Package', price: '$30.00', period: '/month', features: ['Dusting', 'Mopping'], buttonStyle: 'outline' },
    { id: 2, name: 'Standard Package', price: '$50.00', period: '/month', features: ['Dusting', 'Mopping', 'Vacuuming'], buttonStyle: 'filled', popular: true },
    { id: 3, name: 'Premium Package', price: '$80.00', period: '/month', features: ['Dusting', 'Mopping', 'Deep Clean'], buttonStyle: 'outline' },
  ];

  const blogPosts = [
  {
    id: 1,
    image:tip1,
    title: '5 Essential Kitchen Cleaning Tips',
    excerpt: 'Keep your UK kitchen spotless with minimal effort.',
    author: 'Sarah M.',
    date: 'July 2025',
  },
  {
    id: 2,
    image:tip2,
    title: 'End-of-Tenancy Cleaning Guide',
    excerpt: 'Make sure you get your full deposit back with these tips.',
    author: 'John B.',
    date: 'June 2025',
  },
  {
    id: 3,
    image: tip3,
    title: 'Eco-Friendly Cleaning Products',
    excerpt: 'Safe, sustainable and budget-friendly options for your home.',
    author: 'Claire D.',
    date: 'May 2025',
  },
]

  // Animation variants for team cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Welcome to Cleaner World</p>
            <h1 className="hero-title2">Britain's Most Trusted Cleaning & Clearance Experts</h1>
            <p className="hero-description">Over 20 years of excellence in cleaning solutions</p>
            <div className="hero-buttons">
              <button onClick={handleGetQuote} className="hero-button primary">Get Started</button>
              
              <button className="hero-button secondary">View Services</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="services-header">
            <h1 className="section-title">OUR SERVICES - TAILORED TO YOU</h1>
            <p className="section-description">20+ years of professional service with spotless results</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="service-details">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <button onClick={() => handleBookNow(service.title)} className={`service-button ${service.buttonStyle}`}>Book Now</button>
                    <Link to="/booking" ></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <p className="why-subtitle">Why Choose Us</p>
              <h2 className="section-title2">Let Us Be the Secret Behind Your Spotless Space</h2>
              <p className="section-description">We're not just a service - we're your partners in peace of mind.</p>
              <ul className="benefits-list">
                <li className="benefit-item">
                  <span className="benefit-icon">✔</span> Affordable packages for all budgets
                </li>
                <li className="benefit-item">
                  <span className="benefit-icon">✔</span> Free site surveys
                </li>
                <li className="benefit-item">
                  <span className="benefit-icon">✔</span> After-clean performing options
                </li>
                <li className="benefit-item">
                  <span className="benefit-icon">✔</span> 100% satisfaction guaranteed
                </li>
                <li className="benefit-item">
                  <span className="benefit-icon">✔</span> Loyalty program with discounts for regular customers & schools
                </li>
              </ul>
              <p className="company-name">Oak Roots Cleaning & Clearance UK</p>
              <button onClick={handleGetQuote} className="cta-button">
                Get a Quote
              </button>
            </div>
            <div className="why-choose-images">
              <img src={cleaning2} alt="Cleaning Service" className="main-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section" aria-labelledby="team-heading">
        <div className="container">
          <div className="team-header">
            <h2 id="team-heading" className="section-title1">Our Expert Team</h2>
            <p className="section-description">Professionals delivering exceptional cleaning and clearance services across the UK</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="team-card"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                role="article"
                aria-labelledby={`team-member-${member.id}`}
              >
                <img
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  className="team-image"
                  loading="lazy"
                />
                <div className="team-details">
                  <h3 id={`team-member-${member.id}`} className="team-name">{member.name}</h3>
                  <p className="team-description">{member.description}</p>
                  <div className="social-links" role="navigation" aria-label={`Social media links for ${member.name}`}>
                    {member.socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${member.name}'s ${
                          link.icon.includes('linkedin') ? 'LinkedIn' :
                          link.icon.includes('instagram') ? 'Instagram' :
                          link.icon.includes('behance') ? 'Behance' : 'social'
                        } profile`}
                      >
                        <img src={link.icon} alt="" className="social-icon" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="pricing-overlay"></div>
        <div className="container">
          <div className="pricing-header">
            <p className="pricing-subtitle">Our Plans</p>
            <h2 className="section-title4">Choose Your Plan</h2>
            <div className="plan-toggle">
              <button onClick={() => setSelectedPlan('monthly')} className={`toggle-button ${selectedPlan === 'monthly' ? 'active' : ''}`}>Monthly</button>
              <button onClick={() => setSelectedPlan('yearly')} className={`toggle-button ${selectedPlan === 'yearly' ? 'active' : ''}`}>Yearly</button>
            </div>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                <h3 className="plan-name">{plan.name}</h3>
                <div className="price-container">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <ul className="features-list">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="feature-item">{feature}</li>
                  ))}
                </ul>
                <button onClick={() => handleBookNow(plan.name)} className={`plan-button ${plan.buttonStyle}`}>Book Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
      <div className="container">
        <motion.div 
          className="blog-header"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Latest Cleaning Tips</h2>
          <p className="section-description">Stay updated with expert advice</p>
        </motion.div>
        
  


        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
            >
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-details">
                <p className="blog-meta">{post.author} | {post.date}</p>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <button className="read-more-button">Read More</button>
              </div>
            </motion.div>
          ))}
        </div>
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
            <p>123 Cleaning Street<br />
              London, UK<br />
              info@cleanandclear.com<br />
              +44 123 456 7890</p>
          </div>
          <div className="footer-section">
            <h4>Hours</h4>
            <p>Monday - Friday: 8am - 8pm<br />
              Saturday: 9am - 5pm<br />
              Sunday: Closed</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Clean and Clear. All rights reserved.</p>
        </div>
      </footer>
    </div>

  );
};

export default Home;