const express = require('express');
const router = express.Router();
const { createBooking } = require('../controllers/bookingController');

// POST route to handle bookings
router.post('/', createBooking);

module.exports = router;
