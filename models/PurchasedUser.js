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
  purchaseDate: { type: Date, required: true },
  status: { type: String, required: true },
  quantity: { type: String, required: true },
  paymentMethod: { type: String, required: true },

}, { timestamps: true });

module.exports = mongoose.model("PurchasedUser", purchasedUserSchema);
