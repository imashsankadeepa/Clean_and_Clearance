import { Link } from 'react-router-dom';
import './Aboutus.css';
import { FaLeaf, FaShieldAlt, FaStar, FaUserTie, FaLightbulb } from 'react-icons/fa';
import background4 from '../assets/background4.webp';

function AboutUs() {
  return (
    <div className="about-container">

      {/* Hero Section */}
      <header className="about-hero5" style={{ backgroundImage: `url(${background4})` }}>
        <div className="hero-content5">
          <h1>About us</h1>
          <p className="subheading">Transforming Spaces with Excellence & Sustainability</p>
        </div>
      </header>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="mission-box">
          <h2>Our Mission</h2>
          <p>
            To deliver premier cleaning and clearance services across the UK, enhancing life through eco-friendly practices. We aim to create healthier, productive environments across all sectors.
          </p>
        </div>
        <div className="vision-box">
          <h2>Our Vision</h2>
          <p>
            To lead the UK cleaning industry with innovative, sustainable solutions while setting benchmarks in quality, professionalism, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-box"><FaLeaf /> Eco-Friendly</div>
          <div className="value-box"><FaShieldAlt /> Reliable</div>
          <div className="value-box"><FaStar /> Thorough</div>
          <div className="value-box"><FaUserTie /> Professional</div>
          <div className="value-box"><FaLightbulb /> Innovative</div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-card"><h3>1,500+</h3><p>Happy Clients</p></div>
        <div className="stat-card"><h3>25,000+</h3><p>Cleanings Completed</p></div>
        <div className="stat-card"><h3>3,450</h3><p>Spaces Transformed</p></div>
        <div className="stat-card"><h3>10+</h3><p>Years Experience</p></div>
      </section>

      {/* Client Testimonials */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-box">
            <p>"Oak Roots made our school sparkle! Eco-friendly and professional service." </p>
            <span>- Lisa T.</span>
          </div>
          <div className="testimonial-box">
            <p>"Exceptional attention to detail. Our office has never looked better!" </p>
            <span>- Michael R.</span>
          </div>
          <div className="testimonial-box">
            <p>"Reliable, polite team and outstanding service. Highly recommended." </p>
            <span>- Ayesha K.</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Elevate Your Space?</h2>
        <Link to="/services" className="cta-button">Book Our Service</Link>
      </section>

    </div>
  );
}

export default AboutUs;
