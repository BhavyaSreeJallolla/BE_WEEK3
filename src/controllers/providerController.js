import Provider from '../models/providerModel.js'; // Import the correct model
import { providerService } from '../services/providerService.js'; // Import the correct service

export const getProviders = async (req, res) => {
  try {
    const providers = await providerService.getAllProviders(); // Call the correct service method
    res.json(providers);
  } catch (err) {
    console.error('Error fetching providers:', err); // Logging error
    res.status(500).json({ message: 'Failed to retrieve providers. Please try again later.' });
  }
};

export const createProvider = async (req, res) => {
  try {
    // Optionally validate input data here
    const newProvider = await providerService.createProvider(req.body); // Call the correct service method
    res.status(201).json(newProvider);
  } catch (err) {
    console.error('Error creating provider:', err); // Logging error
    res.status(400).json({ message: 'Failed to create provider. Please check the provided data.' });
  }
};
