const mongoose = require("mongoose");

const purchasedUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  address: String,
  phone: { type: String, required: true },
  comments: String,
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  deliveryDate: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model("PurchasedUser", purchasedUserSchema);
