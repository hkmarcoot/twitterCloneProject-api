import express from "express";
const router = express.Router();

import { Twitter } from "../api/helpers/twitter.js";
// const Twitter = require("../api/helpers/twitter");
//let twitter = new Twitter();

router.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
router.use(express.json());

router.get("/", (req, res) => {
  const query = req.query.q;
  const resultType = req.query.result_type;
  const maxId = req.query.max_id;
  Twitter(query, resultType, maxId)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

export default router;
