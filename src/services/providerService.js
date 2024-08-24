import Provider from '../models/providerModel.js';

// Service for provider-related operations
export const providerService = {
  getAllProviders: async () => {
    try {
      return await Provider.find(); // Fetch all providers
    } catch (error) {
      console.error('Error fetching providers:', error); // Log error for debugging
      throw new Error('Unable to retrieve providers. Please try again later.');
    }
  },
  
  createProvider: async (data) => {
    try {
      const provider = new Provider(data); // Create new provider instance
      return await provider.save(); // Save provider to database
    } catch (error) {
      console.error('Error creating provider:', error); // Log error for debugging
      throw new Error('Unable to create provider. Please check the provided data.');
    }
  }
};
