const express = require("express");
const router = express.Router();
const { getRecipes, saveRecipe} = require("../controllers/recipebook")

// Getting all recipes
router.get("/food", getRecipes);

// Save a recipe
router.post("/", saveRecipe);

module.exports = router;
