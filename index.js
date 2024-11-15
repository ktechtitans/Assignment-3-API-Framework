/**
 * File: index.js
 * Student Name: Kanchandeep Kaur
 * Student ID: 200603165
 * Date: 15-11-24
 */

const app = require('./app'); // Import the Express app from the 'app' module
const port = process.env.PORT || 5000; // Set the port number

// Start the server and listen on the defined port
app.listen(port, ()=>{ 
    // Log a message when the server is successfully running
    console.log(`Server is running on http://localhost:${port}`)
});

