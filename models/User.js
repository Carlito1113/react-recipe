const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide a username'],
      min: 6,
      max: 255,
    },
    password: {
      type: String,
      required: [true, 'Please add a passaword'],
      min: 6,
      max: 1024,
    },
    recipes: [
      {
        recipeApiId: {
          type: Number,
          required: true,
        },
        title: {
          type: String,
          required: false,
        },
        image: {
          type: String,
          required: false,
        },
        readyInMinutes: {
          type: Number,
          required: false,
        },
        servings: {
          type: Number,
          required: false,
        },
        sourceUrl: {
          type: String,
          required: false,
        },
        summary: {
          type: String,
          required: false,
        },
      },
    ],
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  // Hashing user password
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('User', userSchema);
