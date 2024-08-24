import express from 'express';
import { authMiddleware } from '../Middlewares/authMiddleware.js';

const router = express.Router();

// Define a protected route
router.get('/protected', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'This is a protected route', user: req.user });
});

export default router;
