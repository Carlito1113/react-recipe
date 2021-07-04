const express = require("express");
const router = express.Router();
const { getRecipes, saveRecipe } = require("../controllers/recipebook");
const { verify } = require("../middleware/verifyToken");

// Getting all recipes
router.get("/:id", verify, getRecipes);

// Save a recipe
router.post("/", verify, saveRecipe);

module.exports = router;
