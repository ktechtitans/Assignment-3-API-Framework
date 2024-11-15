/**
 * File: recipe.js
 * Student Name: Kanchandeep Kaur
 * Student ID: 200603165
 * Date: 15-11-24
 */


const mongoose = require('mongoose'); // Import Mongoose for MongoDB interaction

// Define the schema for the recipe
const recipeSchema = new mongoose.Schema({
  recipeName: { type: String, required: true },
  ingredients: { type: [String], required: true },
  cookingTime: { type: Number, required: true },
  difficulty: { type: String, required: true },
  cuisine: { type: String, required: true },
  description: { type: String, required: true },
  photoLink: { type: String, required: true },
  averageRating: { type: Number, required: true, min: 0, max: 5 }
});

// Create the Recipe model from the schema
const Recipe = mongoose.model('Recipe', recipeSchema);

// Export the Recipe model to be used in other parts of the application
module.exports = Recipe;
