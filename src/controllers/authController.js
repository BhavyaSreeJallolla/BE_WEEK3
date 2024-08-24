import { login, registerUser } from '../services/authService.js'; // Import registerUser

// Export the login controller
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await login(email, password);
    res.cookie('token', token, { httpOnly: true }); // Set cookie with token
    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

// Define and export the register controller
export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await registerUser(name, email, password); // Call the registration function
    res.status(201).json({ message: 'Registration successful', user: newUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
