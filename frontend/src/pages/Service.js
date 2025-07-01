import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">We Always Provide The Best Service</h1>
          <div className="services-grid">
            <Link to="/services/office-cleaning" className="service-card">
              <img src="assets/background2.jpg" alt="Office Cleaning" />
              <p className="service-name">Office Cleaning</p>
            </Link>
            <Link to="/services/home-cleaning" className="service-card">
              <img src="/images/home-cleaning.jpg" alt="Home Cleaning" />
              <p className="service-name">Home Cleaning</p>
            </Link>
            <Link to="/services/school-cleaning" className="service-card">
              <img src="/images/school-cleaning.jpg" alt="School Cleaning" />
              <p className="service-name">School Cleaning</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;