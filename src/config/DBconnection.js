import mongoose from 'mongoose';
import { config } from './config.js'; // Correct relative path

const connectDB = async () => {
  try {
    console.log('MongoDB URI:', config.MONGO_URI); // Debug log
    await mongoose.connect(config.MONGO_URI); // Removed deprecated options
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

export default connectDB;
