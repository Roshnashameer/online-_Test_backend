const mongoose = require("mongoose");

// Define the schema
const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  choices: {
    type: [String],
    required: true,
  },
  correctChoice: {
    type: Number,
    required: true,
  },
});

// Create the model
const questions = mongoose.model("question", questionSchema);

// Export the model
module.exports = questions;
