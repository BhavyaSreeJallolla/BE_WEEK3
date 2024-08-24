import express from 'express';
import { getPatients, createPatient } from '../controllers/patientController.js';
import { validatePatient } from '../Middlewares/validateMiddleware.js'; // 

const router = express.Router();

// Route to get all patients
router.get('/', getPatients);

// Route to create a new patient with validation
router.post('/', validatePatient, createPatient);

export default router;
