/**
 * File: app.js
 * Student Name: Kanchandeep Kaur
 * Student ID: 200603165
 * Date: 15-11-24
 */


// Import libraries and module
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./SRC/Database/DB');
const Routes = require('./SRC/Route/route');
const userRoutes = require('./SRC/Route/userRoute');

// Load environment variables from .env file
dotenv.config();

//Initialize the express app
const app = express();

// Connect to the MongoDB database
connectDB();

// Middleware
app.use(express.json());

// Use the imported routes for handling requests
app.use('/api/getall', Routes);
app.use('/api/users', userRoutes);

// Export the app for use in server.js
module.exports = app;