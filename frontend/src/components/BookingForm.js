import React, { useState, useRef, useEffect } from 'react';
import './BookingForm.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const BookingForm = () => {
  const { state } = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    plan: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const firstErrorRef = useRef(null);

  useEffect(() => {
    if (state?.service) {
      setFormData((prev) => ({
        ...prev,
        plan: `${state.service} ${state.price ? `- ${state.price}` : ''}`,
      }));
    }
  }, [state]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.plan) newErrors.plan = 'Please choose a plan';
    setErrors(newErrors);
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      if (firstErrorRef.current) {
        firstErrorRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    setLoading(true);
    setStatus('');

    try {
      await axios.post('https://oakrootscleaning.uk/api/bookings', formData);
      setStatus('✅ Booking successful! Confirmation email sent.');
      setShowSuccessModal(true);
      setFormData({ name: '', email: '', date: '', plan: '', message: '' });
      setErrors({});

      setTimeout(() => {
        setShowSuccessModal(false);
      }, 3000);
    } catch (err) {
      setStatus('❌ Booking failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-form-container">
      <Helmet>
        <title>Book a Cleaning Service | OAK Roots UK</title>
        <meta name="description" content="Schedule your professional cleaning service with OAK Roots. Choose from Basic, Standard, or Premium packages and get your space shining." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Book a Cleaning Service | OAK Roots" />
        <meta property="og:description" content="Fill out the form to schedule residential or office cleaning. Reliable and affordable services in the UK." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oakrootscleaning.uk/book" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Cleaning Booking Service",
            "provider": {
              "@type": "LocalBusiness",
              "name": "OAK Roots"
            },
            "areaServed": {
              "@type": "Country",
              "name": "UK"
            },
            "serviceType": "Home and Office Cleaning",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://oakrootscleaning.uk/book"
            }
          }
          `}
        </script>
      </Helmet>

      <h1>Book a Cleaning Service</h1>
      <p>Fill out the form below to schedule your cleaning appointment.</p>

      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'error-input' : ''}
          ref={errors.name && !firstErrorRef.current ? firstErrorRef : null}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error-input' : ''}
          ref={errors.email && !firstErrorRef.current ? firstErrorRef : null}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}

        <label htmlFor="date">Preferred Date</label>
        <input
          id="date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          className={errors.date ? 'error-input' : ''}
          ref={errors.date && !firstErrorRef.current ? firstErrorRef : null}
          aria-invalid={errors.date ? "true" : "false"}
        />
        {errors.date && <span className="error-message">{errors.date}</span>}

        <label htmlFor="plan">Choose a Plan</label>
        <select
          id="plan"
          name="plan"
          value={formData.plan}
          onChange={handleChange}
          className={errors.plan ? 'error-input' : ''}
          aria-invalid={errors.plan ? "true" : "false"}
        >
          <option value="">-- Select Plan --</option>
          <option value="Basic Package - $30">Basic Package - $30</option>
          <option value="Standard Package - $50">Standard Package - $50</option>
          <option value="Premium Package - $80">Premium Package - $80</option>
          <option value="Custom">Custom (selected from service page)</option>
        </select>
        {errors.plan && <span className="error-message">{errors.plan}</span>}

        <label htmlFor="message">Additional Notes</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us more about your cleaning needs..."
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit" className="btn primary-btn" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Booking'}
        </button>

        {status && <p className="status-message">{status}</p>}
      </form>

      {showSuccessModal && (
        <div className="success-modal" role="alert" aria-live="polite">
          <div className="success-content">
            <div className="success-icon" aria-hidden="true">✔</div>
            <p>Your submission has been received!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
