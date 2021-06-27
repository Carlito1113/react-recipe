const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation } = require("../validation");

// REGISTER
router.post("/register", async (req, res) => {
  // Input Validation
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if user already exists
  const userExists = await User.findOne({ userName: req.body.userName });
  if (userExists) return res.status(400).send("Username already exists");

  //Hash password
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  // Create New User
  const user = new User({
    userName: req.body.userName,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  // Input Validation
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // Check if Username exists
  const user = await User.findOne({ userName: req.body.userName });
  if (!user) return res.status(400).send("Username was not found");
  // Check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if(!validPassword) return res.status(400).send("Invalid password")

  res.send("Logged in!")
});

module.exports = router;
