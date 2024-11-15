/**
 * File: userModel.js
 * Student Name: Kanchandeep Kaur
 * Student ID: 200603165
 * Date: 15-11-24
 */

const mongoose = require("mongoose"); // Import Mongoose for MongoDB interaction
const bcrypt = require("bcryptjs"); // Import bcryptjs for hashing passwords

// Define the user schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, // Username field 
    password: { type: String, required: true } // Password field 
});

// Middleware to hash password before saving the user
userSchema.pre('save', async function (next) {
    
    if (this.isModified('password')) {
      
        this.password = await bcrypt.hash(this.password, 10); 
    }
    next(); 
});

// Export the User model based on the schema
module.exports = mongoose.model('User', userSchema);
