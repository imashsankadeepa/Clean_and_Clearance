const Booking = require('../models/Booking');

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Public
const createBooking = async (req, res) => {
  const { name, email, date, plan, message } = req.body;

  try {
    const newBooking = new Booking({ name, email, date, plan, message });
    await newBooking.save();
    res.status(201).json({ message: 'Booking successful!' });
  } catch (error) {
    console.error('Booking Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { createBooking };
