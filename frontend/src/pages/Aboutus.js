import { Link } from 'react-router-dom';
import './Aboutus.css';
import home1 from '../assets/home1.webp';
import kichen from '../assets/kichen.webp';
import cleaning2 from '../assets/cleaning2.webp';
import p1 from '../assets/p1.webp';
import p2 from '../assets/p2.webp';
import p3 from '../assets/p3.webp';

function AboutUs() {
  return (
    <div className="about">
      <section className="about-header">
        <h1>About Us</h1>
        <p className="tagline">Transforming Spaces with Excellence and Sustainability</p>
      </section>
      <section className="about-content">
        <h2>Discover a World of Cleaning Excellence</h2>
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            At Oak Roots Cleaning & Clearance, we deliver premier cleaning and clearance services across the UK, enhancing quality of life through sustainable, eco-friendly practices. Our commitment is to create healthier, more productive spaces for homes, offices, and educational institutions.
          </p>
          <h3>Our Vision</h3>
          <p>
            To lead the UK cleaning industry with innovative, eco-conscious solutions, setting benchmarks in reliability, quality, and client satisfaction. We aim to empower every space with our expertise and dedication to environmental stewardship.
          </p>
          <div className="values">
            <span>Eco-Friendly</span>
            <span>Reliable</span>
            <span>Thorough</span>
            <span>Professional</span>
            <span>Innovative</span>
          </div>
        </div>
        <div className="images">
          <img src={home1} alt="Home Cleaning" />
          <img src={kichen} alt="Kitchen Cleaning" />
          <img src={cleaning2} alt="Cleaning Service" />
          <img src={p1} alt="Professional Team" />
        </div>
        <h2>Smart Cleaning Solutions</h2>
        <p className="subtitle">
          Tailored services for residential, commercial, and educational sectors, ensuring spotless environments with cutting-edge techniques.
        </p>
        <div className="featured-image">
          <img src={p2} alt="Cleaning Tools" />
        </div>
        <div className="stats">
          <span>1,500+ Happy Clients</span>
          <span>25,000+ Cleanings Completed</span>
          <span>3,450 Spaces Transformed</span>
          <span>10+ Years Experience</span>
        </div>
        <div className="testimonials">
          <h3>What Our Clients Say</h3>
          <p>"Oak Roots transformed our office into a pristine workspace. Highly recommend their eco-friendly approach!" - Jane D.</p>
        </div>
        <div className="cta-section">
          <p>Ready to elevate your space?</p>
          <Link to="/services" className="cta-button">Book Our Service</Link>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;