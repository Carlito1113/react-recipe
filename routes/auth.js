const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");
const { register, login } = require("../controllers/auth");

// REGISTER
router.post("/register", register, async (req, res) => {
  // Input Validation
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if user already exists
  const userExists = await User.findOne({ username: req.body.username });
  if (userExists) return res.status(400).send("username already exists");

  //Hash password
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  // Create New User
  const user = new User({
    username: req.body.username,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: savedUser._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

// LOGIN
router.post("/login", login, async (req, res) => {
  // Input Validation
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // Check if username exists
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send("username was not found");
  // Check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid password");

  try {
    // Create and assign token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
