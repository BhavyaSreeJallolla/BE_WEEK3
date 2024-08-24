import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './src/config/DBconnection.js'; // Ensure this path is correct
import { config } from './src/config/config.js'; // Ensure this path is correct
import authRoutes from './src/routes/authRoutes.js'; // Existing routes
import patientRoutes from './src/routes/patientRoutes.js'; // Existing routes
import providerRoutes from './src/routes/providerRoutes.js'; // Existing routes
import protectedRoutes from './src/routes/protectedRoutes.js'; // New routes file

// Initialize dotenv for environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());  // For parsing application/json
app.use(cookieParser());  // For parsing cookies

// Use existing and new routes
app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/providers', providerRoutes);
app.use('/api', protectedRoutes); // Add the protected routes

// Connect to MongoDB
connectDB();

// Start the server
app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
