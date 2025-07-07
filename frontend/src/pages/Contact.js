import { useEffect } from 'react';
import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';


function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', company: '', phone: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact">
      <section className="contact-header">
        <h1>Contact us</h1>
        <p>Kassapay is ready to provide the right solution according to your needs</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>Secuscu viverra leo etiam diam. Sem efficitur molestie iaculis.</p>
          <div className="info-item">
            <span className="icon">🏢</span>
            <p>Head Office<br />123 High Street,London,SW1A 1AA<br />United Kindom</p>
          </div>
          <div className="info-item">
            <span className="icon">📧</span>
            <p><a href="mailto:hello@yourdomain.id">hello@yourdomain.id</a></p>
          </div>
          <div className="info-item">
            <span className="icon">📞</span>
            <p>Call Us<br /><a href="tel:+44 2071234567">+442071234567</a><br /><a href="tel:+622130032013">Fax: +6221 3003 2013</a></p>
          </div>
          <div className="info-item">
            <p>Follow our social media</p>
            <div className="social-icons">
              <a href="#"><span className="icon"></span></a>
              <a href="#"><span className="icon">📷</span></a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company" />
            </div>
            <div className="form-group">
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
            </div>
            <div className="form-group">
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send</button>
            {status && <p className="status-message">{status}</p>}
          </form>
        </div>
      </section>

      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19810.31213414592!2d-0.127758!3d51.507351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b333bf5dc4f%3A0x1a7Head Office: No. 121, 1st Floor, St. Joseph Street, Negombo, Sri Lankac20d7be58c0f!2sLondon%2C%20UK!5e0!3m2!1sen!2slk!4v1628422213310!5m2!1sen!2slk"
          allowFullScreen=""
          loading="lazy"
          title="UK Office Map"
        ></iframe>
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
}

export default ContactUs;