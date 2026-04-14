const jwt = require('jsonwebtoken');
const User = require('../models/User');

/**
 * @desc  Protect routes — requires valid Bearer JWT
 * Fixes: logic bug where double-response was possible if token existed but verify threw
 */
const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Not authorized, no token' });
  }

  try {
    const token = authHeader.split(' ')[1];

    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not configured on the server.');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');

    if (!req.user) {
      return res.status(401).json({ error: 'Not authorized, user not found' });
    }

    next();
  } catch (error) {
    console.error('Auth middleware error:', error.message);
    return res.status(401).json({ error: 'Not authorized, token failed' });
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ error: 'Not authorized as an admin' });
  }
};

module.exports = { protect, admin };
