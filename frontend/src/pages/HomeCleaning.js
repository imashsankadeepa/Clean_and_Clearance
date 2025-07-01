import React from 'react';
import './HomeCleaning.css';
import { Link } from 'react-router-dom';

const HomeCleaning = () => {
  return (
    <div className="service-page">
      <section className="service-section">
        <div className="container">
          <div className="service-content">
            <div className="service-image">
              <img src="../assets/background2.jpg" alt="Home Cleaning" />
            </div>
            <div className="service-details">
              <h1 className="service-title">Home Cleaning</h1>
              <div className="price-box">
                <span className="price">£69.00</span>
                <span className="price-desc">/month</span>
              </div>
              <ul className="service-features">
                <li>Deep Cleaning Solution</li>
                <li>Full House Cleaning (including Lounge)</li>
                <li>End of Tenancy Cleaning</li>
                <li>Living room & Garden</li>
              </ul>
              <Link to="/book" className="book-button">Book Now</Link>
            </div>
          </div>
          <div className="free-services">
            <h2>Free Services</h2>
            <ul>
              <li>Deep Cleaning Services</li>
              <li>Monthly Cleaning Services</li>
              <li>Garden Cleaning</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCleaning;