const Recipebook = require("../models/recipe");
const User = require("../models/User");

// Get all recipes
exports.getRecipes = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id}).populate("recipes");
    res.send(user.recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Save a recipe
exports.saveRecipe = async (req, res) => {
  const recipe = new Recipebook({
    title: req.body.title,
    image: req.body.image,
    preparationMinutes: req.body.preparationMinutes,
    readyInMinutes: req.body.readyInMinutes,
    servings: req.body.servings,
    sourceUrl: req.body.sourceUrl,
    summary: req.body.summary,
  });

  try {
    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
