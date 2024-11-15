/**
 * File: DB.js
 * Student Name: Kanchandeep Kaur
 * Student ID: 200603165
 * Date: 15-11-24
 */

const mongoose = require('mongoose'); // Import Mongoose for MongoDB interaction

// Define the async function to connect to the MongoDB database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit the process with a failure code
  }
};

// Export the connectDB function to be used in other parts of the application
module.exports = connectDB;

