const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: [true, "Please add a passaword"],
        min: 6,
        max: 1024,
        select: false
    }
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)