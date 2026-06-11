const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Users Route Working",
  });
});

router.get("/error", (req, res, next) => {
  const error = new Error("Custom Error Triggered");
  error.statusCode = 400;

  next(error);
});

module.exports = router;