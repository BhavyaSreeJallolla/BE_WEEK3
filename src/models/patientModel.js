import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Define schema options, including timestamps
const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['patient', 'admin'] } // Example roles
}, { timestamps: true });

// Hash password before saving the patient
patientSchema.pre('save', async function(next) {
  if (this.isModified('password') || this.isNew) {
    try {
      this.password = await bcrypt.hash(this.password, 10);
      next();
    } catch (err) {
      next(err); // Pass the error to the next middleware
    }
  } else {
    next(); // Proceed if the password was not modified
  }
});

// Method to compare hashed password
patientSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;
