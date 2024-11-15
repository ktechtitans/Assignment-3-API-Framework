/**
 * File: userRoute.js
 * Student Name: Kanchandeep Kaur
 * Student ID: 200603165
 * Date: 15-11-24
 */

const express = require('express'); // Import Express module
const { registerUser, loginUser, logoutUser } = require('../Controller/userController'); // Import controller functions

const router = express.Router(); // Create a new Express router instance

// Define route for user registration
router.post('/register', registerUser); 

// Define route for user login
router.post('/login', loginUser); 

// Define route for user logout
router.post('/logout', logoutUser); 

module.exports = router; // Export the router to be used in other parts of the application
