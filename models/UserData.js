// models/UserData.js
const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
  visitorId: { type: String, required: true, unique: true },
  visitCount: { type: Number, default: 1 },
  ip: String,
  browser: String,
  os: { type: String },
  device: String,
  country: String,
  region: String,
  city: String,
  sessionStart: { type: Date },
  sessionEnd: { type: Date },
  durationMs: Number,
  timestamp: { type: Date, default: Date.now }, 
});

module.exports = mongoose.model('UserData', userDataSchema);
