import React from 'react';
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

  return (
    <div className="office-cleaning">
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
          <button className="btn primary-btn" onClick={() => handleBookNow("Office Cleaning", "£69.00/month")}>
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
                <img src={item.img} alt={item.title} />
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <button className="card-link" onClick={() => handleBookNow(item.title, "£69.00/month")}>
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
        <div className="plan-cards">
          <motion.div
            className="plan-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3>Office Cleaning Package</h3>
            <p className="price">£69.00 <span>/month</span></p>
            <ul>
              <li>✔ Daily/Weekly Office Cleaning</li>
              <li>✔ Desk & Shared Area Cleaning</li>
              <li>✔ Equipment & Monitor Wipes</li>
            </ul>
            <button className="btn primary-btn" onClick={() => handleBookNow("Office Cleaning", "£69.00/month")}>
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
    </div>
  );
};

export default OfficeCleaning;
