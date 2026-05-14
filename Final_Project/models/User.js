// models/User.js
// This defines the structure of a User document in MongoDB

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,   // this field must be filled
      trim: true        // removes extra spaces
    },

    email: {
      type: String,
      required: true,
      unique: true,     // no two users can have the same email
      lowercase: true,  // always saves email in lowercase
      trim: true
    },

    password: {
      type: String,
      required: true
    },

    role: {
      type: String,
      enum: ['user', 'admin'],  // only these two values allowed
      default: 'user'           // new users get role 'user' by default
    }
  },
  {
    timestamps: true  // auto adds createdAt and updatedAt fields
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
