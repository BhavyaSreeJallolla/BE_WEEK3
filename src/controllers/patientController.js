import Patient from '../models/patientModel.js';
import { patientService } from '../services/patientService.js';

export const getPatients = async (req, res) => {
  try {
    const patients = await patientService.getAllPatients();
    res.json(patients);
  } catch (err) {
    console.error('Error fetching patients:', err); // Logging error
    res.status(500).json({ message: 'Failed to retrieve patients. Please try again later.' });
  }
};

export const createPatient = async (req, res) => {
  try {
    // Optionally validate input data here
    const newPatient = await patientService.createPatient(req.body);
    res.status(201).json(newPatient);
  } catch (err) {
    console.error('Error creating patient:', err); // Logging error
    res.status(400).json({ message: 'Failed to create patient. Please check the provided data.' });
  }
};
