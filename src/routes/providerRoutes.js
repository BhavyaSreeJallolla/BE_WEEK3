import express from 'express';
import { getProviders, createProvider } from '../controllers/providerController.js';
import { validateProvider } from '../Middlewares/validateMiddleware.js'; // Import specific validation middleware

const router = express.Router();

// Route to get all providers
router.get('/', getProviders);

// Route to create a new provider with validation
router.post('/', validateProvider, createProvider);

export default router;
