import { useState } from 'react';
import axios from 'axios';
import './Contact.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('Message sent successfully! We’ll respond within 1 working day.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again or call us.');
    }
  };

  return (
    <div className="contact">
      <section className="contact-header">
        <h1>Let’s Make Your Space Shine</h1>
        <p className="sub-headline">We’re just one call away from clean!</p>
      </section>
      <section className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>UK-based | 7 Days a Week Availability</strong></p>
          <p><strong>Phone:</strong></p>
          <p><a href="tel:+447557765488">+44 755 776 5488</a></p>
          <p><a href="tel:+447741076669">+44 7741 076669</a></p>
          <p><a href="tel:+447721259573">+44 7721 259573</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@oakroots.co.uk">info@oakroots.co.uk</a></p>
          <p><strong>Working Hours:</strong> 8 AM - 7 PM</p>
          <p><strong>Emergency Services:</strong> Available</p>
          <p><strong>Fast Response:</strong> Quotes within 1 working day</p>
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="cta-button">Send Message</button>
            {status && <p className="status-message">{status}</p>}
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;