/**
 * File: auth.js
 * Student Name: Kanchandeep Kaur
 * Student ID: 200603165
 * Date: 15-11-24
 */


const jwt = require('jsonwebtoken'); // Import the jsonwebtoken module for token handling
require('dotenv').config(); // Load environment variables from a .env file

const authenticateToken = (req, res, next) => {   // Middleware function to authenticate the token
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Access denied, no token provided' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid or expired token.' });
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;   // Export the authenticateToken middleware to use it in other parts of the application
