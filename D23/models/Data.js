// models/Data.js
// This defines the structure of a Data document in MongoDB
// This will be used to store items/posts/records for the final project

const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    category: {
      type: String,
      trim: true,
      default: 'General'
    },

    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active'
    },

    // Links each data record to the user who created it
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,  // references a User document
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true  // auto adds createdAt and updatedAt
  }
);

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
