const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const { submitContact, getAiResponse } = require('../controllers/systemController');

// Rate Limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window`
  message: { error: 'Too many requests from this IP, please try again later.' }
});

const chatLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 15, // Limit each IP to 15 chat messages per minute
  message: { error: 'Chat rate limit exceeded. Please slow down.' }
});

router.post('/contact', apiLimiter, submitContact);
router.post('/chat', chatLimiter, getAiResponse);

module.exports = router;
