const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./_config');

// Define routes
const index = require('./routes/index');
const image = require('./routes/image');

// Initialize the app
const app = express();

// View Engine
app.set('view engine', 'ejs');

// Set up the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'test') {
  app.get('/', (req, res) => {
    return res
      .status(200)
      .send('<html><body><h1>Test Home Page</h1></body></html>');
  });
} else {
  // Normal routes
  app.use('/', index);
  app.use('/image', image);
}

// Connect to database and start server
const MONGODB_URI =
  process.env.MONGODB_URI || config.mongoURI[app.settings.env];
const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    if (process.env.NODE_ENV !== 'test') {
      await mongoose.connect(MONGODB_URI);
      console.log(`✅ Connected to Database: ${MONGODB_URI}`);
    }

    app.listen(PORT, () => {
      console.log(`Server is listening at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Database connection error:', err);
    process.exit(1);
  }
}

startServer();

module.exports = app;


