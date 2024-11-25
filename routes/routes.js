const express = require("express");

const router = new express.Router();

const {
  signUp,
  questions,
  submit,
  results,
} = require("../controller/userControler");
const { jwtMiddleware } = require("../middlewares/jwtMiddleware");

// GET:User creation
router.post("/register", signUp);

router.get("/questions", jwtMiddleware, questions);

//POST:submit
router.post("/:id/submit", jwtMiddleware, submit);

router.get("/:id/results", results);

module.exports = router;
