import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Define the user schema
const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    default: 'user', 
    enum: ['user', 'admin'] // Restrict to predefined roles
  }
}, { timestamps: true }); // Add timestamps

// Hash password before saving the user
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    try {
      this.password = await bcrypt.hash(this.password, 10);
    } catch (error) {
      return next(error); // Handle hashing errors
    }
  }
  next();
});

// Method to compare hashed password
userSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw new Error('Password comparison failed'); // Handle comparison errors
  }
};

// Create and export the User model
const User = mongoose.model('User', userSchema);

export default User; // Default export
