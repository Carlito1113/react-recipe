const express = require("express")
const router = express.Router()
const Recipebook = require("../models/recipe")

// Getting all recipes
router.get("/", async (req, res) => {
    try {
        // const recipes = await Recipebook.find()
        res.send("you've reached the backend")
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Save a recipe
router.post("/", async (req, res) => {

    const recipe = new Recipebook({
        title: req.body.title,
        image: req.body.image,
        preparationMinutes: req.body.preparationMinutes,
        readyInMinutes: req.body.readyInMinutes,
        servings: req.body.servings,
        sourceUrl: req.body.sourceUrl,
        summary: req.body.summary
    })

    try {
        const newRecipe = await recipe.save()
        res.status(201).json(newRecipe)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = router