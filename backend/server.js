require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const studentRoutes = require('./routes/student.routes');
app.use('/api/students', studentRoutes);

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://manikantanerella003_db_user:iJVRYr1U4PCWtZPs@cluster0.x80zbep.mongodb.net/studentdb?retryWrites=true&w=majority';

if (!MONGO_URI.startsWith('mongodb')) {
  console.error('❌ Invalid MongoDB URI format');
  process.exit(1);
}

console.log('✅ MongoDB URI configured');

mongoose.connect(MONGO_URI)
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Student Record System API is running!' });
});

// Start server
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}

module.exports = app;
