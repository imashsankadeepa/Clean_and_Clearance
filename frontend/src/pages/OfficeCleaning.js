import React from 'react';
import './OfficeCleaning.css';
import { Link } from 'react-router-dom';

const OfficeCleaning = () => {
  return (
    <div className="service-page">
      <section className="service-section">
        <div className="container">
          <div className="service-content">
            <div className="service-image">
              <img src="/images/office-cleaning.jpg" alt="Office Cleaning" />
            </div>
            <div className="service-details">
              <h1 className="service-title">Office Cleaning</h1>
              <div className="price-box">
                <span className="price">£69.00</span>
                <span className="price-desc">/month</span>
              </div>
              <ul className="service-features">
                <li>Daily/weekly on-site Office cleaning</li>
                <li>Desk & Chair Shared Space Cleaning</li>
                <li>Reception desk & Shared Space Cleaning</li>
                <li>Office Furniture & Computer Monitor Wipes</li>
              </ul>
              <Link to="/book" className="book-button">Book Now</Link>
            </div>
          </div>
          <div className="free-services">
            <h2>Free Services</h2>
            <ul>
              <li>Deep Cleaning Services</li>
              <li>Monthly Cleaning Services</li>
              <li>Office Furniture Cleaning</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfficeCleaning;