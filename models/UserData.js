// models/UserData.js
const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
  visitorId: { type: String, required: true },
  ip: String,
  browser: String,
  os: { type: String },
  device: String,
  country: String,
  region: String,
  city: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('UserData', userDataSchema);
