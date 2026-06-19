const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// 1. Configure CORS Middleware (Crucial for Full-Stack Connection)
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173', // Your Vite/React app URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// 2. Sample Integrated API Route
app.get('/api/status', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Backend connection established successfully!',
    timestamp: new Date()
  });
});

// 3. Centralized API Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Integration Server listening on port ${PORT}`));