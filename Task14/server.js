const express = require('express');
const { body, validationResult } = require('express-validator');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());

// 1. Validation & Sanitization Rules Array
const registrationValidationRules = [
  // Validate email format and sanitize by normalizing it (lowercasing, trimming)
  body('email')
    .isEmail().withMessage('Please provide a valid email address.')
    .normalizeEmail(),

  // Validate string, trim whitespaces, and escape dangerous characters (Prevents XSS)
  body('username')
    .trim()
    .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long.')
    .escape(),

  // Enforce password strength criteria
  body('password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.')
    .matches(/\d/).withMessage('Password must contain at least one number.')
];

// 2. Custom Middleware to Handle Validation Results Interception
const validateInputs = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map(err => ({ field: err.path, message: err.msg }))
    });
  }
  next();
};

// 3. Secure Endpoint Route
app.post('/api/register', registrationValidationRules, validateInputs, (req, res) => {
  // Destructure safe, sanitized inputs from req.body
  const { username, email, password } = req.body;

  res.status(201).json({
    success: true,
    message: 'User registration inputs validated and sanitized safely!',
    data: { username, email } // Password excluded for safety
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Security compliance server running on port ${PORT}`));