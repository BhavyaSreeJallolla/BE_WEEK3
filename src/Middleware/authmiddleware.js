import jwt from 'jsonwebtoken';
import config from '../config/config.js';

const { JWT_SECRET } = config;

export const authenticate = (req, res, next) => {
  const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Access denied' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });

    req.user = decoded; // Attach decoded token info to the request
    next();
  });
};

