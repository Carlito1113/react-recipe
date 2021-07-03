const User = require("../models/User");

exports.register = (req, res, next) => {
  const { username, password } = req.body;
};
exports.login = (req, res, next) => {
  res.send("Login Route");
};
