const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: String,
  email: String,
  phone: { type: String, required: true },
  message: { type: String, required: true },
  reason: { type: String, default: 'General Inquiry' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contact', contactSchema);
