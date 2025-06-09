const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const compression = require('compression');
const contactRoutes = require('./routes/contactRoutes');
const subscriptionRoutes = require('./routes/subscription');
const userDataRoutes = require('./routes/userData');
const PurchasedUser = require('./routes/PurchasedUser');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(compression());
app.use(helmet());

// Routes contact
app.use('/api/contact', contactRoutes);
// Routes subscription
app.use('/api', subscriptionRoutes);
// Routes user data
app.use('/api/user-data', userDataRoutes);
// purchased user data
app.use('/api/purchased-users', PurchasedUser);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error('MongoDB connection failed:', err.message);
});
