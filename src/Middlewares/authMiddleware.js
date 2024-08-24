import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

export const authMiddleware = (req, res, next) => {
  const token = req.cookies.token; // Get token from cookies
  if (!token) {
    res.setHeader('WWW-Authenticate', 'Bearer realm="Access to the protected resource"');
    return res.status(401).json({ message: 'Access denied' });
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded; // Attach user info to request
    next();
  } catch (err) {
    res.setHeader('WWW-Authenticate', 'Bearer realm="Access to the protected resource"');
    res.status(401).json({ message: 'Invalid token' });
  }
};
