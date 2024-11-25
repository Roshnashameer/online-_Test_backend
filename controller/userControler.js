const users = require("../models/userModel");
const jwt = require("jsonwebtoken");

const question = require("../models/questionSchema");

exports.signUp = async (req, res) => {
  const { userName, email, phoneno } = req.body;

  try {
    // Check if user already exists
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already attended the test" });
    }

    // Create a new user
    const newUser = new users({
      userName,
      email,
      phoneno,
      score: 0,
    });

    await newUser.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(201).json({
      message: "User registered successfully",
      user: newUser,
      token,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: `Error registering user: ${err.message}` });
  }
};
exports.questions = async (req, res) => {
  try {
    const questions = await question.find();
    res.status(200).json(questions);
  } catch (err) {
    res.status(401).json(err);
  }
};
exports.submit = async (req, res) => {
  const { score } = req.body;
  const userId = req.params.id;

  try {
    // Update the user's score
    const exam_user = await users.findByIdAndUpdate(
      userId,
      { score },
      { new: true, runValidators: true } // Return the updated document and run validators
    );

    if (!exam_user) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ exam_user, message: "Test submitted successfully!" });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
exports.results = async (req, res) => {
  const { id } = req.params;

  try {
    const user_data = await users.findOne({ _id: id });

    res.status(200).json(user_data);
  } catch (err) {
    res.status(401).json(err);
  }
};
