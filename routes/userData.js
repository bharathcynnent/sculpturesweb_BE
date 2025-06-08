// routes/userData.js
const express = require('express');
const router = express.Router();
const UserData = require('../models/UserData');

// POST /api/user-data
router.post('/', async (req, res) => {
  try {
    const body = { ...req.body };

    // Convert objects to strings if needed
    if (typeof body.os === 'object') body.os = `${body.os.name} ${body.os.version}`;
    if (typeof body.browser === 'object') body.browser = `${body.browser.name} ${body.browser.version}`;
    if (typeof body.device === 'object') body.device = `${body.device.type || ''} ${body.device.model || ''}`.trim();

    const userData = new UserData(body);
    await userData.save();
    res.status(201).json({ message: 'User data stored successfully' });
  } catch (err) {
    console.error('Error saving user data:', err);
    res.status(500).json({ message: 'Failed to store user data' });
  }
});


// GET /api/user-data/all
router.get('/getAllUserData', async (req, res) => {
  try {
    const users = await UserData.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch user data' });
  }
});

module.exports = router;
