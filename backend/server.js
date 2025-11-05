require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors({
  origin: ['https://student-record-system-indol.vercel.app', 'http://localhost:4200'],
  credentials: true
}));
app.use(express.json());

// Routes
const studentRoutes = require('./routes/student.routes');
app.use('/api/students', studentRoutes);

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://manikantanerella003_db_user:iJVRYr1U4PCWtZPs@cluster0.x80zbep.mongodb.net/studentdb?retryWrites=true&w=majority';

console.log('Environment MONGO_URI:', process.env.MONGO_URI);
console.log('Using MONGO_URI:', MONGO_URI);
console.log('MONGO_URI type:', typeof MONGO_URI);
console.log('MONGO_URI length:', MONGO_URI.length);

mongoose.connect(MONGO_URI)
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Student Record System API is running!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

module.exports = app;
