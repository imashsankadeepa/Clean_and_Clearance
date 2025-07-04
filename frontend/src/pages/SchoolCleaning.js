import React from 'react';
import './SchoolCleaning.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import background4 from '../assets/background4.webp';
import cleaning2 from '../assets/cleaning2.webp';
import office1 from '../assets/office1.webp';
import home1 from '../assets/home1.webp';
import kichen from '../assets/kichen.webp';
import pic1 from '../assets/pic1.webp';
import pic2 from '../assets/pic2.webp';
import pic3 from '../assets/pic3.webp';

const SchoolCleaning = () => {
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
          <h1>School Cleaning</h1>
          <p>
            Professional cleaning services tailored for educational facilities,
            ensuring a clean, safe, and healthy learning environment for students and staff.
          </p>
          <button className="btn primary-btn">Book Now</button>
        </motion.div>
      </section>
          {/* Our Services as Cards with Images */}
      <section className="services">
        <div className="services-header">
          <h5 className="section-tag">Professional Solutions</h5>
          <h2>Our Services</h2>
          <p>Comprehensive cleaning solutions designed specifically for educational environments</p>
        </div>

        <div className="service-cards">
          {/* Service Card 1 */}
          <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-image">
              <img src={pic1} alt="Hall and toilet cleaning" />
            </div>
            <div className="card-content">
              <h3>Cleaner, Hall, Toilet Cleaning</h3>
              <p>Comprehensive cleaning of all school facilities including hallways and restrooms</p>
            </div>
            <a href="#" className="card-link">Learn more →</a>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card-image">
              <img src={pic2} alt="Playground and classroom cleaning" />
            </div>
            <div className="card-content">
              <h3>Playground & Classroom Supports</h3>
              <p>Specialized cleaning for playground equipment and classroom furniture</p>
            </div>
            <a href="#" className="card-link">Learn more →</a>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="card-image">
              <img src={pic3} alt="Morning school cleaning" />
            </div>
            <div className="card-content">
              <h3>Morning School Cleaning</h3>
              <p>Early morning services to ensure facilities are ready before students arrive</p>
            </div>
            <a href="#" className="card-link">Learn more →</a>
          </motion.div>
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
              active: true,
            },
            {
              title: 'Standard Package',
              price: '$50.00',
              features: ['✔ Dusting', '✔ Mopping', '✔ Vacuuming'],
              active: true,
            },
            {
              title: 'Premium Package',
              price: '$80.00',
              features: ['✔ Dusting', '✔ Mopping', '✔ Deep Clean'],
              active: true,
            },
          ].map((plan, i) => (
            <motion.div
              key={i}
              className={`plan-card ${plan.active ? 'active' : ''}`}
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
              <button className="btn primary-btn">Book Now</button>
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
        <p>&copy; {new Date().getFullYear()} Clean & Clearance. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SchoolCleaning;