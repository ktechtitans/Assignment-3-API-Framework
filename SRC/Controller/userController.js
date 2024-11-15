/**
 * File: userController.js
 * Student Name: Kanchandeep Kaur
 * Student ID: 200603165
 * Date: 15-11-24
 */

const jwt = require('jsonwebtoken');
const User = require('../Models/userModel'); // Import Model funtion
const bcryptjs = require('bcryptjs');
require('dotenv').config();

// Register a new user
const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = new User({ username, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: 'Registration completed successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

// Login a user
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user by username
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: 'User not found' });

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        // Create JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'An issue occurred during login', error });
    }
};

// Log out user
const logoutUser = (req, res) => {
    // Send success message for logging out
    res.json({ message: 'You have been logged out successfully.' });
};

// Export the controller functions for use in the routes
module.exports = {
    registerUser,
    loginUser,
    logoutUser
};
