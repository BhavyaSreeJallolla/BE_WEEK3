// src/routes/authRoutes.js
import express from 'express';
import { registerController, loginController } from '../controllers/authController.js';
import { validateLogin, validateRegistration, validateRequest } from '../Middlewares/validateMiddleware.js'; // Ensure correct imports

const router = express.Router();

router.post('/register', validateRegistration, validateRequest, registerController);
router.post('/login', validateLogin, validateRequest, loginController);

export default router;
