import { Link } from 'react-router-dom';
import './Aboutus.css';
import {
  FaLeaf,
  FaShieldAlt,
  FaStar,
  FaUserTie,
  FaLightbulb,
} from 'react-icons/fa';
import background4 from '../assets/background4.webp';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container">
      <Helmet>
        <title>About Us | OAK Roots Cleaning & Clearance UK</title>
        <meta
          name="description"
          content="Discover OAK Roots UK – your trusted cleaning and clearance partner. Learn about our mission, vision, and values in delivering eco-friendly, reliable services across the UK."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us | OAK Roots UK" />
        <meta
          property="og:description"
          content="Leading UK cleaning company focused on eco-friendly, innovative, and professional cleaning and clearance services. See what our clients say!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.cleanndclearnce.uk/about"
        />
        <meta property="og:image" content={background4} />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "OAK Roots",
            "url": "https://www.cleanndclearnce.uk/about",
            "logo": "https://www.cleanndclearnce.uk/logo.png",
            "description": "OAK Roots provides premier eco-friendly cleaning and clearance services across the UK.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "UK"
            }
          }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <header
        className="about-hero5"
        style={{ backgroundImage: `url(${background4})` }}
      >
        <div className="hero-content5">
          <h1>About Us</h1>
          <p className="subheading">
            Transforming Spaces with Excellence & Sustainability
          </p>
        </div>
      </header>

      {/* Mission & Vision Section */}
      <section className="mission-vision" aria-label="Mission and Vision">
        <div className="mission-box">
          <h2>Our Mission</h2>
          <p>
            To deliver premier cleaning and clearance services across the UK,
            enhancing life through eco-friendly practices. We aim to create
            healthier, productive environments across all sectors.
          </p>
        </div>
        <div className="vision-box">
          <h2>Our Vision</h2>
          <p>
            To lead the UK cleaning industry with innovative, sustainable
            solutions while setting benchmarks in quality, professionalism, and
            customer satisfaction.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values" aria-labelledby="core-values-heading">
        <h2 id="core-values-heading">Our Core Values</h2>
        <div className="values-grid">
          <div className="value-box" aria-label="Eco-Friendly">
            <FaLeaf /> Eco-Friendly
          </div>
          <div className="value-box" aria-label="Reliable">
            <FaShieldAlt /> Reliable
          </div>
          <div className="value-box" aria-label="Thorough">
            <FaStar /> Thorough
          </div>
          <div className="value-box" aria-label="Professional">
            <FaUserTie /> Professional
          </div>
          <div className="value-box" aria-label="Innovative">
            <FaLightbulb /> Innovative
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats" aria-label="Company Statistics">
        <div className="stat-card">
          <h3>1,500+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat-card">
          <h3>25,000+</h3>
          <p>Cleanings Completed</p>
        </div>
        <div className="stat-card">
          <h3>3,450</h3>
          <p>Spaces Transformed</p>
        </div>
        <div className="stat-card">
          <h3>10+</h3>
          <p>Years Experience</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" aria-label="Client Testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-box">
            <p>
              "Oak Roots made our school sparkle! Eco-friendly and professional
              service."
            </p>
            <span>- Lisa T.</span>
          </div>
          <div className="testimonial-box">
            <p>
              "Exceptional attention to detail. Our office has never looked
              better!"
            </p>
            <span>- Michael R.</span>
          </div>
          <div className="testimonial-box">
            <p>
              "Reliable, polite team and outstanding service. Highly
              recommended."
            </p>
            <span>- Ayesha K.</span>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="cta-section" aria-label="Call to Action">
        <h2>Ready to Elevate Your Space?</h2>
        <Link to="/services" className="cta-button">
          Book Our Service
        </Link>
      </section>
    </div>
  );
}

export default AboutUs;
