import React, { useState, useRef, useEffect } from 'react';
import './BookingForm.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

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
  const firstErrorRef = useRef(null);

  // Auto-fill plan from state (if exists)
  useEffect(() => {
    if (state?.service) {
      setFormData((prev) => ({
        ...prev,
        plan: `${state.service} ${state.price ? `- ${state.price}` : ''}`
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
     await axios.post('http://localhost:5000/api/bookings', formData);

      setStatus('✅ Booking successful!');
      setFormData({ name: '', email: '', date: '', plan: '', message: '' });
      setErrors({});
    } catch (err) {
      setStatus('❌ Booking failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-form-container">
      <h2>Book a Cleaning Service</h2>
      <p>Fill out the form below to schedule your cleaning appointment.</p>

      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <label>Name</label>
        <input
          ref={errors.name && !firstErrorRef.current ? firstErrorRef : null}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'error-input' : ''}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}

        {/* Email */}
        <label>Email</label>
        <input
          ref={errors.email && !firstErrorRef.current ? firstErrorRef : null}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error-input' : ''}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}

        {/* Date */}
        <label>Preferred Date</label>
        <input
          ref={errors.date && !firstErrorRef.current ? firstErrorRef : null}
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className={errors.date ? 'error-input' : ''}
        />
        {errors.date && <span className="error-message">{errors.date}</span>}

        {/* Plan */}
        <label>Choose a Plan</label>
        <select
          name="plan"
          value={formData.plan}
          onChange={handleChange}
          className={errors.plan ? 'error-input' : ''}
        >
          <option value="">-- Select Plan --</option>
          <option value="Basic Package - $30">Basic Package - $30</option>
          <option value="Standard Package - $50">Standard Package - $50</option>
          <option value="Premium Package - $80">Premium Package - $80</option>
          <option value="Custom">Custom (selected from service page)</option>
        </select>
        {errors.plan && <span className="error-message">{errors.plan}</span>}

        {/* Message */}
        <label>Additional Notes</label>
        <textarea
          name="message"
          placeholder="Tell us more about your cleaning needs..."
          value={formData.message}
          onChange={handleChange}
        />

        {/* Submit */}
        <button type="submit" className="btn primary-btn" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Booking'}
        </button>

        {/* Status */}
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default BookingForm;
