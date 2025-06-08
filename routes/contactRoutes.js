const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/submit', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(200).json({ message: 'Message received successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong!' });
  }
});

// GET all contacts
router.get('/all', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Unable to fetch contacts' });
  }
});


module.exports = router;
