const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors({
  origin: "*", // Adjust to your specific frontend URL post-deployment
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Deployment Health Check Route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: "Production server is successfully live on Vercel!",
    environment: process.env.NODE_ENV || "production"
  });
});

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Local server active on port ${PORT}`));
}

module.exports = app; // CRITICAL for Vercel serverless processing