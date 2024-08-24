import { register, login } from '../services/authService.js';

export const registerUser = async (req, res) => {
  try {
    const newUser = await register(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const token = await login(req.body);
    
    // Set token in cookie
    res.cookie('token', token, {
      httpOnly: true, // Prevents JavaScript access
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      maxAge: 3600000 // 1 hour
    });

    res.json({ message: 'Logged in successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
