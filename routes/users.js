import express from "express";
const router = express.Router();

// const Twitter = require("./api/helpers/twitter");
// const twitter = new Twitter();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ message: "I wish we had some information to give you ☹️" });
});

export default router;
