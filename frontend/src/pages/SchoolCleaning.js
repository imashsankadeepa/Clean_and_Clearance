import React from 'react';
import './SchoolCleaning.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import background4 from '../assets/background4.webp';
import pic1 from '../assets/pic1.webp';
import pic2 from '../assets/pic2.webp';
import pic3 from '../assets/pic3.webp';

const SchoolCleaning = () => {
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
  

  return (
    <div className="school-cleaning">
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
            {"School Cleaning".split("").map((letter, index) => (
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
            Professional cleaning services tailored for educational facilities,
            ensuring a clean, safe, and healthy learning environment for students and staff.
          </p>
          <button className="btn primary-btn" onClick={() => handleBookNow("School Cleaning", "Custom")}>
            Book Now
          </button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services-header">
          <h5 className="section-tag">Professional Solutions</h5>
          <h2>Our Services</h2>
          <p>Comprehensive cleaning solutions designed specifically for educational environments</p>
        </div>

        <div className="service-cards">
          {[
            {
              img: pic1,
              title: "Cleaner, Hall, Toilet Cleaning",
              desc: "Comprehensive cleaning of all school facilities including hallways and restrooms"
            },
            {
              img: pic2,
              title: "Playground & Classroom Supports",
              desc: "Specialized cleaning for playground equipment and classroom furniture"
            },
            {
              img: pic3,
              title: "Morning School Cleaning",
              desc: "Early morning services to ensure facilities are ready before students arrive"
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
              <button className="card-link" onClick={() => handleBookNow(item.title, "Custom")}>
                Book Now →
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="plans">
        <h2>Our Plans</h2>
        <p>Choose Your Plan</p>
        <div className="plan-toggle">
          <button className="btn secondary-btn active">Monthly</button>
          <button className="btn secondary-btn">Yearly</button>
        </div>
        <div className="plan-cards">
          {[
            {
              title: 'Basic Package',
              price: '$30.00',
              features: ['✔ Dusting', '✔ Mopping'],
            },
            {
              title: 'Standard Package',
              price: '$50.00',
              features: ['✔ Dusting', '✔ Mopping', '✔ Vacuuming'],
            },
            {
              title: 'Premium Package',
              price: '$80.00',
              features: ['✔ Dusting', '✔ Mopping', '✔ Deep Clean'],
            },
          ].map((plan, i) => (
            <motion.div
              key={i}
              className="plan-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3>{plan.title}</h3>
              <p className="price">{plan.price} <span>/month</span></p>
              <ul>
                {plan.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <button className="btn primary-btn" onClick={() => handleBookNow(plan.title, plan.price)}>
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Free Services */}
      <section className="free-services">
        <h5 className="section-tag green">Added Value</h5>
        <h2>Free Services</h2>
        <p>Additional complimentary services included with every school cleaning package.</p>
        <div className="free-cards">
          {[
            {
              title: 'Deep Cleaning Service',
              desc: 'Thorough cleaning of all surfaces and hard-to-reach places.',
            },
            {
              title: 'Playground Cleaning',
              desc: 'Sanitization of outdoor equipment for student safety.',
            },
            {
              title: 'Classroom Cleaning',
              desc: 'Detailed cleaning of desks, walls, and educational materials.',
            },
          ].map((free, i) => (
            <motion.div
              key={i}
              className="free-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <h4>{free.title}</h4>
              <p>{free.desc}</p>
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
            <p>123 Cleaning Street<br />
              London, UK<br />
              info@cleanandclear.com<br />
              +44 123 456 7890</p>
          </div>
          <div className="footer-section">
            <h4>Hours</h4>
            <p>Monday - Friday: 8am - 8pm<br />
              Saturday: 9am - 5pm<br />
              Sunday: Closed</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Clean and Clear. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SchoolCleaning;
