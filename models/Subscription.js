const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Subscription', SubscriptionSchema);
