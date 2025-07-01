import React, { useState } from 'react';
import './Home.css';
import background1 from '../assets/background1.jpg';
import background4 from '../assets/background4.png';
import logo2 from '../assets/Logo2.png';
import oakTree from '../assets/OAK_Tree.png';
import roots from '../assets/roots.png';
import roots5 from '../assets/roots5.png';

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

  const services = [
    { id: 1, title: 'Office Cleaning', description: 'Professional office cleaning tailored to your schedule.', image: background1, buttonStyle: 'outline' },
    { id: 2, title: 'Spring Cleaning', description: 'Deep cleaning for a fresh start every season.', image: background4, buttonStyle: 'filled' },
    { id: 3, title: 'House Cleaning', description: 'Comprehensive home cleaning services.', image: logo2, buttonStyle: 'outline' },
  ];

  const teamMembers = [
    { id: 1, name: 'Jane Doe', image: oakTree, description: 'Expert in residential cleaning.', socialLinks: [{ icon: '/images/img_instagram.svg', url: '#' }] },
    { id: 2, name: 'John Smith', image: roots, description: 'Specialist in office hygiene.', socialLinks: [{ icon: '/images/img_linkedin.svg', url: '#' }] },
    { id: 3, name: 'Emily Brown', image: roots5, description: 'Pro in deep cleaning.', socialLinks: [{ icon: '/images/img_behance.svg', url: '#' }] },
  ];

  const pricingPlans = [
    { id: 1, name: 'Basic Package', price: '$30.00', period: '/month', features: ['Dusting', 'Mopping'], buttonStyle: 'outline' },
    { id: 2, name: 'Standard Package', price: '$50.00', period: '/month', features: ['Dusting', 'Mopping', 'Vacuuming'], buttonStyle: 'filled', popular: true },
    { id: 3, name: 'Premium Package', price: '$80.00', period: '/month', features: ['Dusting', 'Mopping', 'Deep Clean'], buttonStyle: 'outline' },
  ];

  const blogPosts = [
    { id: 1, title: 'Cleaning Tips', author: 'Jane Doe', date: 'Jun 15, 2025', excerpt: 'Learn simple cleaning hacks.', image: background1, buttonStyle: 'link' },
    { id: 2, title: 'Eco-Friendly Cleaning', author: 'John Smith', date: 'Jun 20, 2025', excerpt: 'Go green with our methods.', image: background4, buttonStyle: 'filled' },
    { id: 3, title: 'Seasonal Prep', author: 'Emily Brown', date: 'Jun 25, 2025', excerpt: 'Prepare your home for seasons.', image: logo2, buttonStyle: 'link' },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Welcome to Clean Living</p>
            <h1 className="hero-title">Top Cleaning Services</h1>
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
            <h2 className="section-title">Trusted Cleaning Experts</h2>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="quality-section">
        <div className="container">
          <div className="quality-content">
            <div className="quality-text">
              <p className="quality-subtitle">Affordable Solutions</p>
              <h2 className="section-title">Quality Cleaning at Fair Prices</h2>
              <p className="section-description">Tailored services for homes and offices</p>
              <button onClick={handleGetQuote} className="cta-button">Get a Quote</button>
            </div>
            <div className="quality-images">
              <img src={background4} alt="Cleaning Service" className="main-image" />
              <img src={logo2} alt="Professional Cleaner" className="secondary-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
       {/* Team Section aa */}
      <section className="team-section">
        <div className="container">
          <div className="team-header">
            <h2 className="section-title">Our Expert Team</h2>
            <p className="section-description">Professionals ensuring top hygiene</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="team-details">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-description">{member.description}</p>
                  <div className="social-links">
                    {member.socialLinks.map((link, index) => (
                      <a key={index} href={link.url} className="social-link">
                        <img src={link.icon} alt="Social" className="social-icon" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
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
            <h2 className="section-title">Choose Your Plan</h2>
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
          <div className="blog-header">
            <h2 className="section-title">Latest Cleaning Tips</h2>
            <p className="section-description">Stay updated with our advice</p>
          </div>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-card">
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="blog-details">
                  <p className="blog-meta">{post.author} | {post.date}</p>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  {post.buttonStyle === 'link' ? <a href="#" className="read-more">Read More</a> : <button className="read-more-button">Read More</button>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="section-title">Contact Us</h2>
              <div className="contact-items">
                <div className="contact-item">
                  <img src="/images/img_call_icon.svg" alt="Phone" className="contact-icon" />
                  <div><h3>Call Us</h3><p>+(01) 234 567 890</p></div>
                </div>
                <div className="contact-item">
                  <img src="/images/img_email_icon.svg" alt="Email" className="contact-icon" />
                  <div><h3>Email</h3><p>info@cleaning.com</p></div>
                </div>
              </div>
            </div>
            <div className="contact-form-container">
              <h2 className="section-title">Get in Touch</h2>
              <form onSubmit={handleContactSubmit} className="contact-form">
                <input type="text" placeholder="Your Name" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} className="form-input" required />
                <input type="email" placeholder="Your Email" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} className="form-input" required />
                <textarea placeholder="Your Message" value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} className="form-textarea" required></textarea>
                <button type="submit" className="form-button">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Clean Living</h3>
              <p>Top cleaning services since 2005</p>
            </div>
            <div className="footer-section">
              <h4>Links</h4>
              <ul><li><a href="#">About</a></li><li><a href="#">Services</a></li></ul>
            </div>
            <div className="footer-section">
              <h4>Newsletter</h4>
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input type="email" placeholder="Your Email" value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} className="newsletter-input" required />
                <button type="submit" className="newsletter-button">Send</button>
              </form>
            </div>
          </div>
          <p className="footer-copyright">2025 Clean Living | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;