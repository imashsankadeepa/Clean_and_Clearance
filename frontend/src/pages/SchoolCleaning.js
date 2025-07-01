import React from 'react';
import './SchoolCleaning.css';
import { Link } from 'react-router-dom';

const SchoolCleaning = () => {
  return (
    <div className="service-page">
      <section className="service-section">
        <div className="container">
          <div className="service-content">
            <div className="service-image">
              <img src="/images/school-cleaning.jpg" alt="School Cleaning" />
            </div>
            <div className="service-details">
              <h1 className="service-title">School Cleaning</h1>
              <div className="price-box">
                <span className="price">£89.00</span>
                <span className="price-desc">/month</span>
              </div>
              <ul className="service-features">
                <li>Cleaner, Hall, Toilet Cleaning</li>
                <li>Playground & Classroom Supports</li>
                <li>School Cleaning (Morning)</li>
              </ul>
              <Link to="/book" className="book-button">Book Now</Link>
            </div>
          </div>
          <div className="free-services">
            <h2>Free Services</h2>
            <ul>
              <li>Deep Cleaning Services</li>
              <li>Playground Cleaning</li>
              <li>Classroom Cleaning</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolCleaning;