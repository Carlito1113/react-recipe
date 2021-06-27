const router = require("express").Router();
const User = require("../models/user")
const bcrypt = require("bcryptjs")
const { registerValidation } = require("../validation")

router.post("/register", async (req, res) => {
    // Input Validation
    const { error } = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    
    // Check if user already exists
    const emailExists = await User.findOne({userName: req.body.userName})
    if(emailExists) return res.status(400).send("Username already exists")

    //Hash password
    const hash = await
    
    // Create New User
    const user = new User({
        userName: req.body.userName,
        password: req.body.password,
    })
    try {
        const savedUser = await user.save()
        res.send(savedUser)
    }
    catch (err) {
        res.status(400).send(err)
    }
})


router.post("/login", (req, res) => {

})

module.exports = router