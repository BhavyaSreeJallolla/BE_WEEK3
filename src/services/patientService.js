import Patient from '../models/patientModel.js';

// Service for patient-related operations
export const patientService = {
  getAllPatients: async () => {
    try {
      return await Patient.find(); // Fetch all patients
    } catch (error) {
      console.error('Error fetching patients:', error); // Log error for debugging
      throw new Error('Unable to retrieve patients. Please try again later.');
    }
  },
  
  createPatient: async (data) => {
    try {
      const patient = new Patient(data); // Create new patient instance
      return await patient.save(); // Save patient to database
    } catch (error) {
      console.error('Error creating patient:', error); // Log error for debugging
      throw new Error('Unable to create patient. Please check the provided data.');
    }
  }
};
