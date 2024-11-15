/**
 * File: route.js
 * Student Name: Kanchandeep Kaur
 * Student ID: 200603165
 * Date: 15-11-24
 */

const express = require("express"); // Import the Express module
const router = express.Router(); // Create a new router instance
const {
  getAllRecipes,
  getRecipeById,
  addRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../Controller/controller"); // Import Controller function

// Get all recipes
router.get("/recipes", getAllRecipes);

// Get recipe by ID
router.get("/recipes/:id", getRecipeById); 

// Add new recipe
router.post("/recipes", addRecipe); 

// Update recipe by ID
router.put("/recipes/:id", updateRecipe); 

// Delete recipe by ID
router.delete("/recipes/:id", deleteRecipe); 

module.exports = router; // Export the router to be used in the main app