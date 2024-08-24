import express from 'express';
<<<<<<< HEAD
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
=======
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';

// Load environment variables
config();

// Import routes
import authRoutes from './routes/authRoutes.js';
import patientRoutes from './routes/patientRoutes.js';  
import providerRoutes from './routes/providerRoutes.js';  

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); 
app.use(cookieParser()); // Parse cookies

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes); 
app.use('/api/providers', providerRoutes); 

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Set port and start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
>>>>>>> origin/master
