import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import User from '../models/userModel.js';

const { JWT_SECRET, JWT_EXPIRY } = config;

export const register = async (userData) => {
  const { name, email, password } = userData;
  
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  
  // Create user
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();
  
  return newUser;
};

export const login = async (userData) => {
  const { email, password } = userData;
  
  // Find user
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');
  
  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');
  
  // Create token
  const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRY });
  
  return token;
};
