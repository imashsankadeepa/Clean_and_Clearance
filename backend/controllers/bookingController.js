const Booking = require('../models/Booking');
const nodemailer = require('nodemailer');

// @desc    Create a new booking and send confirmation email
// @route   POST /api/bookings
// @access  Public
const createBooking = async (req, res) => {
  const { name, email, date, plan, message } = req.body;

  try {
    // Save booking to database
    const newBooking = new Booking({ name, email, date, plan, message });
    await newBooking.save();

    // Email setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'imashsankadeepa27@gmail.com',
        pass: 'rnot lrwn cymx deyz', // Replace with real App Password
      },
    });

    const mailOptions = {
      from: 'imashsankadeepa27@gmail.com',
      to: email,
      subject: '✅ Cleaning Booking Confirmation',
      html: `
        <h3>Hello ${name},</h3>
        <p>Thank you for booking a cleaning service with us!</p>
        <p><strong>Booking Details:</strong></p>
        <ul>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Plan:</strong> ${plan}</li>
          <li><strong>Notes:</strong> ${message || 'None'}</li>
        </ul>
        <p>We’ll get in touch with you soon!</p>
        <br/>
        <p>Best regards,<br/>CleanUp Team</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Booking successful and confirmation email sent!' });

  } catch (error) {
    console.error('Booking or Email Error:', error);
    res.status(500).json({ message: 'Server Error. Could not complete booking.' });
  }
};

module.exports = { createBooking };
