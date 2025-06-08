// routes/purchasedUsers.js
const express = require("express");
const router = express.Router();
const PurchasedUser = require("../models/PurchasedUser");

// GET all
router.get("/", async (req, res) => {
  const users = await PurchasedUser.find().sort({ createdAt: -1 });
  res.json(users);
});

// POST create
router.post("/", async (req, res) => {
  try {
    const newUser = await PurchasedUser.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update
router.put("/:id", async (req, res) => {
  try {
    const updated = await PurchasedUser.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await PurchasedUser.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
