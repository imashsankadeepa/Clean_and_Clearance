// Contact.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Contact.css';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setStatusMessage('❌ Please fill in all required fields (Name, Email, Message).');
      return;
    }

    const messageText = `📩 *New Contact Message* 📩\n\n` +
      ` Name: ${formData.name}\n` +
      ` Company: ${formData.company}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n` +
      `Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappNumber = '94701195794'; // 94 = Sri Lanka, 701075059 = your number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    try {
      await axios.post('http://localhost:5000/api/contact', formData);

      window.open(whatsappURL, '_blank');

      setStatus('success');
      setStatusMessage('✅ Message sent and WhatsApp opened successfully!');

      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setStatus('error');
      setStatusMessage('❌ Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>Kassapay is ready to provide the right solution according to your needs</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We are here to help you with the right solution tailored to your needs.</p>

          <div className="info-item">
            <span className="icon">🏢</span>
            <p>
              Head Office<br />
              123 High Street, London, SW1A 1AA<br />
              United Kingdom
            </p>
          </div>

          <div className="info-item">
            <span className="icon">📧</span>
            <p><a href="mailto:hello@yourdomain.id">hello@yourdomain.id</a></p>
          </div>

          <div className="info-item">
            <span className="icon">📞</span>
            <p>
              Call Us<br />
              <a href="tel:+442071234567">+44 2071 234567</a><br />
              <a href="tel:+622130032013">Fax: +6221 3003 2013</a>
            </p>
          </div>

<div className="info-item">
  <p>Follow our social media</p>
  <div className="social-icons">
    <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <FaFacebookF className="icon" />
    </a>
    <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
      <SiTiktok className="icon" />
    </a>
    <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
      <FaYoutube className="icon" />
    </a>
  </div>
</div>
        </div>


        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name *"
              required
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message *"
              required
            ></textarea>

            <button type="submit" className="submit-button">Send</button>
          </form>

          {status && (
            <p className={`status-message ${status}`}>
              {statusMessage}
            </p>
          )}
        </div>
      </section>

<section className="map-section" style={{ height: '400px', width: '100%' }}>
  {/* Embedded Google Map with marker */}
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.655579521994!2d0.8688136761733207!3d51.143877279590875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df11e3c7a0428f%3A0xe8fcb1f2b44d92bb!2sDesigner%20Outlet%20Ashford!5e0!3m2!1sen!2suk!4v1699778152345!5m2!1sen!2suk"
    style={{ border: 0, width: '100%', height: '100%' }}
    allowFullScreen=""
    loading="lazy"
    title="Designer Outlet Ashford Location"
  />
  {/* Directions link/button */}
  <a
    href="https://www.google.com/maps/dir/?api=1&destination=Designer+Outlet+Ashford,+Kimberley+Way,+Ashford+TN24+0SD,+United+Kingdom"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-block',
      marginTop: '15px',
      padding: '12px 24px',
      backgroundColor: '#007bff',
      color: 'white',
      borderRadius: '30px',
      textDecoration: 'none',
      fontWeight: '600',
    }}
  >
    Get Directions
  </a>
</section>



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
            <p>
              123 Cleaning Street<br />
              London, UK<br />
              info@cleanandclear.com<br />
              +44 123 456 7890
            </p>
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
}

export default Contact;
