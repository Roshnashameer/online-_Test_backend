const express = require("express");

const router = new express.Router();

const {
  signUp,
  questions,
  submit,
  results,
} = require("../controller/userControler");
const { jwtMiddleware } = require("../middlewares/jwtMiddleware");

// POST:User creation
router.post("/register", signUp);

//GET:AccessQuestions
router.get("/questions", jwtMiddleware, questions);

//POST:Submit Answers
router.post("/:id/submit", jwtMiddleware, submit);

//GET:results
router.get("/:id/results", results);

module.exports = router;
