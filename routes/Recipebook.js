const express = require("express");
const router = express.Router();
const { getRecipes, saveRecipe } = require("../controllers/recipebook");
const { verify } = require("../middleware/verifyToken");

// Getting all recipes
router.get("/", verify, getRecipes);

// Save a recipe
router.post("/", saveRecipe);

module.exports = router;
