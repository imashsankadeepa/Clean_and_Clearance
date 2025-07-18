import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';  // <-- import Helmet for SEO
import './OfficeCleaning.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import background4 from '../assets/background4.webp';
import pic1 from '../assets/pic1.webp';
import pic2 from '../assets/pic2.webp';
import pic3 from '../assets/pic3.webp';

const OfficeCleaning = () => {
  const navigate = useNavigate();
  const bookingFormPath = '/booking';

  const handleBookNow = (service, price) => {
    navigate(bookingFormPath, {
      state: { service, price },
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [billingType, setBillingType] = useState('monthly');

  const pricing = {
    monthly: {
      title: 'Office Cleaning Package',
      price: '£69.00',
      duration: '/month',
      features: [
        '✔ Daily/Weekly Office Cleaning',
        '✔ Desk & Shared Area Cleaning',
        '✔ Equipment & Monitor Wipes'
      ]
    },
    yearly: {
      title: 'Office Cleaning Package',
      price: '£749.00',
      duration: '/year',
      features: [
        '✔ Daily/Weekly Office Cleaning',
        '✔ Desk & Shared Area Cleaning',
        '✔ Equipment & Monitor Wipes',
        '✔ 2 Free Deep Clean Services'
      ]
    }
  };

  const currentPlan = pricing[billingType];

  return (
    <div className="office-cleaning">

      {/* SEO Metadata */}
      <Helmet>
        <title>Office Cleaning Services| Oak roots cleaning</title>
        <meta
          name="description"
          content="Reliable and professional office cleaning services to keep your workspace hygienic, fresh, and productive. Flexible plans with daily, weekly, and deep cleaning options."
        />
        <meta
          name="keywords"
          content="office cleaning, workspace cleaning, desk cleaning, monitor wipes, commercial cleaning, London cleaning services"
        />
        <meta name="author" content="Clean and Clear" />
        <meta property="og:title" content="Professional Office Cleaning Services in London | Clean and Clear" />
        <meta
          property="og:description"
          content="Keep your office clean and hygienic with our tailored office cleaning packages. Flexible monthly and yearly plans available."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={background4} />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${background4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            {"Office Cleaning".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.5,
                  ease: "easeOut"
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>
          <p>
            Reliable and professional office cleaning services to keep your workspace hygienic, fresh, and productive every day.
          </p>
          <button
            className="btn primary-btn"
            onClick={() => handleBookNow("Office Cleaning", currentPlan.price + currentPlan.duration)}
            aria-label="Book Office Cleaning Service"
          >
            Book Now
          </button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services-header">
          <h5 className="section-tag">Workplace Hygiene</h5>
          <h2>Our Services</h2>
          <p>Complete office cleaning solutions for corporate and shared spaces</p>
        </div>

        <div className="service-cards">
          {[
            {
              img: pic1,
              title: "Daily/Weekly On-site Cleaning",
              desc: "Flexible schedules to maintain office cleanliness daily or weekly.",
            },
            {
              img: pic2,
              title: "Desk & Shared Space Cleaning",
              desc: "Cleaning of desks, chairs, shared lounges and workstations.",
            },
            {
              img: pic3,
              title: "Reception & Equipment Wipes",
              desc: "Cleaning of reception desks, computer monitors, and office furniture.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="card-image">
                <img src={item.img} alt={`${item.title} service image`} />
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <button
                className="card-link"
                onClick={() => handleBookNow(item.title, currentPlan.price + currentPlan.duration)}
                aria-label={`Book ${item.title} service`}
              >
                Book Now →
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Plan */}
      <section className="plans">
        <h2>Our Plan</h2>
        <p>Office Cleaning Subscription</p>

        <div className="plan-toggle">
          <button
            className={`btn secondary-btn ${billingType === 'monthly' ? 'active' : ''}`}
            onClick={() => setBillingType('monthly')}
            aria-pressed={billingType === 'monthly'}
          >
            Monthly
          </button>
          <button
            className={`btn secondary-btn ${billingType === 'yearly' ? 'active' : ''}`}
            onClick={() => setBillingType('yearly')}
            aria-pressed={billingType === 'yearly'}
          >
            Yearly
          </button>
        </div>

        <div className="plan-cards">
          <motion.div
            className="plan-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3>{currentPlan.title}</h3>
            <p className="price">{currentPlan.price} <span>{currentPlan.duration}</span></p>
            <ul>
              {currentPlan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button
              className="btn primary-btn"
              onClick={() => handleBookNow(currentPlan.title, currentPlan.price + currentPlan.duration)}
              aria-label={`Book ${currentPlan.title}`}
            >
              Book Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Free Services */}
      <section className="free-services">
        <h5 className="section-tag green">Free Services</h5>
        <h2>Bonus Inclusions</h2>
        <p>All office cleaning plans include the following at no extra cost.</p>
        <div className="free-cards">
          {[
            {
              title: 'Deep Cleaning Service',
              desc: 'Intensive cleaning for carpets, windows, and hard-to-reach spaces.',
            },
            {
              title: 'Monthly Cleaning Service',
              desc: 'Once-a-month deep sanitation for entire premises.',
            },
            {
              title: 'Office Furniture Cleaning',
              desc: 'Spot cleaning and care of work desks, cabinets, and chairs.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="free-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
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
            <address>
              123 Cleaning Street<br />
              London, UK<br />
              <a href="mailto:info@cleanandclear.com">info@cleanandclear.com</a><br />
              <a href="tel:+441234567890">+44 123 456 7890</a>
            </address>
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

export default OfficeCleaning;
