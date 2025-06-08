const express = require('express');
const router = express.Router();
const Subscription = require('../models/Subscription');

// POST /api/subscribe
router.post('/subscribe', async (req, res) => {
  const { email, phone } = req.body;

  if (!email && !phone) {
    return res.status(400).json({ message: 'Email or phone number is required.' });
  }

  try {
    const subscription = new Subscription({ email, phone });
    await subscription.save();
    res.status(200).json({ message: 'Subscribed successfully!' });
  } catch (err) {
    console.error('Error saving subscription:', err);
    res.status(500).json({ message: 'Something went wrong!' });
  }
});

// GET /api/subscribe/all
router.get('/subscribe/all', async (req, res) => {
  try {
    const subscriptions = await Subscription.find().sort({ createdAt: -1 });
    res.status(200).json(subscriptions);
  } catch (err) {
    console.error('Error fetching subscriptions:', err);
    res.status(500).json({ message: 'Unable to fetch subscriptions' });
  }
});

module.exports = router;
