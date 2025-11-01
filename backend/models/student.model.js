const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: String, required: true, unique: true },
  department: { type: String },
  year: { type: Number },
  semester: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
