import mongoose from 'mongoose';

// Define the schema for the healthcare provider
const providerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  specialty: {
    type: String,
    required: true,
    trim: true
  },
  contactInfo: {
    phone: {
      type: String,
      required: true,
      match: [/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'] // Example phone validation
    },
    email: {
      type: String,
      required: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'Invalid email address'] // Example email validation
    }
  },
  availability: {
    type: [String], // Example: ["Monday", "Wednesday", "Friday"]
    required: true
  },
  address: {
    street: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zipCode: {
      type: String,
      required: true
    }
  }
}, { timestamps: true }); // Add timestamps

// Create the model from the schema
const Provider = mongoose.model('Provider', providerSchema);

export default Provider; // Use ES module syntax
