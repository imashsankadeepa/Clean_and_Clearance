// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests
app.use(morgan('dev')); // Logs HTTP requests in dev format

// Route imports
const bookingRoutes = require('./routes/bookingRoutes');
const contact = require('./routes/contact');

// API routes
app.use('/api/bookings', bookingRoutes);
app.use('/api/contact', contact);

// Root route for testing
app.get('/', (req, res) => {
  res.send('🌍 API is running');
});

// Global error handler (optional but recommended)
app.use((err, req, res, next) => {
  console.error('⚠️ Error:', err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server and connect to MongoDB
const startServer = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not defined in .env file');
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1); // Exit the process with failure
  }
};

startServer();
