import express from 'express';
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
