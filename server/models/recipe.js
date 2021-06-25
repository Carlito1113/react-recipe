const mongoose = require("mongoose")

const recipebookSchema = new mongoose.Schema({
    recipeName: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    preparationMinutes: {
        type: Number,
        required: false
    },
    readinInMinutes: {
        type: Number,
        required: false
    },
    servings: {
        type: Number,
        required: false
    },
    sourceUrl: {
        type: String,
        required: false
    },
    summary: {
        type: String,
        required: false
    },
})

module.exports = mongoose.model("Recipebook", recipebookSchema)